const pagamentoTipo = (sequelize, DataTypes) => {
    const tabelaPagamentoTipo = sequelize.define('PagamentoTipos', 
        {
            pagamentoId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            tipo: DataTypes.STRING
        },
        { timestamps: false }
    );

    tabelaPagamentoTipo.associate = (models) => {
        tabelaPagamentoTipo.hasOne(models.Vendas, {
            foreignKey: 'pagamentoId', as: 'vendas'
        });
    };

    return tabelaPagamentoTipo;
};

module.exports = pagamentoTipo;