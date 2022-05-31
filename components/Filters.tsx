import lang from '../lang'

type TypeProps = {
  order: string
  setOrder: (order:string) => void
}

const Filters = (props:TypeProps) => {
  const order = props.order || 'nombre-asc'
  const setOrder = props.setOrder

  const handleChange = (e) => {
    setOrder(e.target.value)
  }

  return (
    <div className="filter">
      <div className="filter-title">
        {'Ordenar por'}
      </div>
      <div className="filter-select">
        <select name="filter-order" id="filter-order" value={order} onChange={handleChange}>
          <option value="nombre-asc">{lang.filterNameAsc}</option>
          <option value="nombre-desc">{lang.filterNameDesc}</option>
          <option value="precio-asc">{lang.filterPriceAsc}</option>
          <option value="precio-desc">{lang.filterPriceDesc}</option>
        </select>
      </div>
    </div>
  )
}

export default Filters
