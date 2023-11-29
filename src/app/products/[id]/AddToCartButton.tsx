"use client";

import { useState, useTransition } from "react";

interface AddToCartButtonProps {
    productId: String,
    incrementProductQuantity: (productId: string) => Promise<void>
}

export default function AddToCartButton( {productId, incrementProductQuantity}: AddToCartButtonProps) {
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);


    return (
         <div className="flex items-center gap-2">
            <button className="btn btn-success"
            onClick={() => {
                setSuccess(false);
                startTransition(async () => {
                    await incrementProductQuantity("productId");
                    setSuccess(true);
                })
            }}
            >
                    ADD TO CART 🛒
            </button>
             {isPending && <span className="loading loading-bars loading-md"/>}
             {!isPending && success && ( 
                <span className="text-success"> SUCCESSFULY ADDED TO CART.</span>
             )}
         </div>
    );
}