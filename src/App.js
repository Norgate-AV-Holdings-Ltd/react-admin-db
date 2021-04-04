import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import UserList from "./components/user/UserList";
import UserEdit from "./components/user/UserEdit";
import UserCreate from "./components/user/UserCreate";
import UserIcon from "@material-ui/icons/People";

const dataProvider = simpleRestProvider("http://localhost:3000");

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource
            name="users"
            list={UserList}
            create={UserCreate}
            edit={UserEdit}
            icon={UserIcon}
        />
    </Admin>
);

export default App;
