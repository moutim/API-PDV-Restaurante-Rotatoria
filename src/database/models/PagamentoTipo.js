const pagamentoTipo = (sequelize, DataTypes) => {
    const tabelaPagamentoTipo = sequelize.define('PagamentoTipo', 
        {
            tipo: DataTypes.STRING
        }
    );

    tabelaPagamentoTipo.associate = (models) => {
        tabelaPagamentoTipo.hasOne(models.Vendas, {
            foreignKey: 'pagamentoId', as: 'vendas'
        });
    };

    return tabelaPagamentoTipo;
};

module.exports = pagamentoTipo;