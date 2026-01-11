const Input = (): React.JSX.Element => {
  const [message, setMessage] = useState<string>('')
  const handleSend = () => {
    if (message.trim() === '') return alert('Please enter a message')
    setMessage('')
  }
  const container = (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  )
  return container
}

export default Input
