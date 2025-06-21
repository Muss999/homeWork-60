import { useEffect, useState } from "react";
import "./App.css";
import MessageForm from "./components/MessageForm/MessageForm";
import MessagesList from "./components/MessagesList/MessagesList";
import Preloader from "./components/Preloader/Preloader";
import type { TypeMessage } from "./helpers/types";

const messagesApi: string = "http://146.185.154.90:8000/messages";

const App = () => {
    const [messages, setMessages] = useState<TypeMessage[]>([]);

    const fetchData = async () => {
        const response = await fetch(messagesApi);
        if (response.ok) {
            const result = await response.json();
            setMessages(result);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <MessagesList messages={messages} />
            <Preloader />
            <MessageForm />
        </div>
    );
};

export default App;
