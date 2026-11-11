import type { MetadataRoute } from "next";
import { allProducts } from "@/lib/products/list/product-list";
import { SITE_ORIGIN } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = ["/", "/about", "/contact", "/events", "/finance-options", "/parts-form", "/products"];
    const products = allProducts.map(({ id }) => `/products/${encodeURIComponent(id)}`);

    return [...new Set([...pages, ...products])].map((path) => ({
        url: new URL(path, SITE_ORIGIN).href,
    }));
}
