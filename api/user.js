"use server";

import axios from "axios";
const api = process.env.NODE_ENV;

export const  signin = async (name, password) => {
    try {
        const response = await axios.post(`${api}/api/user/signin`, {
            name,
            password
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};