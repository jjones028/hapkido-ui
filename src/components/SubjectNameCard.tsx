import {Card, CardBody, CardHeader} from "@nextui-org/react";
import {SubjectName} from "../interfaces/SubjectName.ts";

interface Props {
    subjectName: SubjectName;
}

function SubjectNameCard(props: Props) {
    return (
        <Card className="m-4 p-4 bg-primary text-background shadow-lg rounded-lg hover:bg-accent"
              key={props.subjectName.id}
              isPressable={true}>
            <CardHeader className="font-bold">{props.subjectName.organization}</CardHeader>
            <CardBody>
                <p>
                    Common Name: {props.subjectName.commonName}<br/>
                    Organizational Unit: {props.subjectName.organizationalUnit}<br/>
                    Location: {props.subjectName.locality}, {props.subjectName.stateOrProvince} {props.subjectName.countryCode}<br/>
                    Email: {props.subjectName.emailAddress}<br/>
                </p>
            </CardBody>
        </Card>
    )
}
export default SubjectNameCard;