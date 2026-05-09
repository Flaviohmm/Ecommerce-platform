import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart, ArrowLeft, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/product/ImageGallery";
import { VariantSelector } from "@/components/product/VariantSelector";
import { ProductTabs } from "@/components/product/ProductTabs";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { products } from "@/data/products";
import { useCart } from "@/hooks/use-cart";

export function ProductPage() {
    const { slug } = useParams();
    const product = useMemo(() => products.find(p => p.slug === slug), [slug]);
    const { addItem } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [variants, setVariants] = useState<Record<string, string>>({});
    const [liked, setLiked] = useState(false);

    if (!product) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-center">
                    <p className="text-muted-foreground mb-4">Product not found.</p>
                    <Button asChild><Link to={"/store"}>Back to Store</Link></Button>
                </div>
            </div>
        );
    }

    const handleAddToCart = () => {
        addItem(product, quantity, variants);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Link to={"/store"} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Store
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <ImageGallery images={product.images} name={product.name} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                >
                    <div>
                        <p className="text-sm text-muted-foreground capitalize mb-1">{product.category}</p>
                        <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="flex gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}`} />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{product.rating} ({product.reviewCount} reviews)</span>
                        </div>
                    </div>

                    <div className="flex items-baseline gap-3">
                        <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                        {product.originalPrice && (
                            <>
                                <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                                <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-xs font-bold">
                                    Save ${(product.originalPrice - product.price).toFixed(2)}
                                </span>
                            </>
                        )}
                    </div>

                    <VariantSelector variants={product.variants} onChange={setVariants} />

                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">Quantity</span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="h-9 w-9 rounded-lg border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                                <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-10 text-center font-medium">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="h-9 w-9 rounded-lg border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                                <Plus className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button size={"lg"} className="flex-1 rounded-full" onClick={handleAddToCart}>
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                        </Button>
                        <Button size={"lg"} variant={"outline"} className="rounded-full" onClick={() => setLiked(!liked)}>
                            <Heart className={`h-4 w-4 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
                        </Button>
                    </div>

                    <ProductTabs description={product.description} specs={product.specs} productId={product.id} />
                </motion.div>
            </div>

            <RelatedProducts category={product.category} currentProductId={product.id} />
        </div>
    );
}
