const clientes = (sequelize, DataTypes) => {
    const tabelaClientes = sequelize.define('Clientes', 
        {
            clienteId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: DataTypes.STRING,
            telefone: DataTypes.INTEGER,
            cep: DataTypes.STRING,
            endereco: DataTypes.STRING,
            enderecoNumero: DataTypes.STRING,
            totalPedidos: DataTypes.INTEGER,
            totalGasto: DataTypes.FLOAT
        },
        { timestamps: false }
    );

    tabelaClientes.associate = (models) => {
        tabelaClientes.hasOne(models.Vendas, {
            foreignKey: 'clienteId', as: 'vendas'
        });
    };

    return tabelaClientes;
};

module.exports = clientes;