import React from "react";
import {
    Edit,
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

const UserEdit = (props) => {
    return (
        <Edit title="Edit User" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
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
                />
                <BooleanInput label="Enabled" source="enabled" />
                <DateInput label="Created" source="created" disabled />
            </SimpleForm>
        </Edit>
    );
};

export default UserEdit;
