import './App.css'
import {Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import {Logo} from "./Logo.tsx";

function App() {
    {/*const [count, setCount] = useState(0)*/}
    {/*<Card>*/}
    {/*    <CardBody>*/}
    {/*         <p>Make beautiful websites regardless of your design experience.</p>*/}
    {/*         <Button color="primary" onPress={() => setCount((count) => count + 1)}>*/}
    {/*             Count is {count}*/}
    {/*         </Button>*/}
    {/*     </CardBody>*/}
    {/* </Card>*/}

    const elements = [...Array(9).keys()].map(i=> ++i);
    return (
    <>
        <Navbar maxWidth="full">
            <NavbarBrand>
                <Logo />
                <p className="font-bold text-inherit">Spektacle.io</p>
            </NavbarBrand>
            <NavbarContent />
        </Navbar>
        <div className="grid grid-cols-3 grid-rows-3 gap-3">
            { elements.map((i) => (
                <div key={i} className="p-4 bg-teal-500 shadow-lg rounded-lg hover:bg-teal-900">{i}</div>
            ))}
        </div>
    </>
  )
}

export default App
