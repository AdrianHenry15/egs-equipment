import { getProductById } from "@/sanity/actions/products";
import { deleteProduct, updateProduct } from "@/sanity/mutations/admin/products";
import { NextResponse } from "next/server";

interface Params {
    params: {
        id: string;
    };
}

// GET (admin single)
export async function GET(_: Request, { params }: Params) {
    const product = await getProductById(params.id);
    if (!product) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(product);
}

// UPDATE
export async function PATCH(req: Request, { params }: Params) {
    const data = await req.json();
    const updated = await updateProduct(params.id, data);

    return NextResponse.json(updated);
}

// DELETE
export async function DELETE(_: Request, { params }: Params) {
    await deleteProduct(params.id);

    return NextResponse.json({ status: "deleted", id: params.id });
}
