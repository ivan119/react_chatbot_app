import { forwardRef, useImperativeHandle, useRef, useState, memo } from 'react'
import Button from '../Button/Button'
import { SendIcon } from '../../icons/SendIcon'
import styles from './Input.module.css'

export type InputHandle = {
  focus: () => void
  clear: () => void
}

type InputProps = {
  onSend: (message: string) => void
  disabled: boolean
}

// Wrapping in memo prevents the input from re-rendering when messages are added
const Input = memo(
  forwardRef<InputHandle, InputProps>(({ onSend, disabled = false }, ref): React.JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [error, setError] = useState<string | null>(null)

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus()
      },
      clear: () => {
        if (inputRef.current) inputRef.current.value = ''
      },
    }))

    const handleSend = () => {
      const value = inputRef.current?.value || ''
      if (value.trim() === '') {
        setError('Please enter a message')
        return
      }
      onSend(value)
      if (inputRef.current) inputRef.current.value = ''
      setError(null)
    }

    const handleChange = () => {
      if (error) setError(null)
    }

    // Combine module classes dynamically
    const containerClasses = `${styles.inputContainer} ${disabled ? styles.loading : ''}`

    return (
      <div className={containerClasses}>
        <input
          ref={inputRef}
          type="text"
          disabled={disabled}
          className={styles.inputField}
          id="input"
          name="input"
          placeholder={disabled ? 'Processing...' : 'Ask me anything...'}
          onChange={handleChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button
          onClick={handleSend}
          isLoading={disabled}
          aria-label="Send message"
          icon={<SendIcon />}
        >
          Send
        </Button>

        {error && <p className={styles.errorMessage}>{error}</p>}
      </div>
    )
  }),
)

export default Input
