// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require('joi');

const { StatusCodes } = require('http-status-codes');

const createClienteSchema = Joi.object({
  nome: Joi.string().min(3).max(20).required(),
  telefone: Joi.string().min(9).max(11).required(),
  cep: Joi.string().min(8).max(8).required(),
  endereco: Joi.string().min(5).max(50).required(),
  enderecoNumero: Joi.string().min(1).max(10).required(),
});

const verifyCreateCliente = (req, res, next) => {
  const { error } = createClienteSchema.validate(req.body);

  if (error) throw Object({ status: StatusCodes.UNPROCESSABLE_ENTITY, message: error.message });

  next();
};

module.exports = verifyCreateCliente;
