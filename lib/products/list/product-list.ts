import { AeratorProducts } from "./aerators";
import { DebrisBlowerProducts } from "./debris-blowers";
import { GolfSportsTurfProducts } from "./golf-sports-turf";
import { SyntheticTurfProducts } from "./synthetic-turf";

export const allProducts = [
    ...GolfSportsTurfProducts,
    ...SyntheticTurfProducts,
    ...DebrisBlowerProducts,
    ...AeratorProducts,
];
