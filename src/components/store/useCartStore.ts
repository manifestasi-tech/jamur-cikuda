import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem } from '@/types/Product';

interface CartState {
    cartItems: CartItem[];
    isCartOpen: boolean;
    addToCart: (product: CartItem) => void;
    updateQuantity: (productId: string, newQuantity: number) => void;
    removeItem: (productId: string) => void;
    clearCart: () => void;
    setIsCartOpen: (isOpen: boolean) => void;
    getTotalItems: () => number;
    getSubtotal: () => number;
    getTotal: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cartItems: [],
            isCartOpen: false,

            addToCart: (product) => {
                const { cartItems } = get();
                const existingItem = cartItems.find(item => item.id === product.id);

                if (existingItem) {
                    set({
                        cartItems: cartItems.map(item =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + product.quantity }
                                : item
                        )
                    });
                } else {
                    set({ cartItems: [...cartItems, product] });
                }
            },

            updateQuantity: (productId, newQuantity) => {
                if (newQuantity <= 0) {
                    get().removeItem(productId);
                    return;
                }

                set({
                    cartItems: get().cartItems.map(item =>
                        item.id === productId
                            ? { ...item, quantity: newQuantity }
                            : item
                    )
                });
            },

            removeItem: (productId) => {
                set({
                    cartItems: get().cartItems.filter(item => item.id !== productId)
                });
            },

            clearCart: () => {
                set({ cartItems: [], isCartOpen: false });
            },

            setIsCartOpen: (isOpen) => {
                set({ isCartOpen: isOpen });
            },

            getTotalItems: () => {
                return get().cartItems.reduce((sum, item) => sum + item.quantity, 0);
            },

            getSubtotal: () => {
                return get().cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            },

            getTotal: () => {
                const shipping = 50000;
                return get().getSubtotal() + shipping;
            }
        }),
        {
            name: 'jamur-cart-storage', // local storage name
            storage: createJSONStorage(() => localStorage), // persist to localStorage
        }
    )
);