import React, {FormEvent, useState} from 'react';
import CreateTopicForm, {TopicFormData} from "../components/Forum/CreateTopicForm";
import {API} from "../servises/api";
import {useNavigate} from "react-router-dom";
import LoginForm from "../components/LoginRegistrationForm/LoginForm";

const CreateTopic = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState("");
    const [themeError, setThemeError] = useState("");
    const [message, setMessage] = useState("");
    const [messagedError, setMessageError] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const onSubmit = (data: TopicFormData) => {
        const createRequest = async () => {
            setResult("");
            setError("");
            try {
                await API.createTopic.create(data);
                console.log("Yes")
                setResult("Топик успешно создан!");
                navigate("/");
            } catch (e) {
                if (e instanceof Error) {
                    console.log("No")
                    setError(e.message);
                }
            }
        };
        createRequest();
    };

    return <>
        <div>
            <CreateTopicForm onSubmit={onSubmit}/>
            {result && <>{result}</>}
            {error && <>{error}</>}
        </div>
    </>;
};

export default CreateTopic;