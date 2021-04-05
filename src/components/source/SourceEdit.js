import React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    DateInput,
    NumberInput,
} from "react-admin";
import { validateName, validateInput } from "./SourceValidation";

const SourceEdit = (props) => {
    return (
        <Edit title="Edit Source" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput label="Name" source="name" validate={validateName} />
                <NumberInput
                    label="Input"
                    source="input"
                    validate={validateInput}
                />
                <DateInput label="Created" source="created" disabled />
            </SimpleForm>
        </Edit>
    );
};

export default SourceEdit;
