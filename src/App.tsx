import './App.css'
import axios from "axios"
import {useEffect, useState} from "react"
import AppBar from "./components/AppBar.tsx"
import SubjectNameCard from "./components/SubjectNameCard.tsx"
import {SubjectName} from "./interfaces/SubjectName.ts"
import {Button, Modal, ModalBody, ModalContent, ModalFooter} from "@nextui-org/react";



function App() {
    const [elements, setElements] = useState<SubjectName[]>([])
    const [editDialogIsOpen, setEditDialogIsOpen] = useState<boolean>(false)

    useEffect(() => {
        const getElements = async () => {
            const response = await axios.get('/api/subjectnames');
            setElements(response.data);
        }
        getElements().then()
    },[]);

    return (
        <>
            <Modal isOpen={editDialogIsOpen} onClose={() => setEditDialogIsOpen(false)}>
                <ModalContent>
                    <ModalBody></ModalBody>
                    <ModalFooter>
                        <Button className="bg-primary text-background" onClick={() => setEditDialogIsOpen(false)}>Save</Button>
                        <Button className="bg-danger-200" onClick={() => setEditDialogIsOpen(false)}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <AppBar />
            <div className="grid grid-cols-3 grid-rows-3 gap-3">
                { elements.map((subjectName) => (
                    <SubjectNameCard key={subjectName.id} subjectName={subjectName} onClick={() => setEditDialogIsOpen(true)} />
                )) }
            </div>
        </>
    );
}

export default App
