import { getToken } from "./AuthManager";

const apiUrl = "/api/picture";

export const getAllPictures = () => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(
                    "An unknown error occurred while trying to get pictures.",
                );
            }
        });
    });
};

export const getUserPictures = (firebaseUserId) => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/UserPictures/${firebaseUserId}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error(
                    "An unknown error occurred while trying to get pictures.",
                );
            }
        });
    });
};