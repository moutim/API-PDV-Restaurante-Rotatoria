const vendasProdutos = (sequelize, DataTypes) => {
    const tabelaVendasProdutos = sequelize.define('Produtos', 
        {
            produtoId: DataTypes.INTEGER,
            vendaId: DataTypes.INTEGER,
            quantidade: DataTypes.INTEGER
        }
    );

    tabelaVendasProdutos.associate = (models) => {
        models.Vendas.belongsToMany(models.Produtos, {
            through: tabelaVendasProdutos,
            foreignKey: 'vendaId',
            otherKey: 'produtoId',
            as: 'venda'
        });

        models.Produtos.belongsToMany(models.Vendas, {
            through: tabelaVendasProdutos,
            foreignKey: 'produtoId',
            otherKey: 'vendaId',
            as: 'produto'
        });
    };

    return tabelaVendasProdutos;
};

module.exports = vendasProdutos;