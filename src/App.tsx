import './App.css'
import {useEffect, useState} from "react"
import AppBar from "./components/AppBar.tsx"
import SubjectNameCard from "./components/SubjectNameCard.tsx"
import {SubjectName} from "./interfaces/SubjectName.ts"
import {SubjectNameModal} from "./components/SubjectNameModal.tsx";
import {useAccount, useMsal} from "@azure/msal-react";
import {loginRequest, protectedResources} from "./authConfig.ts";
import axios from "axios";

function App() {

    const {instance, accounts} = useMsal()
    const account = useAccount(accounts[0] || {})

    const [elements, setElements] =
        useState<SubjectName[]>([])
    const [editDialogIsOpen, setEditDialogIsOpen] =
        useState<boolean>(false)
    const [currentSubjectName, setCurrentSubjectName] =
        useState<SubjectName | undefined>()

    useEffect(() => {
        if (account) {
            instance.acquireTokenSilent({
                ...loginRequest,
                scopes: [...protectedResources.apiHapkido.scopes],
                account: account
            }).then(async (response) => {
                if (response) {
                    const result = await axios.get('/api/subjectnames',{
                        headers: {
                            "Authorization": `Bearer ${response.accessToken}`
                        }
                    })
                    setElements(result.data)
                }
            })
        }
    }, [account, instance])

    function handleOnSave() {
        setCurrentSubjectName(currentSubjectName)
        setEditDialogIsOpen(false)
    }

    return (
        <>
            <SubjectNameModal subjectName={currentSubjectName}
                              isOpen={editDialogIsOpen}
                              handleOnClose={() => setEditDialogIsOpen(false)}
                              handleOnSave={handleOnSave}>
            </SubjectNameModal>
            <AppBar />
            <div className="grid grid-cols-3 grid-rows-3 gap-3">
                { elements.map((subjectName) => (
                    <SubjectNameCard key={subjectName.id} subjectName={subjectName} onClick={() => {
                        setEditDialogIsOpen(true)
                        setCurrentSubjectName(subjectName)
                    }} />
                )) }
            </div>
        </>
    );
}

export default App
