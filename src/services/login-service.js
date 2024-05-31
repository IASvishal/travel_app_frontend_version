import axios from "axios";

export const loginHandler = async (number, password) => {
    try {
        const {
            data: { accessToken, username },
        } = await axios.post(
            "https://travel-app-backend-version-1.onrender.com/api/auth/login",
            {
                number: number,
                password: password,
            }
        );
        console.log("Logged IN");
        console.log({ accessToken, username });
        localStorage.setItem("token", accessToken);
        localStorage.setItem("username", username);
        return { accessToken, username };
    } catch (err) {
        console.log("unable to login");
    }
};