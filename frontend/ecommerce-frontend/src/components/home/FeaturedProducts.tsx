import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/hooks/use-cart";

export function FeaturedProducts() {
    const featured = products.filter(p => p.featured).slice(0, 4);
    const { addItem } = useCart();

    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-bold"
                        >
                            Featured Products
                        </motion.h2>
                        <p className="text-muted-foreground mt-1">Handpicked for excellence</p>
                    </div>
                    <Link to={"/store"} className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                        View all <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featured.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <Link to={`/product/${product.slug}`} className="block">
                                <div className="relative rounded-xl border bg-card overflow-hidden hover-lift">
                                    {product.originalPrice && (
                                        <div className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold">
                                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                                        </div>
                                    )}
                                    <div className="aspect-square overflow-hidden bg-muted">
                                        <img 
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-sm mb-1 line-clamp-1">{product.name}</h3>
                                        <div className="flex items-center gap-1 mb-2">
                                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                            <span className="text-xs text-muted-foreground">{product.rating} ({product.reviewCount})</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold">${product.price}</span>
                                                {product.originalPrice && (
                                                    <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                                                )}
                                            </div>
                                            <button
                                                onClick={e => { e.preventDefault(); addItem(product); }}
                                                className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                                                aria-label="Add to Cart"
                                            >
                                                <ShoppingCart className="h-3.5 w-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
