import { React } from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    PasswordInput,
    BooleanInput,
    DateInput,
    SelectInput,
} from "react-admin";
import {
    validateFirstName,
    validateLastName,
    validateUserName,
    validateEmail,
    validatePassword,
} from "./UserValidation";

const UserCreate = (props) => {
    return (
        <Create title="Create a User" {...props}>
            <SimpleForm redirect="list">
                <TextInput
                    label="First Name"
                    source="firstName"
                    validate={validateFirstName}
                />
                <TextInput
                    label="Last Name"
                    source="lastName"
                    validate={validateLastName}
                />
                <TextInput
                    label="Username"
                    source="userName"
                    validate={validateUserName}
                />
                <TextInput
                    label="Email"
                    source="email"
                    validate={validateEmail}
                />
                <PasswordInput
                    label="Password"
                    source="password"
                    validate={validatePassword}
                />
                <SelectInput
                    source="type"
                    choices={[
                        { id: "Admin", name: "Admin" },
                        { id: "Power", name: "Power" },
                        { id: "Standard", name: "Standard" },
                    ]}
                    defaultValue="Standard"
                />
                <BooleanInput
                    label="Enabled"
                    source="enabled"
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

export default UserCreate;
