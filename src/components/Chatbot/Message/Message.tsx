import { memo } from 'react'
import styles from './Message.module.css'

type MessageProps = {
  message: string
  sender: 'user' | 'robot'
}

// Memoizing individual messages is great for long lists
const Message = memo(({ message, sender }: MessageProps): React.JSX.Element => {
  const containerClass = `${styles.message} ${sender === 'user' ? styles.user : styles.robot}`

  return (
    <div className={containerClass}>
      <p className={styles.text}>{message}</p>
      <img
        src={sender === 'user' ? '/images/user.png' : '/images/robot.png'}
        alt=""
        width={32}
        height={32}
        style={{ borderRadius: '50%' }}
      />
    </div>
  )
})

export default Message
