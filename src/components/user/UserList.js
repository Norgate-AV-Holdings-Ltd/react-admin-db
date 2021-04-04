import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
    BooleanField,
    CloneButton,
    DateField,
} from "react-admin";

const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField label="First Name" source="firstName" />
                <TextField label="Last Name" source="lastName" />
                <TextField label="Username" source="userName" />
                <EmailField label="Email" source="email" />
                <TextField label="Type" source="type" />
                <BooleanField label="Enabled" source="enabled" />
                <DateField label="Created" source="created" />
                <EditButton basePath="/users" />
                <DeleteButton basePath="/users" />
                <CloneButton basePath="/users" />
            </Datagrid>
        </List>
    );
};

export default UserList;
