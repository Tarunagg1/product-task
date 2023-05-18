'use strict';

import { Model } from 'sequelize';

interface IProductAttributes {
    id: number;
    name: string;
    description?: string;
    price: number;
    quantity: number;

    created_at: Date;
    updated_at: Date;
}


module.exports = (sequelize: any, DataTypes: any) => {
    class ProductModel extends Model<IProductAttributes> implements IProductAttributes {
        id!: number;
        name!: string;
        description?: string;
        price!: number;
        quantity!: number;
        created_at!: Date;
        updated_at!: Date;
    };

    ProductModel.init({
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        created_at: {
            type: DataTypes.DATE,
        },
        updated_at: {
            type: DataTypes.DATE,
        }
    }, {
        sequelize,
        modelName: 'Products',
    });
    return ProductModel;
};

