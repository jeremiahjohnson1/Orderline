import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import FormSubmitButton from "../../components/FormSubmitButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
 
export const metadata = {
    title: "Add Product - Orderline"
};

async function addProduct(formData: FormData) {
    "use server";

    const session = await getServerSession(authOptions);

    
    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/add-product");
    }

   
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get("price") || 0);

    if (!name || !description || !imageUrl || !price){
        throw Error("PLEASE COMPLETE THE PRODUCT INFORMATION INPUT");
    }

    await prisma.product.create({
        data: {name, description, imageUrl, price},
    });

    redirect("/");
}    
   
export default async function AddProductPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/add-product")
    }

    return (
        <div>
            <h1 className="mb-5 text-lg font-bold">ADD PRODUCT</h1>
            <form action={addProduct}>
                <input type="text" 
                required
                name="name"
                placeholder="NAME"
                className="mb-4 w-full input input-bordered bg-white"  
                />
                <textarea 
                 required
                 name="description"
                 placeholder="DESCRIPTION"
                 className="textarea-bordered textarea mb-4 w-full bg-white"
                />
                <input 
                 required 
                 name="imageUrl"
                 placeholder="IMAGE LINK"
                 className="mb-4 w-full input input-bordered bg-white"
                />
                 <input 
                 type="number"
                 required 
                 name="price"
                 placeholder= "₦ PRICE"
                 className="mb-4 w-full input input-bordered bg-white"
                />
                <FormSubmitButton className="btn-block">
                    ADD PRODUCT
                </FormSubmitButton>
            </form>
        </div>
    );
};