import { useState } from 'react'
import './App.css'
import {Button, Card, CardBody, Navbar} from "@nextui-org/react";

function App() {
  const [count, setCount] = useState(0)

    {/*<Card>*/}
    {/*    <CardBody>*/}
    {/*         <p>Make beautiful websites regardless of your design experience.</p>*/}
    {/*         <Button color="primary" onPress={() => setCount((count) => count + 1)}>*/}
    {/*             Count is {count}*/}
    {/*         </Button>*/}
    {/*     </CardBody>*/}
    {/* </Card>*/}

  return (
    <>
        <Navbar className="bg-blue-500"></Navbar>
        <div className="grid grid-cols-3 grid-rows-3 gap-3">
            <div className="p-4 bg-teal-500 shadow-lg rounded-lg hover:bg-teal-900">1</div>
            <div className="p-4 bg-teal-500 shadow-lg rounded-lg">2</div>
            <div className="p-4 bg-teal-500 shadow-lg rounded-lg">3</div>
            <div className="p-4 bg-teal-500 shadow-lg rounded-lg">4</div>
            <Card>
                <CardBody>
                     <p>Make beautiful websites regardless of your design experience.</p>
                     <Button color="primary" onPress={() => setCount((count) => count + 1)}>
                         Count is {count}
                     </Button>
                 </CardBody>
             </Card>
            <div className="p-4 bg-teal-500 shadow-lg rounded-lg">6</div>
            <div className="p-4 bg-teal-500 shadow-lg rounded-lg">7</div>
            <div className="p-4 bg-teal-500 shadow-lg rounded-lg">8</div>
            <div className="p-4 bg-teal-500 shadow-lg rounded-lg">9</div>
        </div>
    </>
  )
}

export default App
