import { StaticImageData } from "next/image";
import { Collection } from "./constants";

export type NavMenuType = {
    title: string;
    link: string;
};

export type ProductType = {
    id: string;
    name: string;
    description: string;
    collection: Collection;
    price: number;
    quantity: number;
    image: string | StaticImageData;
};
