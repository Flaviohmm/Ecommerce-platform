import { useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { categories } from "@/data/products";

interface FilterSidebarProps {
    selectedCategory: string;
    onCategoryChange: (cat: string) => void;
    priceRange: number[];
    onPriceChange: (range: number[]) => void;
    minRating: number;
    onRatingChange: (rating: number) => void;
    onReset: () => void;
}

export function FilterSidebar({
    selectedCategory,
    onCategoryChange,
    priceRange,
    onPriceChange,
    minRating,
    onRatingChange,
    onReset,
}: FilterSidebarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const content = (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">Filters</h3>
                <button onClick={onReset} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Reset all
                </button>
            </div>

            <div>
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Category</h4>
                <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                            checked={selectedCategory === ''}
                            onCheckedChange={() => onCategoryChange('')}
                        />
                        <span className="text-sm">All Categories</span>
                    </label>
                    {categories.map(cat => (
                        <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                                checked={selectedCategory === cat.slug}
                                onCheckedChange={() => onCategoryChange(cat.slug)}
                            />
                            <span className="text-sm">{cat.name}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Price Range</h4>
                <Slider
                    value={priceRange}
                    onValueChange={onPriceChange}
                    min={0}
                    max={3000}
                    step={50}
                    className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>

            <div>
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Rating</h4>
                <div className="space-y-2">
                    {[4, 3, 2, 1].map(r => (
                        <label key={r} className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                                checked={minRating === r}
                                onCheckedChange={() => onRatingChange(minRating === r ? 0 : r)}
                            />
                            <span className="text-sm">{r}+ stars</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-20 rounded-xl border bg-card p-5">
                    {content}
                </div>
            </div>

            <div className="lg:hidden">
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() => setMobileOpen(true)}
                    className="gap-2"
                >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                </Button>

                {mobileOpen && (
                    <div className="fixed inset-0 z-50">
                        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            className="absolute left-0 top-0 bottom-0 w-80 bg-background p-6 overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-semibold">Filters</h3>
                                <button onClick={() => setMobileOpen(false)}>
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                            {content}
                        </motion.div>
                    </div>
                )}
            </div>
        </>
    );
}
