export type TypeProduct = {
  id_empresa: number,
  nombre: string,
  tipo_servicio: string,
  precio: number,
  calificacion: number,
  banner: string
  cantidad?: number,
}

export type TypeProductList = TypeProduct[]
