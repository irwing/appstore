const Filters = () => {
  return (
    <div className="filter">
      <div className="filter-title">
        Ordena por
      </div>
      <div className="filter-select">
        <select name="filter-order" id="filter-order">
          <option value="order-name-asc">Nombre Asc</option>
          <option value="order-name-dsc">Nombre Desc</option>
          <option value="order-price-asc">Menor Precio</option>
          <option value="order-price-desc">Mayor Precio</option>
        </select>
      </div>
    </div>
  )
}

export default Filters
