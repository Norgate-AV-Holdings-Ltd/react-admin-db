import React from "react";
import {
    Edit,
    SimpleForm,
    TextInput,
    PasswordInput,
    BooleanInput,
} from "react-admin";

const UserEdit = (props) => {
    return (
        <Edit title="Edit User" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="firstName" />
                <TextInput source="lastName" />
                <TextInput source="userName" />
                <TextInput source="email" />
                <PasswordInput source="password" />
                <TextInput source="type" />
                <BooleanInput source="enabled" />
            </SimpleForm>
        </Edit>
    );
};

export default UserEdit;
