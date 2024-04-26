import './App.css'
import {Button, Card, CardBody, CardHeader, Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import {Logo} from "./Logo.tsx";
import axios from "axios";
import {useEffect, useState} from "react";

interface SubjectNames{
    id: number,
    commonName: string,
    organization: string,
    countryCode: string,
    stateOrProvince: string,
    locality: string,
    organizationalUnit: string,
    emailAddress: string
}

function App() {
    const [elements, setElements] = useState<SubjectNames[]>([])
    useEffect(() => {
        const getElements = async () => {
            const response = await axios.get('/api/subjectnames');
            setElements(response.data);
        }
        getElements().then()
    },[]);

    return (
        <>
            <Navbar maxWidth="full">
                <NavbarBrand>
                    <Logo/>
                    <p className="text-secondary">Hapkido</p>
                </NavbarBrand>
                <NavbarContent/>
            </Navbar>
            <div className="grid grid-cols-3 grid-rows-3 gap-3">
                {elements.map((i) => (
                    <Card className="p-4 bg-accent text-background shadow-lg rounded-lg hover:bg-primary"
                          key={i.id}
                          isPressable={true}>
                        <CardHeader>{i.organization}</CardHeader>
                        <CardBody>
                            <p>
                                Common Name: {i.commonName}<br/>
                                Organizational Unit: {i.organizationalUnit}<br/>
                                Location: {i.locality}, {i.stateOrProvince} {i.countryCode}<br/>
                                Email: {i.emailAddress}<br/>
                            </p>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <div className="flex w-full gap-3 p-3 justify-end">
                <Button className="bg-primary text-background">Add CA</Button>
            </div>
        </>
    );
}

export default App
