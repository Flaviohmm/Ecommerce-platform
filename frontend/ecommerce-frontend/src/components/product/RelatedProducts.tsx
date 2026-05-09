import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductCard } from "@/components/store/ProductCard";

interface RelatedProductsProps {
    category: string;
    currentProductId: string;
}

export function RelatedProducts({ category, currentProductId }: RelatedProductsProps) {
    const related = products
        .filter(p => p.category === category && p.id !== currentProductId)
        .slice(0, 4);

    if (related.length === 0) return null;

    return (
        <section className="mt-16">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl font-bold mb-6"
            >
                You might also like
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                ))}
            </div>
        </section>
    );
}
