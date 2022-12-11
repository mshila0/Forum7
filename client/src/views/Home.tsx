import React, { useEffect, useState } from 'react';
import { API } from "../servises/api";
import {useNavigate} from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    const userRequest = async () => {
      setLogged(false);
      setResult("");
      setError("");
      try {
        const user = await API.user.getCurrentUser();
        setResult(`Добро пожаловать, ${user.login}`);
        setLogged(true);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    };
    userRequest();
  }, []);

  const handleLogout = () => {
    const logoutRequest = async () => {
      try {
        await API.auth.logout();
        setLogged(false);
        setResult("");
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    };
    logoutRequest();
  };

  const createTopic = () => {
    navigate("/createTopic");
  };

  return <>
    <h3>Главная страница</h3>
    Home sweet home
    {result && <div>{result}</div>}
    {error && <div>{error}</div>}
    {isLogged && <button onClick={handleLogout}>Разлогиниться</button>}
    {isLogged && <button onClick={createTopic}>Создать новую тему</button>}
  </>;
}

export default Home;