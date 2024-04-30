import {Button, Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import {Logo} from "./Logo.tsx";

function AppBar() {
    return (
        <Navbar maxWidth="full">
            <NavbarBrand>
                <Logo/>
                <p className="text-secondary">Hapkido</p>
            </NavbarBrand>
            <div className="justify-end">
                <NavbarContent>
                    <Button className="bg-primary text-background content-end justify-end">Add CA</Button>
                </NavbarContent>
            </div>
        </Navbar>
    );
}
export default AppBar;
