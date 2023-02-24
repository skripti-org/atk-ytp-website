import './Message.scss'

const Message = ({ msg, writer }) => {
    return (
            <div className="message-container">
                <p className='msg'>{msg}</p>
                <p className='writer'>{writer}</p>
            </div>
        )   
    }
  
  export default Message