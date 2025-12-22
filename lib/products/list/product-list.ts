import { AeratorProducts } from "./natural-turf/aerators";
import { DebrisBlowerProducts } from "./debris-blowers";
import { MowerProducts } from "./natural-turf/mowers";
import { ScarifierProducts } from "./natural-turf/scarifiers";
import { SyntheticTurfProducts } from "./synthetic-turf";

export const allProducts = [
    ...ScarifierProducts,
    ...MowerProducts,
    ...SyntheticTurfProducts,
    ...DebrisBlowerProducts,
    ...AeratorProducts,
];

export function getAllProducts() {
    return [...allProducts];
}
