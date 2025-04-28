import DefaultLayout from "../Layout/DefaultLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../Auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../Auth/constants";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse] = useState("");
    const Auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {

            const response = await fetch(`${API_URL}/login`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            })

            if (response.ok) {
                console.log("Login successful");
                setErrorResponse("");

                goTo("/");
            } else {
                console.log("Error creating user");

                const json = await response.json();
                setErrorResponse(json.body.error);
            }

        } catch (error) {
            console.log(error);
        }
    }


    if (Auth.isAuthenticated) {
        return <Navigate to="/App" />;
    }
    return (
        <form onSubmit={handleSubmit}>

            <h3>Login Here</h3>

            <label>Username</label>
            <input type="text" placeholder="Email or Phone" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />

            <label>Password</label>
            <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button>Log In</button>
            <Link to="/signup">

                <button>Sign Up</button>

            </Link>
        </form>

    );
}