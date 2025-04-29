import { useState } from "react";
import { useAuth } from "../Auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../Auth/constants";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
export default function Signup() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorResponse, setErrorResponse] = useState("");

    const Auth = useAuth();
    const goTo = useNavigate();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {

            const response = await fetch(`${API_URL}/signup`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    username,
                    password,
                }),
            })

            if (response.ok) {
                console.log("User created successfully");
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
        <>

            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <img src="/logo1.png" alt="Logo" style={{ width: '180px', height: 'auto' }} />
                </div>
                <h3>Sign Up</h3>
                {!!errorResponse && ( // <-- si hay error, mostramos el Alert
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert variant="outlined" severity="error">
                            {errorResponse}
                        </Alert>
                    </Stack>
                )}
                <label>Name</label>
                <input type="text" placeholder="Nombre completo" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Username</label>
                <input type="text" placeholder="Nombre de usuario" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />

                <label>Password</label>
                <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button>Confirmar</button>
                <button
                    onClick={() => navigate('/')}
                >
                    Volver
                </button>

            </form>
        </>
    );
}