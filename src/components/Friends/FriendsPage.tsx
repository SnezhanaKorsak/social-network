import React from "react";
import {FriendsContainer} from "./FriendsContainer";
import {PaginationContainer} from "./Pagination/PaginationContainer";

export const FriendsPage = () => {
    return (
        <>
            <PaginationContainer/>
            <FriendsContainer/>
        </>
    )
}