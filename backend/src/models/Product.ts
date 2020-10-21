import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar')
    name: string

    @Column('varchar')
    descricao: string

    @Column('varchar')
    imagem: string

    @Column('decimal')
    valor: number

    @Column('boolean')
    disponivel: boolean
}