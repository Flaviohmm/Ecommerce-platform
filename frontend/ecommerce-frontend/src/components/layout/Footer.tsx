import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Github, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
    Shop: [
        { label: 'All Products', path: '/store' },
        { label: 'Electronics', path: '/store?category=electronics' },
        { label: 'Audio', path: '/store?category=audio' },
        { label: 'Wearables', path: '/store?category=wearables' },
    ],
    Company: [
        { label: 'About', path: '#' },
        { label: 'Careers', path: '#' },
        { label: 'Press', path: '#' },
        { label: 'Blog', path: '#' },
    ],
    Support: [
        { label: 'Help Center', path: '#' },
        { label: 'Shipping', path: '#' },
        { label: 'Returns', path: '#' },
        { label: 'Contact', path: '#' },
    ],
    Legal: [
        { label: 'Privacy', path: '#' },
        { label: 'Terms', path: '#' },
        { label: 'Cookies', path: '#' },
    ],
};

export function Footer() {
    return (
        <footer className="border-t bg-card/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                                <ShoppingBag className="h-4 w-4 text-primary-foreground" />
                            </div>
                            <span className="font-bold text-lg tracking-tight">Nexus</span>
                        </Link>
                        <p className="text-sm font-medium text-muted-foreground mb-4">
                            Premium tech for the modern world. Curated, designed, and delivered with care.
                        </p>
                        <div className="flex gap-3">
                            {[Twitter, Instagram, Github].map((Icon, i) => (
                                <a key={i} href="#" className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors">
                                    <Icon className="h-3.5 w-3.5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-sm font-semibold mb-3">{title}</h4>
                            <ul className="space-y-2">
                                {links.map(link => (
                                    <li key={link.label}>
                                        <Link to={link.path} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="py-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs font-medium text-muted-foreground">
                        &copy; {new Date().getFullYear()} Nexus. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        <span className="font-medium">contato@nexus.store</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
