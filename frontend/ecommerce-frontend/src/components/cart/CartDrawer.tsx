import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/use-cart';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/shared/EmptyState';

export function CartDrawer() {
    const { items, isOpen, setIsOpen, totalItems } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-background border-l shadow-2xl flex flex-col"
                    >
                        <div className="flex items-center justify-between p-4 border-b">
                            <div className="flex items-center gap-2">
                                <ShoppingBag className="h-5 w-5" />
                                <h2 className="font-semibold">Cart</h2>
                                <span className="text-sm text-muted-foreground">({totalItems})</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-full hover:bg-muted flex items-center justify-center">
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {items.length === 0 ? (
                            <EmptyState
                                title="Your cart is empty"
                                description="Add some products to get started"
                                action={
                                    <Button variant="outline" onClick={() => setIsOpen(false)} asChild>
                                        <Link to="/store">
                                            Browse Products
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </Link>
                                    </Button>
                                }
                            />
                        ) : (
                            <>
                                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                                    {items.map(item => (
                                        <CartItem key={item.product.id} item={item} />
                                    ))}
                                </div>
                                <div className="border-t p-4">
                                    <CartSummary />
                                    <Button className="w-full mt-4 rounded-full" size="lg" asChild onClick={() => setIsOpen(false)}>
                                        <Link to="/checkout">
                                            Checkout
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </Link>
                                    </Button>
                                </div>
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
