import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageGalleryProps {
    images: string[];
    name: string;
}

export function ImageGallery({ images, name }: ImageGalleryProps) {
    const [selected, setSelected] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isZoomed) return;
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    };

    return (
        <div className="space-y-4">
            <div
                className="relative aspect-square rounded-xl overflow-hidden bg-muted cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
            >
                <AnimatePresence mode="wait">
                    <motion.img
                        key={selected}
                        src={images[selected]}
                        alt={`${name} - Image ${selected + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="h-full w-full object-cover"
                        style={
                            isZoomed
                                ? {
                                    transform: 'scale(2)',
                                    transformOrigin: `${mousePos.x}%${mousePos.y}`,
                                  }
                                : undefined
                        }
                    />
                </AnimatePresence>
            </div>

            {images.length > 1 && (
                <div className="flex gap-3">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setSelected(i)}
                            className={`relative h-16 w-16 md:h-20 md:w-20 rounded-lg overflow-hidden border-2 transition-colors ${
                                i === selected ? 'border-primary' : 'border-transparent'
                            }`}
                        >
                            <img src={img} alt={`${name} thumbnail ${i + 1}`} className="h-full w-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
