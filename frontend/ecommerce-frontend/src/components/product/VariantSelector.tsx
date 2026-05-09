import { useState } from "react";

interface VariantSelectorProps {
    variants: { name: string; options: string[] }[];
    onChange: (selections: Record<string, string>) => void;
}

export function VariantSelector({ variants, onChange }: VariantSelectorProps) {
    const [selections, setSelections] = useState<Record<string, string>>(() => {
        const initial: Record<string, string> = {};
        variants.forEach(v => { initial[v.name] = v.options[0]; });
        return initial;
    });

    const handleChange = (name: string, value: string) => {
        const updated = { ...selections, [name]: value };
        setSelections(updated);
        onChange(updated);
    };

    if (variants.length === 0) return null;

    return (
        <div className="space-y-4">
            {variants.map(variant => (
                <div key={variant.name}>
                    <label className="text-sm font-medium mb-2 block">
                        {variant.name}: <span className="text-muted-foreground font-normal">{selections[variant.name]}</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {variant.options.map(option => (
                            <button
                                key={option}
                                onClick={() => handleChange(variant.name, option)}
                                className={`px-4 py-2 rounded-lg border text-sm transition-all ${
                                    selections[variant.name] === option
                                        ? 'border-primary bg-primary/10 text-primary font-medium'
                                        : 'border-border hover:border-foreground/20'
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
