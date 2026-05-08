import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart, type CartItem as CartItemType } from '@/hooks/use-cart';

interface CartItemProps {
    item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeItem } = useCart();
    const { product, quantity } = item;

    return (
        <div className="flex gap-4 p-3 rounded-lg border bg-card">
            <div className="h-20 w-20 rounded-lg overflow-hidden bg-muted shrink-0">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm line-clamp-1">{product.name}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">${product.price.toFixed(2)}</p>
                {Object.entries(item.selectedVariants).map(([key, val]) => (
                    <p key={key} className="text-xs text-muted-foreground">{key}: {val}</p>
                ))}
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="h-7 w-7 rounded-md border flex items-center justify-center hover:bg-muted transition-colors"
                        >
                            <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                        <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="h-7 w-7 rounded-md border flex items-center justify-center hover:bg-muted transition-colors"
                        >
                            <Plus className="h-3 w-3" />
                        </button>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-bold">${(product.price * quantity).toFixed(2)}</span>
                        <button
                            onClick={() => removeItem(product.id)}
                            className="h-7 w-7 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 flex items-center justify-center transition-colors"
                        >
                            <Trash2 className="h-3.5 w-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
