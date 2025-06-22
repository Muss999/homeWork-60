import type { ChangeEventHandler, FormEventHandler } from "react";
import "./MessageForm.css";
interface Props {
    authorValue: string;
    textValue: string;
    changeFormText: ChangeEventHandler<HTMLTextAreaElement>;
    changeFormAuthor: ChangeEventHandler<HTMLInputElement>;
    sendMessage: FormEventHandler<HTMLFormElement>;
}
const MessageForm = ({
    authorValue,
    textValue,
    changeFormAuthor,
    changeFormText,
    sendMessage,
}: Props) => {
    return (
        <form
            id="message-form"
            onSubmit={(event) => {
                sendMessage(event);
            }}
        >
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Write your username..."
                    aria-label="Write your username..."
                    aria-describedby="button-addon2"
                    value={authorValue}
                    onChange={changeFormAuthor}
                />
            </div>
            <div className="input-group mb-3">
                <textarea
                    className="form-control"
                    aria-label="With textarea"
                    placeholder="Write your message..."
                    value={textValue}
                    onChange={changeFormText}
                ></textarea>
                <button className="btn btn-outline-secondary" type="submit">
                    Send
                </button>
            </div>
        </form>
    );
};

export default MessageForm;
