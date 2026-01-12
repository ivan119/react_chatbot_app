import { useState, useRef, useCallback } from 'react'

type MessageProps = {
  message: string
  sender: 'user' | 'robot'
  id: string
}

const App = (): React.JSX.Element => {
  const [messages, setMessages] = useState<MessageProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const inputRef = useRef<import('./components/Chatbot/Input/Input').InputHandle>(null)

  // Optimization: useCallback ensures this function isn't recreated on every render.
  // This is vital so that <Input /> (which is memoized) doesn't re-render.
  const handleSendMessage = useCallback((text: string) => {
    const newMessage: MessageProps = {
      id: crypto.randomUUID(),
      message: text,
      sender: 'user',
    }

    setMessages((prev) => [...prev, newMessage])
    setIsLoading(true)

    // Simulate robot response
    setTimeout(() => {
      setIsLoading(false)
      const robotMessage: MessageProps = {
        id: crypto.randomUUID(),
        message: `Echo: ${text}`,
        sender: 'robot',
      }
      setMessages((prev) => [...prev, robotMessage])

      // Focus back using ref API
      setTimeout(() => inputRef.current?.focus(), 0)
    }, 1000)
  }, []) // Empty deps means this function is created once

  return (
    <div className="container">
      <h1>Chatbot App</h1>
      <Messages messages={messages} />
      <Input
        ref={inputRef}
        onSend={handleSendMessage}
        disabled={isLoading}
      />
    </div>
  )
}

export default App
