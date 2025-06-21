import "./MessageCard.css";

const MessageCard = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title fs-5">message.author</h5>
                <p className="card-text fs-5 message-text">message.message</p>
                <p className="card-text message-date">dateMonth</p>
                <p className="card-text message-date">dateTime</p>
            </div>
        </div>
    );
};

export default MessageCard;
