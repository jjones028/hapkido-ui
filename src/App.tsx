import './App.css'
import axios from "axios"
import {useEffect, useState} from "react"
import AppBar from "./components/AppBar.tsx"
import SubjectNameCard from "./components/SubjectNameCard.tsx"
import {SubjectName} from "./interfaces/SubjectName.ts"
import {SubjectNameModal} from "./components/SubjectNameModal.tsx";



function App() {
    const [elements, setElements] =
        useState<SubjectName[]>([])
    const [editDialogIsOpen, setEditDialogIsOpen] =
        useState<boolean>(false)
    const [currentSubjectName, setCurrentSubjectName] =
        useState<SubjectName | undefined>()

    useEffect(() => {
        const getElements = async () => {
            const response = await axios.get('/api/subjectnames');
            setElements(response.data);
        }
        getElements().then()
    },[])

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
