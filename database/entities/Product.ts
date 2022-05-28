import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm'

@Entity('Product')
export class Product extends BaseEntity {
  @PrimaryColumn()
    id_empresa!: number

  @Column()
    nombre: string

  @Column()
    tipo_servicio: string

  @Column()
    precio: number

  @Column()
    calificacion: number

  @Column()
    banner: string
}
