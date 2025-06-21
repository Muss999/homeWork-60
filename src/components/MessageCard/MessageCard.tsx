import type { TypeMessage } from "../../helpers/types";
import "./MessageCard.css";

interface Props {
    message: TypeMessage;
}

const MessageCard = ({ message }: Props) => {
    const dateMonthArr: string[] = [];
    const dateTimeArr: string[] = [];

    for (let i = 0; i < message.datetime.length; i++) {
        if (i < 10) {
            dateMonthArr.push(message.datetime[i]);
        }
        if (i > 10 && i < 19) {
            dateTimeArr.push(message.datetime[i]);
        }
    }
    const dateMonth: string = dateMonthArr.join("");
    const dateTime: string = dateTimeArr.join("");

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title fs-5">{message.author}</h5>
                <p className="card-text fs-5 message-text">{message.message}</p>
                <p className="card-text message-date">{dateMonth}</p>
                <p className="card-text message-date">{dateTime}</p>
            </div>
        </div>
    );
};

export default MessageCard;
