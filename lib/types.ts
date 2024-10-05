import { StaticImageData } from "next/image";
import { Category } from "./constants";

export type NavMenuType = {
    title: string;
    link: string;
};

export type ProductType = {
    id: string;
    name: string;
    description: string;
    category: Category;
    price: number;
    quantity: number;
    image: string | StaticImageData;
};
