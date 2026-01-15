
interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

interface CartItem extends Product {
    quantity: number;
}

interface CustomerInfo {
    name: string;
    email: string;
    address: string;
    note?: string;
}

export { Product, CartItem, CustomerInfo };
