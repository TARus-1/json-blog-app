import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useFormState } from "react-dom";

export default function LoginPage() {
    const[username, setUsername] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();
}