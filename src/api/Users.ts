import {instance} from "./createKy.ts";
import {User} from "../types";

export const getUserList = async () => {
    try {
        const response = await instance.get('users').json<User[]>();
        return response;
    } catch (error) {
        throw new Error();
    }
}
export const getUser = async (userId : string) => {
    const searchParams = new URLSearchParams();
    searchParams.set("userId", userId);
    console.log(`${searchParams}`,"searchParams")
    try {
        const response = await instance.get(`users?${searchParams}`).json<User[]>();
        console.log(response,"response");
        return response;
    } catch (error) {
        throw new Error();
    }
}

export const deleteUser = async (userId : number) => {
    try {
        const response = await instance.delete(`users/${userId}`).json<User[]>();
        return response;
    } catch (error) {
        throw new Error();
    }
}
export const postUserList = async (user: User) => {
    try {
        const response = await instance.post('users', {
            body: JSON.stringify(user),
        }).json<User>();
        return response;
    } catch (error) {
        throw new Error();
    }
}

