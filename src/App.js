import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import UserList from "./components/user/UserList";
import UserEdit from "./components/user/UserEdit";
import UserCreate from "./components/user/UserCreate";
import SourceList from "./components/source/SourceList";
import SourceEdit from "./components/source/SourceEdit";
import SourceCreate from "./components/source/SourceCreate";
import UserIcon from "@material-ui/icons/People";
import InputIcon from "@material-ui/icons/Input";

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
        <Resource
            name="sources"
            list={SourceList}
            create={SourceCreate}
            edit={SourceEdit}
            icon={InputIcon}
        />
    </Admin>
);

export default App;
