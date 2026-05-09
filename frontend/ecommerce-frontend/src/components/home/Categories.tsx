import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

export function Categories() {
    return (
        <section className="py-16 md:py-24 bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-2xl md:text-3xl font-bold">Shop by Category</h2>
                    <p className="text-muted-foreground mt-1">Find what you are looking for</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Link
                                to={`/store?category=${cat.slug}`}
                                className="group block rounded-xl border bg-card overflow-hidden hover-lift"
                            >
                                <div className="aspect-square overflow-hidden relative">
                                    <img 
                                        src={cat.image} 
                                        alt={cat.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <h3 className="text-white font-semibold text-sm">{cat.name}</h3>
                                        <p className="text-white/70 text-xs">{cat.productCount} products</p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link to={"/store"} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                        Browse all categories <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
