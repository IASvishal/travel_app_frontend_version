import axios from "axios";
export const signupHandler = async (username, number, email, password) =>{
    try{
        const data = await axios.post("https://travel-app-backend-version-1.onrender.com/api/auth/register",{
            username: username, number: number, email:email, password:password
        });
        console.log(data)
    }catch(err){
        console.log("Error Adding to the Data Base")
    }
}