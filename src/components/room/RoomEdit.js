import React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    BooleanInput,
    DateInput,
} from "react-admin";
import { validateName } from "./RoomValidation";

const RoomEdit = (props) => {
    return (
        <Edit title="Edit Room" {...props}>
            <SimpleForm>
                <TextInput label="Name" source="name" validate={validateName} />
                <BooleanInput label="Login Enabled" source="loginEnabled" />
                <DateInput label="Created" source="created" disabled />
            </SimpleForm>
        </Edit>
    );
};

export default RoomEdit;
