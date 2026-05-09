import { motion } from "framer-motion";
import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";

const benefits = [
    { icon: Truck, title: 'Free Shipping', description: 'On orders over $50' },
    { icon: Shield, title: 'Secure Payment', description: '256-bit SSL encryption' },
    { icon: RotateCcw, title: 'Easy Returns', description: '30-day return policy' },
    { icon: Headphones, title: '24/7 Support', description: 'Always here to help' },
];

export function Benefits() {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center p-6 rounded-xl border bg-card hover-lift"
                        >
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                                <benefit.icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                            <p className="text-xs text-muted-foreground">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
