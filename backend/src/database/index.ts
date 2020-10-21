import { createConnection } from 'typeorm'

createConnection({
    type: 'sqlite',
    database: './database.sqlite'
})