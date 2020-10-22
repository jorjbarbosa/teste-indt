import { check, validationResult } from 'express-validator'

export default [
  check('nome')
    .not()
    .isEmpty()
    .withMessage('O campo nome é obrigatório'),
  check('descricao')
    .not()
    .isEmpty()
    .withMessage('O campo descrição é obrigatório'),
  check('imagem')
    .not()
    .isEmpty()
    .withMessage('O campo imagem é obrigatório'),
  check('valor')
    .not()
    .isEmpty()
    .withMessage('O campo valor é obrigatório'),
  (req: any, res: any, next: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
]