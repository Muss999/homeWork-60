import type { TypeMessage } from "../../helpers/types";
import MessageCard from "../MessageCard/MessageCard";
import "./MessagesList.css";

interface Props {
    messages: TypeMessage[];
}

const MessagesList = ({ messages }: Props) => {
    return (
        <div className="messages-div">
            {messages.map((message) => {
                return <MessageCard key={message._id} message={message} />;
            })}
        </div>
    );
};

export default MessagesList;
