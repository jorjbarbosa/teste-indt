import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('produtos')
export default class Product {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar')
    nome: string

    @Column('varchar')
    descricao: string

    @Column('varchar')
    imagem: string

    @Column('decimal')
    valor: number

    @Column('boolean')
    disponivel: boolean
}