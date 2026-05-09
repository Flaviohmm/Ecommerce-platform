import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/store/ProductCard";
import { FilterSidebar } from "@/components/store/FilterSidebar";
import { SortDropdown, type SortOption } from "@/components/store/SortDropdown";
import { products } from "@/data/products";

export function StorePage() {
    const [searchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || '';

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [priceRange, setPriceRange] = useState([0, 3000]);
    const [minRating, setMinRating] = useState(0);
    const [sort, setSort] = useState<SortOption>('featured');
    const [search, setSearch] = useState('');

    const filtered = useMemo(() => {
        let result = [...products];

        if (selectedCategory) {
            result = result.filter(p => p.category === selectedCategory);
        }
        if (search) {
            const q = search.toLowerCase();
            result = result.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
        }
        result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
        if (minRating > 0) {
            result = result.filter(p => p.rating >= minRating);
        }

        switch (sort) {
            case 'price-asc': result.sort((a, b) => a.price - b.price); break;
            case 'price-desc': result.sort((a, b) => b.price - a.price); break;
            case 'rating': result.sort((a, b) => b.rating - a.rating); break;
            case 'newest': result.sort((a, b) => Number(b.id) - Number(a.id)); break;
            default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)); break;
        }

        return result
    }, [selectedCategory, priceRange, minRating, sort, search]);

    const handleReset = () => {
        setSelectedCategory('');
        setPriceRange([0, 3000]);
        setMinRating(0);
        setSearch('');
        setSort('featured');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Store</h1>
                        <p className="text-sm text-muted-foreground">{filtered.length} products</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="relative hidden sm:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="pl-9 h-9 w-48"
                            />
                        </div>
                        <SortDropdown value={sort} onChange={setSort} />
                    </div>
                </div>

                <div className="flex gap-6">
                    <FilterSidebar
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                        priceRange={priceRange}
                        onPriceChange={setPriceRange}
                        minRating={minRating}
                        onRatingChange={setMinRating}
                        onReset={handleReset}
                    />

                    <div className="flex-1">
                        {filtered.length === 0 ? (
                            <div className="text-center py-16">
                                <p className="text-muted-foreground">No products found matching your filters.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filtered.map((product, i) => (
                                    <ProductCard key={product.id} product={product} index={i} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
