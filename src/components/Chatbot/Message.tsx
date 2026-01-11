type MessageProps = {
  message: string
  sender: 'user' | 'robot'
}

const Message = ({ message, sender }: MessageProps): React.JSX.Element => {
  return (
    <div className={`message ${sender === 'user' ? 'user-message' : 'robot-message'}`}>
      <p>{message}</p>
      <img
        src={sender === 'user' ? '/images/user.png' : '/images/robot.png'}
        alt=""
        width={50}
        height={50}
      />
    </div>
  )
}

export default Message
