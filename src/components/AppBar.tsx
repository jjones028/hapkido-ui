import {Button, Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import {Logo} from "./Logo.tsx";

interface Props {
    onAddButtonClick: () => void
}

function AppBar(props: Props) {
    return (
        <Navbar maxWidth="full">
            <NavbarBrand>
                <Logo/>
                <p className="text-secondary">Hapkido</p>
            </NavbarBrand>
            <div className="justify-end">
                <NavbarContent>
                    <Button className="bg-primary text-background content-end">Login</Button>
                    <Button className="bg-primary text-background content-end" onClick={props.onAddButtonClick}>Add CA</Button>
                </NavbarContent>
            </div>
        </Navbar>
    );
}
export default AppBar;
