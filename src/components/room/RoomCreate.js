import { React } from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    BooleanInput,
    DateInput,
} from "react-admin";
import { validateName } from "./RoomValidation";

const RoomCreate = (props) => {
    return (
        <Create title="Create a Room" {...props}>
            <SimpleForm redirect="list">
                <TextInput label="Name" source="name" validate={validateName} />
                <BooleanInput
                    label="Login Enabled"
                    source="loginEnabled"
                    defaultValue={true}
                />
                <DateInput
                    label="Created"
                    source="created"
                    defaultValue={new Date()}
                    disabled
                />
            </SimpleForm>
        </Create>
    );
};

export default RoomCreate;
