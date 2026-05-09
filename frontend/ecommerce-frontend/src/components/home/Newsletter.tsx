import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className="py-16 md:py-24 bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl neon-border gradient-bg p-8 md:p-12 text-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
                    <div className="relative">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Stay in the loop</h2>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            Get exclusive deals, new arrivals, and insider tips delivered to your inbox.
                        </p>

                        {submitted ? (
                            <motion.p
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-primary font-medium"
                            >
                                Thanks for subscribing!
                            </motion.p>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="rounded-full bg-background/50 backdrop-blur-sm"
                                    required
                                />
                                <Button type="submit" className="rounded-full px-6 shrink-0">
                                    <Send className="h-4 w-4 mr-2" />
                                    Subscribe
                                </Button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
