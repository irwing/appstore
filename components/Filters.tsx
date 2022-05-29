const Filters = (props) => {
  const { order, setOrder } = props

  const handleChange = (e) => {
    setOrder(e.target.value)
  }

  return (
    <div className="filter">
      <div className="filter-title">
        Ordena por
      </div>
      <div className="filter-select">
        <select name="filter-order" id="filter-order" value={order} onChange={handleChange}>
          <option value="nombre-asc">Nombre Asc</option>
          <option value="nombre-desc">Nombre Desc</option>
          <option value="precio-asc">Menor Precio</option>
          <option value="precio-desc">Mayor Precio</option>
        </select>
      </div>
    </div>
  )
}

export default Filters
