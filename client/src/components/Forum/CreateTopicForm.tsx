import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateTopic.module.css";
import { API } from "../../servises/api";

export type TopicFormData = {
    theme: string;
}

type FormProps = {
    onSubmit: (data: TopicFormData) => void;
}

export default function CreateTopicForm({onSubmit}: FormProps) {
    const navigate = useNavigate();
    const [theme, setTheme] = useState("");
    const [themeError, setThemeError] = useState("");
    const [message, setMessage] = useState("");
    const [messagedError, setMessageError] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({
            theme
        });
    };

    const Cansel = () => {
        navigate("/");
    };

    return <>
        <h3>Создать тему</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Тема:
                    <input value={theme} onChange={e => setTheme(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>Первое сообщение:
                    <input value={message} onChange={e => setMessage(e.target.value)}/>
                </label>
            </div>
            <button onClick={Cansel}>Отмена</button>
            <button type="submit">Создать</button>

        </form>
    </>;
}