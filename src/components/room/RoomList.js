import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    BooleanField,
    CloneButton,
    DateField,
} from "react-admin";

const RoomList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField label="Name" source="name" />
                <BooleanField label="Login Enabled" source="loginEnabled" />
                <DateField label="Created" source="created" />
                <EditButton basePath="/rooms" />
                <DeleteButton basePath="/rooms" />
                <CloneButton basePath="/rooms" />
            </Datagrid>
        </List>
    );
};

export default RoomList;
