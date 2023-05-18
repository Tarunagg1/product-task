import { Request, Response, NextFunction } from "express";
// import ProductModel from "../models/product";
// import { ProductModel } from "../models/config";

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({
        message: "Some error occurred while retrieving tutorials."
    });
    
    // try {
    //     console.log('yha');
    //     const data = await ProductModel.findAll({});
    //     console.log(data);
    //     return res.status(200).json({ message: "All products", data });

    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({
    //         message: "Some error occurred while retrieving tutorials."
    //     });
    // }
};


export const createProducts = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({
        message: "Some error occurred while retrieving tutorials."
    });
    
    // try {
    //     console.log('yha');
    //     const data = await ProductModel.findAll({});
    //     console.log(data);
    //     return res.status(200).json({ message: "All products", data });

    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({
    //         message: "Some error occurred while retrieving tutorials."
    //     });
    // }
};


export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({
        message: "Some error occurred while retrieving tutorials."
    });
    
    // try {
    //     console.log('yha');
    //     const data = await ProductModel.findAll({});
    //     console.log(data);
    //     return res.status(200).json({ message: "All products", data });

    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({
    //         message: "Some error occurred while retrieving tutorials."
    //     });
    // }
};


export const updateProductById = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({
        message: "Some error occurred while retrieving tutorials."
    });
    
    // try {
    //     console.log('yha');
    //     const data = await ProductModel.findAll({});
    //     console.log(data);
    //     return res.status(200).json({ message: "All products", data });

    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({
    //         message: "Some error occurred while retrieving tutorials."
    //     });
    // }
};

export const deleteProductById = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({
        message: "Some error occurred while retrieving tutorials."
    });
    
    // try {
    //     console.log('yha');
    //     const data = await ProductModel.findAll({});
    //     console.log(data);
    //     return res.status(200).json({ message: "All products", data });

    // } catch (error) {
    //     console.log(error);
    //     return res.status(500).json({
    //         message: "Some error occurred while retrieving tutorials."
    //     });
    // }
};
