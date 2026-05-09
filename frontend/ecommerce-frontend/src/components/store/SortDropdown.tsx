import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';

interface SortDropdownProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

const sortOption: { value: SortOption; label: string }[] = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to low' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'newest', label: 'Newest' },
];

export function SortDropdown({ value, onChange }: SortDropdownProps) {
    return (
        <Select value={value} onValueChange={v => onChange(v as SortOption)}>
            <SelectTrigger className="w-[180px] h-9 text-sm">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
                {sortOption.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
