// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require('joi');

const { StatusCodes } = require('http-status-codes');

const createClienteSchema = Joi.object({
  nome: Joi.string().min(3).max(20),
  telefone: Joi.string().min(9).max(11),
  cep: Joi.string().min(8).max(8),
  endereco: Joi.string().min(5).max(50),
  enderecoNumero: Joi.string().min(1).max(10),
});

const verifyCreateCliente = (req, res, next) => {
  const { error } = createClienteSchema.validate(req.body);

  if (error) throw Object({ status: StatusCodes.UNPROCESSABLE_ENTITY, message: error.message });

  next();
};

module.exports = verifyCreateCliente;
