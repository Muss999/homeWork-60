import "./MessageForm.css";
const MessageForm = () => {
    return (
        <form id="message-form">
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Write your username..."
                    aria-label="Write your username..."
                    aria-describedby="button-addon2"
                />
            </div>
            <div className="input-group mb-3">
                <textarea
                    className="form-control"
                    aria-label="With textarea"
                    placeholder="Write your message..."
                ></textarea>
                <button className="btn btn-outline-secondary" type="submit">
                    Send
                </button>
            </div>
        </form>
    );
};

export default MessageForm;
