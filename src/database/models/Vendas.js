const vendas = (sequelize, DataTypes) => {
    const tabelaVendas = sequelize.define('Vendas', 
        {
            vendaId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            clienteId: DataTypes.INTEGER,
            pagamentoId: DataTypes.INTEGER,
            total: DataTypes.FLOAT,
            data: DataTypes.STRING
        },
        { timestamps: false }
    );

    tabelaVendas.associate = (models) => {
        tabelaVendas.belongsTo(models.Clientes, {
            foreignKey: 'clienteId', as: 'vendas'
        });

        tabelaVendas.belongsTo(models.PagamentoTipos, {
            foreignKey: 'pagamentoId', as: 'pagamento'
        });

        tabelaVendas.hasMany(models.VendasProdutos, {
            foreignKey: 'vendaId', as: 'produtos'
        });
    };

    return tabelaVendas;
};

module.exports = vendas;