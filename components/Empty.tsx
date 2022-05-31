import lang from '../lang'

const Empty = () => {
  return (
    <div className="empty" style={{ textAlign: 'center' }}>
      <h1>{lang.emptyMessage}</h1>
    </div>
  )
}

export default Empty
