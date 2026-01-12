import { memo, useEffect, useRef } from 'react'
import Message from '../Message/Message'
import styles from './Messages.module.css'

type MessageData = {
  message: string
  sender: 'user' | 'robot'
  id: string
}

const Messages = memo(({ messages }: { messages: MessageData[] }): React.JSX.Element => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Optimization: Auto-scroll to bottom of list when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div
      ref={scrollRef}
      className={styles.messages}
    >
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message.message}
          sender={message.sender}
        />
      ))}
    </div>
  )
})

export default Messages
