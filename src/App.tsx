import { useState } from 'react'
import './App.css'
import {Button, Card, CardBody} from "@nextui-org/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="flex fex-wrap gap-4 items-center justify-center">
            <Card>
                <CardBody>
                    <p>Make beautiful websites regardless of your design experience.</p>
                    <Button color="primary" onPress={() => setCount((count) => count + 1)}>
                        Count is {count}
                    </Button>
                </CardBody>
            </Card>
        </div>
    </>
  )
}

export default App
