import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import "./App.css";
import MessageForm from "./components/MessageForm/MessageForm";
import MessagesList from "./components/MessagesList/MessagesList";
import Preloader from "./components/Preloader/Preloader";
import type { TypeMessage } from "./helpers/types";

const messagesApi: string = "http://146.185.154.90:8000/messages";
let lastDateTime: string = "";

const App = () => {
    const [messages, setMessages] = useState<TypeMessage[]>([]);
    const [currentMessageText, setCurrentMessageText] = useState("");
    const [currentMessageAuthor, setCurrentMessageAuthor] = useState("");
    const [isActivePreloader, setIsActivePreloader] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(messagesApi);
            if (response.ok) {
                const result = await response.json();
                setMessages(result);

                if (result.length > 0) {
                    lastDateTime = result[29].datetime;
                }
                setIsActivePreloader(false);
                scrollToBottom();
            }
        };
        fetchData();

        const messagesInterval = setInterval(async () => {
            const checkNewMessagesApi: string = `${messagesApi}?datetime=${lastDateTime}`;
            const isNewMessages: TypeMessage[] = await getMessages(
                checkNewMessagesApi
            );

            if (isNewMessages.length === 0) {
                return;
            }

            lastDateTime = isNewMessages[isNewMessages.length - 1].datetime;

            setMessages((prevState) => {
                return [...prevState, ...isNewMessages];
            });
            scrollToBottom();
        }, 4000);

        return () => {
            clearInterval(messagesInterval);
        };
    }, []);

    const scrollToBottom = () => {
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
            });
        }, 100);
    };

    const getMessages = async (messagesApi: string) => {
        const responseJson = await fetch(messagesApi);
        return await responseJson.json();
    };

    const changeFormAuthor = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentMessageAuthor(event.target.value);
    };
    const changeFormText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentMessageText(event.target.value);
    };

    const sendMessage = async (event: FormEvent) => {
        event.preventDefault();
        if (!currentMessageAuthor) {
            alert("Author input is empty");
            return;
        }
        if (!currentMessageText) {
            alert("Text input is empty");
            return;
        }

        const data = new URLSearchParams();
        data.set("message", currentMessageText);
        data.set("author", currentMessageAuthor);

        const response = await fetch(messagesApi, {
            method: "post",
            body: data,
        });

        if (!response.ok) {
            alert("Send message error");
            return;
        }

        setCurrentMessageAuthor("");
        setCurrentMessageText("");
    };

    return (
        <div className="container">
            <MessagesList messages={messages} />
            {isActivePreloader && <Preloader />}

            <MessageForm
                authorValue={currentMessageAuthor}
                textValue={currentMessageText}
                changeFormText={changeFormText}
                changeFormAuthor={changeFormAuthor}
                sendMessage={sendMessage}
            />
        </div>
    );
};

export default App;
