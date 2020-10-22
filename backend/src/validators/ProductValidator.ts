import { body } from 'express-validator'

export default [
  body('nome')
    .notEmpty()
    .withMessage('O campo "nome" é obrigatório'),
  body('descricao')
    .notEmpty()
    .withMessage('O campo "descrição" é obrigatório'),
  // body('imagem')
  //   .notEmpty()
  //   .withMessage('O campo "imagem" é obrigatório'),
  body('valor')
    .notEmpty()
    .withMessage('O campo "valor" é obrigatório'),
  body('disponivel')
    .notEmpty()
    .withMessage('O campo "disponível" é obrigatório')
]