const Input = (): React.JSX.Element => {
  const [message, setMessage] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  const handleSend = () => {
    if (message.trim() === '') {
      setError('Please enter a message')
      return
    }
    console.log('Sending:', message)

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
        id="input"
        name="input"
        placeholder="Type a message..."
        onChange={handleChange}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Send</button>

      {error && <p className="error-message">{error}</p>}
    </div>
  )
}

export default Input
