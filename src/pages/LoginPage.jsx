import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useFormState } from "react-dom";

export default function LoginPage() {
    const[username, setUsername] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        if (username.trim() === "") {
         return;
        }

        login(username);
        navigate("/");
    }

    return (
        <main>
            <div className="post=entry">
                <h3>Login</h3>
                <p>You must log in to add comments!</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            
            </div>
        </main>
    )
}