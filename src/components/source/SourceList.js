import React from "react";
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    DeleteButton,
    CloneButton,
    DateField,
} from "react-admin";

const SourceList = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField label="Name" source="name" />
                <NumberField label="Input" source="input" />
                <DateField label="Created" source="created" />
                <EditButton basePath="/sources" />
                <DeleteButton basePath="/sources" />
                <CloneButton basePath="/sources" />
            </Datagrid>
        </List>
    );
};

export default SourceList;
