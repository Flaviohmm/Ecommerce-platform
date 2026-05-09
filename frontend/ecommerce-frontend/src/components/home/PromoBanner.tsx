import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function PromoBanner() {
    return (
        <section className="py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden rounded-2xl neon-border gradient-bg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
                    <div className="relative flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm md:text-base">Flash Sale - Up to 40% Off</h3>
                            <p className="text-xs md:text-sm text-muted-foreground">Limited time offer on premium electronics</p>
                        </div>
                    </div>
                    <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="text-primary font-semibold text-sm"
                    >
                        Ends in 23:59:59
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
