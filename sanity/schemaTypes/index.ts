import { type SchemaTypeDefinition } from "sanity";

import detail from "./product/detail";
import productSpecification from "./product/product-specification";
import dimension from "./product/dimension";
import engineSpecifiction from "./product/engine-specifiction";
import brushSpecifiction from "./product/brush-specifiction";
import cuttingSpecification from "./product/cutting-specification";
import user from "./user";
import userSave from "./user-save";
import product from "./product/product";
import lead from "./lead";
import client from "./client";
import equipmentEvent from "./equipment-event";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        user,
        userSave,
        product,
        detail,
        productSpecification,
        dimension,
        engineSpecifiction,
        brushSpecifiction,
        cuttingSpecification,
        lead,
        client,
        equipmentEvent,
    ],
};
