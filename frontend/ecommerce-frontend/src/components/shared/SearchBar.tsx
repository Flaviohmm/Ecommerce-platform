import { Search, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    expanded?: boolean;
}

export function SearchBar({ value = '', onChange, placeholder = 'Search products...', expanded }: SearchBarProps) {
    const [isExpanded, setIsExpanded] = useState(expanded ?? false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isExpanded && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isExpanded]);

    return (
        <div className="relative">
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 'auto', opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center"
                    >
                        <input 
                            ref={inputRef}
                            type="text" 
                            value={value}
                            onChange={e => onChange?.(e.target.value)}
                            placeholder={placeholder}
                            className="h-9 w-48 md:w-72 rounded-full border border-border bg-background/50 backdrop-blur-sm pl-4 pr-10 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                        <button
                            onClick={() => { setIsExpanded(false); onChange?.('');}}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X className="h-3.5 w-3.5" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {!isExpanded && (
                <button
                    onClick={() => setIsExpanded(true)}
                    className="h-9 w-9 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/10 transition-colors"
                    aria-label="Search"
                >
                    <Search className="h-4 w-4 text-foreground" />
                </button>
            )}
        </div>
    );
}
