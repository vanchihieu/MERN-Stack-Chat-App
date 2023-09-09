import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { Box } from "@chakra-ui/react";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
export default function ChatPage() {
    const { user } = ChatState();

    return <div style={{width: "100%"}}>
        {user && <SideDrawer/>}
        <Box>
            {user && <MyChats/>}
            {user && <ChatBox/>}
        </Box>
    </div>;
}
