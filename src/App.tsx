import "./App.css";
import MessageForm from "./components/MessageForm/MessageForm";
import MessagesList from "./components/MessagesList/MessagesList";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
    return (
        <div className="container">
            <MessagesList />
            <Preloader />
            <MessageForm />
        </div>
    );
};

export default App;
