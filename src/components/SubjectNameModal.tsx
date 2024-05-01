import {SubjectName} from "../interfaces/SubjectName.ts";
import {Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";

interface Props {
    subjectName: SubjectName | undefined,
    isOpen: boolean,
    handleOnClose: () => void,
    handleOnSave: () => void,
}


export const SubjectNameModal = ({ subjectName, isOpen, handleOnSave, handleOnClose }: Props) => {
    return (
        <Modal isOpen={isOpen} onClose={handleOnClose}>
        <ModalContent>
            <ModalHeader>Edit Subject Name</ModalHeader>
            <ModalBody>
                <Input type="text" label="Common Name" placeholder="Enter the common name" value={subjectName?.commonName} />
                <Input type="text" label="Organization" placeholder="Enter the organization" value={subjectName?.organization} />
                <Input type="text" label="Organizational Unit" placeholder="Enter the organizational unit" value={subjectName?.organizationalUnit} />
                <Input type="text" label="Country Code" placeholder="Enter the country code" value={subjectName?.countryCode} />
                <Input type="text" label="State or Province" placeholder="Enter the state or province" value={subjectName?.stateOrProvince} />
                <Input type="text" label="Locality" placeholder="Enter the locality" value={subjectName?.locality} />
                <Input type="email" label="Email" placeholder="Enter the email address" value={subjectName?.emailAddress} />
            </ModalBody>
            <ModalFooter>
                <Button className="bg-primary text-background" onClick={handleOnSave}>Save</Button>
                <Button className="bg-danger-200" onClick={handleOnClose}>Cancel</Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    )
}