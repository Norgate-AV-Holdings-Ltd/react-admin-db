import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import UserList from "./components/user/UserList";

const dataProvider = simpleRestProvider("http://localhost:3000");

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
