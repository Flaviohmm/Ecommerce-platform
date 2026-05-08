import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { SearchBar } from "@/components/shared/SearchBar";
import { useCart } from "@/hooks/use-cart";
import { categories } from "@/data/products";

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const { totalItems, setIsOpen } = useCart();
    const location = useLocation();

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'Store', path: '/store' },
        { label: 'Categories', path: '#', hasMega: true },
        { label: 'Dashboard', path: '/dashboard' },
    ];

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="fixed top-0 left-0 right-0 z-50 glass-strong"
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-8">
                            <Link to={"/"} className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                                    <ShoppingBag className="h-4 w-4 text-primary-foreground" />
                                </div>
                                <span className="font-bold text-lg tracking-tight">Nexus</span>
                            </Link>

                            <div className="hidden md:flex items-center gap-1">
                                {navLinks.map(link => (
                                    <div
                                        key={link.label}
                                        className="relative"
                                        onMouseEnter={() => link.hasMega && setMegaOpen(true)}
                                        onMouseLeave={() => link.hasMega && setMegaOpen(false)}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${location.pathname === link.path
                                                    ? 'text-primary'
                                                    : 'text-muted-foreground hover:text-foreground'
                                                }`}
                                        >
                                            {link.label}
                                            {link.hasMega && <ChevronDown className="h-3 w-3" />}
                                        </Link>

                                        {link.hasMega && (
                                            <AnimatePresence>
                                                {megaOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 8 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 8 }}
                                                        transition={{ duration: 0.15 }}
                                                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                                                    >
                                                        <div className="glass-strong rounded-xl p-6 shadow-xl w-[480px] grid grid-cols-3 gap-4">
                                                            {categories.map(cat => (
                                                                <Link
                                                                    key={cat.id}
                                                                    to={`/store?category=${cat.slug}`}
                                                                    onClick={() => setMegaOpen(false)}
                                                                    className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-accent/10 transition-colors"
                                                                >
                                                                    <div className="h-12 w-12 rounded-lg bg-muted overflow-hidden">
                                                                        <img src={cat.image} alt={cat.name} className="h-full w-full object-cover" />
                                                                    </div>
                                                                    <span className="text-xs font-medium text-center">{cat.name}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="hidden sm:block">
                                <SearchBar />
                            </div>
                            <ThemeToggle />
                            <button
                                onClick={() => setIsOpen(true)}
                                className="relative h-9 w-9 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/10 transition-colors"
                                aria-label="Cart"
                            >
                                <ShoppingBag className="h-4 w-4 text-foreground" />
                                {totalItems > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center"
                                    >
                                        {totalItems}
                                    </motion.span>
                                )}
                            </button>
                            <Link
                                to={"/dashboard"}
                                className="hidden sm:flex h-9 w-9 rounded-full border border-border bg-background/50 backdrop-blur-sm items-center justify-center hover:bg-accent/10 transition-colors"
                                aria-label="Account"
                            >
                                <User className="h-4 w-4 text-foreground" />
                            </Link>
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="md:hidden h-9 w-9 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center"
                                aria-label="Menu"
                            >
                                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                            </button>
                        </div>
                    </div>
                </nav>
            </motion.header>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-16 left-0 right-0 z-40 glass-strong border-b md:hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            <div className="mb-3 sm:hidden">
                                <SearchBar expanded />
                            </div>
                            {navLinks.map(link => (
                                <Link
                                    key={link.label}
                                    to={link.path}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${location.pathname === link.path
                                            ? 'text-primary bg-primary/5'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                to={"/dashboard"}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2.5 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/5 transition-colors sm:hidden"
                            >
                                Account
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
