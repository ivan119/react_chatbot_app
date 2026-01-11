type MessageProps = {
  message: string
  sender: 'user' | 'robot'
  id: string
}

const App = (): React.JSX.Element => {
  const [messages, setMessages] = useState<MessageProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleSendMessage = (text: string) => {
    const newMessage: MessageProps = {
      id: crypto.randomUUID(),
      message: text,
      sender: 'user',
    }
    setMessages((prev) => [...prev, newMessage])
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="container">
      <h1>Chatbot App</h1>
      <Input
        onSend={handleSendMessage}
        disabled={isLoading}
      />
      <Messages messages={messages} />
    </div>
  )
}

export default App
