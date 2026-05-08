import { useState } from 'react';
import { useCart } from '@/hooks/use-cart';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function CartSummary() {
    const { items, totalPrice } = useCart();
    const [coupon, setCoupon] = useState('');
    const [applied, setApplied] = useState(false);

    const shipping = totalPrice > 50 ? 0 : 9.99;
    const discount = applied ? totalPrice * 0.1 : 0;
    const total = totalPrice - discount + shipping;

    return (
        <div className="space-y-3">
            <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            {applied && (
                <div className="flex justify-between text-sm text-green-500">
                    <span>Coupon (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                </div>
            )}
            <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
            </div>

            {!applied ? (
                <div className="flex gap-2 pt-1">
                    <Input
                        placeholder="Coupon code"
                        value={coupon}
                        onChange={e => setCoupon(e.target.value)}
                        className="h-8 text-sm"
                    />
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => { if (coupon) setApplied(true); }}
                        className="shrink-0"
                    >
                        Apply
                    </Button>
                </div>
            ) : (
                <p className="text-xs text-green-500">Coupon applied successfully!</p>
            )}
        </div>
    );
}
