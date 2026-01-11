type MessageProps = {
  message: string
  sender: 'user' | 'robot'
  id: string
}
const Messages = ({ messages }: { messages: MessageProps[] }): React.JSX.Element => {
  return (
    <>
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message.message}
          sender={message.sender}
        />
      ))}
    </>
  )
}

export default Messages
