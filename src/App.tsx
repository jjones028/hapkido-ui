import './App.css'
import axios from "axios"
import {useEffect, useState} from "react"
import AppBar from "./components/AppBar.tsx"
import SubjectNameCard from "./components/SubjectNameCard.tsx"
import {SubjectName} from "./interfaces/SubjectName.ts"



function App() {
    const [elements, setElements] = useState<SubjectName[]>([])

    useEffect(() => {
        const getElements = async () => {
            const response = await axios.get('/api/subjectnames');
            setElements(response.data);
        }
        getElements().then()
    },[]);

    return (
        <>
            <AppBar />
            <div className="grid grid-cols-3 grid-rows-3 gap-3">
                { elements.map((subjectName) => (
                    <SubjectNameCard key={subjectName.id} subjectName={subjectName} />
                )) }
            </div>
        </>
    );
}

export default App
