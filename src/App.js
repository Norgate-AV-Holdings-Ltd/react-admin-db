import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import UserList from "./components/user/UserList";
import UserEdit from "./components/user/UserEdit";
import UserCreate from "./components/user/UserCreate";
import SourceList from "./components/source/SourceList";
import SourceEdit from "./components/source/SourceEdit";
import SourceCreate from "./components/source/SourceCreate";
import RoomList from "./components/room/RoomList";
import RoomEdit from "./components/room/RoomEdit";
import RoomCreate from "./components/room/RoomCreate";
import UserIcon from "@material-ui/icons/People";
import InputIcon from "@material-ui/icons/Input";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";

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
        <Resource
            name="rooms"
            list={RoomList}
            create={RoomCreate}
            edit={RoomEdit}
            icon={MeetingRoomIcon}
        />
    </Admin>
);

export default App;
