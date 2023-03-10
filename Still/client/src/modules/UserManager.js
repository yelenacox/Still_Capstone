import { getToken } from "./AuthManager";

const apiUrl = "/api/UserProfile";

export const getAllUsers = () => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((resp) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error(
                    "Unknown Error occured when trying to fetch users",
                );
            }
        });
    });
};