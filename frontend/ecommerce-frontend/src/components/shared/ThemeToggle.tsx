import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative h-9 w-9 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/10 transition-colors"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180, scale: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                {theme === 'dark' ? (
                    <Moon className="h-4 w-4 text-foreground" />
                ) : (
                    <Sun className="h-4 w-4 text-foreground" />
                )}
            </motion.div>
        </button>
    );
}
