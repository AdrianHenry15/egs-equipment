import { type SchemaTypeDefinition } from "sanity";

import details from "./products/details";
import productSpecifications from "./products/product-specifications";
import dimensions from "./products/dimensions";
import engineSpecifictions from "./products/engine-specifictions";
import brushSpecifictions from "./products/brush-specifictions";
import cuttingSpecifications from "./products/cutting-specifications";
import users from "./users";
import userSaves from "./user-saves";
import products from "./products/products";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        users,
        userSaves,
        products,
        details,
        productSpecifications,
        dimensions,
        engineSpecifictions,
        brushSpecifictions,
        cuttingSpecifications,
    ],
};
