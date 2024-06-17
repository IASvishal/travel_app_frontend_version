import "./Auth.css";
import { validateNumber, validatePassword } from "../../utils";
import { useAuth } from "../../context";
import { loginHandler } from "../../services";
import Swal from "sweetalert2"; // Import SweetAlert

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {
    const { authDispatch, number, password } = useAuth();

    const handleNumberChange = (event) => {
        isNumberValid = validateNumber(event.target.value);
        if (isNumberValid) {
            console.log("Valid Input");
            authDispatch({
                type: "NUMBER",
                payload: event.target.value,
            });
        } else {
            console.log("Invalid Number");
        }
    };

    const handlePasswordChange = (event) => {
        isPasswordValid = validatePassword(event.target.value);
        if (isPasswordValid) {
            console.log("Valid Input");
            authDispatch({
                type: "PASSWORD",
                payload: event.target.value,
            });
        } else {
            console.log("Invalid Password");
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (isNumberValid && isPasswordValid) {
            loginHandler(number, password)
                .then(({ accessToken, username }) => {
                    authDispatch({
                        type: "SET_ACCESS_TOKEN",
                        payload: accessToken,
                    });
                    authDispatch({
                        type: "SET_USERNAME",
                        payload: username,
                    });
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Login successful!',
                    });
                    authDispatch({
                        type: "CLEAR_USER_DATA",
                    });
                    authDispatch({
                        type: "SHOW_AUTH_MODAL",
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Login failed. Please try again.',
                    });
                });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Input',
                text: 'Please ensure all fields are valid.',
            });
        }
    };

    return (
        <div className="auth-container">
            <form action="" onSubmit={handleFormSubmit}>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Mobile Number <span className="asterisk">*</span></label>
                    <input className="auth-input" required type="number" onChange={handleNumberChange}
                        defaultValue={number}
                        placeholder="Enter Mobile Number" maxLength="10" />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Password<span className="asterisk">*</span></label>
                    <input className="auth-input" required type="password" onChange={handlePasswordChange}
                        defaultValue={password}
                        placeholder="Enter Password" />
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">Login</button>
                </div>
            </form>
        </div>
    );
};
