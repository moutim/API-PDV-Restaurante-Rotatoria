// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require('joi');

const { StatusCodes } = require('http-status-codes');

const createVendaSchema = Joi.object({
  nome: Joi.string().min(3).max(20).required(),
  preco: Joi.number().required(),
});

const verifyCreateProduto = (req, res, next) => {
  const { error } = createVendaSchema.validate(req.body);

  if (error) throw Object({ status: StatusCodes.UNPROCESSABLE_ENTITY, message: error.message });

  next();
};

module.exports = verifyCreateProduto;
