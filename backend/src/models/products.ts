import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('increment')
    id: Number

    @Column('string')
    name: String

    @Column('string')
    descricao: Text

    @Column('string')
    imagem: String
    
    @Column('decimal')
    valor: Number
}