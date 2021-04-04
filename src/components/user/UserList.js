import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
    BooleanField,
} from "react-admin";

const UserList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="firstName" />
                <TextField source="lastName" />
                <TextField source="userName" />
                <EmailField source="email" />
                <TextField source="type" />
                <BooleanField source="enabled" />
                <EditButton basePath="/users" />
                <DeleteButton basePath="/users" />
            </Datagrid>
        </List>
    );
};

export default UserList;
