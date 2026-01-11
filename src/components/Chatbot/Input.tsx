type InputProps = {
  onSend: (message: string) => void
  disabled: boolean
}

const Input = ({ onSend, disabled = false }: InputProps): React.JSX.Element => {
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const handleSend = () => {
    if (message.trim() === '') {
      setError('Please enter a message')
      return
    }
    onSend(message)
    setMessage('')
    setError(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
    if (error) setError(null)
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={message}
        disabled={disabled}
        id="input"
        name="input"
        placeholder={disabled ? 'Sending...' : 'Send a message...'}
        onChange={handleChange}
        size={30}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        className="send-button"
        onClick={handleSend}
      >
        {disabled ? 'Sending...' : 'Send'}
      </button>

      {error && <p className="error-message">{error}</p>}
    </div>
  )
}

export default Input
