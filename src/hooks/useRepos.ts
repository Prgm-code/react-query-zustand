import api from "../api/github"
import { useEffect, useState } from "react";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { Repository } from "./types";


async function  fetchRepos (ctx :QueryFunctionContext) {
    const gitHubUser = ctx.queryKey[1];

    try {
        const { data } = await api.get<Repository[]>(`/users/${gitHubUser}/repos`);
        return data;
    }
    catch (error) {
        console.log(error);
    }


}
        

export function useFetchRepositories (gitHubUser: string) {

return useQuery(["repos",gitHubUser], fetchRepos);
}



    