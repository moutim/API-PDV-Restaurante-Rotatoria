const vendas = (sequelize, DataTypes) => {
    const tabelaVendas = sequelize.define('Vendas', 
        {
            vendaId: DataTypes.INTEGER,
            clienteId: DataTypes.INTEGER,
            pagamentoId: DataTypes.INTEGER,
            total: DataTypes.FLOAT,
            data: DataTypes.STRING
        }
    );

    tabelaVendas.associate = (models) => {
        tabelaVendas.belongsTo(models.Vendas, {
            foreignKey: 'clienteId', as: 'vendas'
        });

        tabelaVendas.belongsTo(models.PagamentoTipo, {
            foreignKey: 'pagamentoId', as: 'pagamento'
        });

        tabelaVendas.hasMany(models.VendasProdutos, {
            foreignKey: 'vendaId', as: 'produtos'
        });
    };

    return tabelaVendas;
};

module.exports = vendas;