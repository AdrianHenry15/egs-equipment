import { createProductAction } from "../actions";
import ProductForm from "./components/product-form";

export default function CreateProductPage() {
    return (
        <div className="space-y-8 max-w-xl">
            <ProductForm onSubmit={createProductAction} />
        </div>
    );
}
