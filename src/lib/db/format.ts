export function formatPrice(price: number) {
    return (price / 100).toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN"
    });
}
