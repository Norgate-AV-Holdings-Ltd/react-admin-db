import { React } from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    NumberInput,
} from "react-admin";
import { validateName, validateInput } from "./SourceValidation";

const SourceCreate = (props) => {
    return (
        <Create title="Create a Source" {...props}>
            <SimpleForm redirect="list">
                <TextInput label="Name" source="name" validate={validateName} />
                <NumberInput
                    label="Input"
                    source="input"
                    validate={validateInput}
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

export default SourceCreate;
