const produtos = (sequelize, DataTypes) => {
    const tabelaProdutos = sequelize.define('Produtos', 
        {
            nome: DataTypes.STRING,
            preco: DataTypes.FLOAT
        }
    );

    tabelaProdutos.associate = (models) => {
        tabelaProdutos.hasMany(models.VendasProdutos, {
            foreignKey: 'produtoId', as: 'produtoVenda'
        });
    };

    return tabelaProdutos;
};

module.exports = produtos;