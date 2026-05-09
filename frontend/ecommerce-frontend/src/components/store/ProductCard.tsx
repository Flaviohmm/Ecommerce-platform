import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart } from "lucide-react";
import type { Product } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { useState } from "react";

interface ProductCardProps {
    product: Product;
    index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
    const { addItem } = useCart();
    const [liked, setLiked] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
        >
            <div className="group relative rounded-xl border bg-card overflow-hidden hover-lift">
                <Link to={`/product/${product.slug}`}>
                    <div className="relative aspect-square overflow-hidden bg-muted">
                        {product.originalPrice && (
                            <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold">
                                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                            </div>
                        )}
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy" 
                        />
                    </div>
                </Link>

                <button
                    onClick={() => setLiked(!liked)}
                    className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full glass flex items-center justify-center transition-colors"
                    aria-label="Add to favorites"
                >
                    <Heart className={`h-3.5 w-3.5 transition-colors ${liked ? 'fill-red-500 text-red-500' : 'text-foreground'}`} />
                </button>

                <div className="p-4">
                    <Link to={`/product/${product.slug}`}>
                        <h3 className="font-medium text-sm mb-1 line-clamp-1 hover:text-primary transition-colors">{product.name}</h3>
                    </Link>
                    <p className="text-xs text-muted-foreground mb-2 capitalize">{product.category}</p>
                    <div className="flex items-center gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className={`h-3 w-3 ${i < Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}`}
                            />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-sm">${product.price.toFixed(2)}</span>
                            {product.originalPrice && (
                                <span className="text-xs text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                            )}
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => addItem(product)}
                            className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                            aria-label="Add to cart"
                        >
                            <ShoppingCart className="h-3.5 w-3.5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
