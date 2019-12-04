'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {  
    let Usuario = sequelize.define('Usuario',{
		
		idcadastro: {
			field: 'idcadastro',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: false
		},		
		
		nome: {
			field: 'nome',
			type: DataTypes.STRING,
			allowNull: false
		},

		endereço: {
			field: 'endereço',
			type: DataTypes.STRING,
			allowNull: false
		},
		
		numero: {
			field: 'numero',
			type: DataTypes.STRING,
			allowNull: false
		},
		contato: {
			field: 'contato',
			type: DataTypes.STRING,
			allowNull: false
		
	  },
	    quantidadeflores: {
		field: 'quantidadeflores',
		type: DataTypes.STRING,
		allowNull: false

	}, 
     cores: {
     field: 'cores',
     type: DataTypes.STRING,
     allowNull: false
	 },
	 email: {
		field: 'email',
		type: DataTypes.STRING,
		allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
			},
	

               
		tableName: 'Usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,

	});

    return Usuario;
};
