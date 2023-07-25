const clientes = (sequelize, DataTypes) => {
    const tabelaClientes = sequelize.define('Clientes', 
        {
            nome: DataTypes.STRING,
            telefone: DataTypes.INTEGER,
            cep: DataTypes.INTEGER,
            endereco: DataTypes.STRING,
            enderecoNumeroo: DataTypes.STRING,
            totalPedidos: DataTypes.INTEGER,
            totalGastoo: DataTypes.FLOAT
        }
    );

    tabelaClientes.associate = (models) => {
        tabelaClientes.hasOne(models.Vendas, {
            foreignKey: 'clienteId', as: 'vendas'
        });
    };

    return tabelaClientes;
};

module.exports = clientes;