export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    originalPrice?: number;
    image: string;
    images: string[];
    category: string;
    rating: number;
    reviewCount: number;
    description: string;
    specs: Record<string, string>;
    variants: { name: string; options: string[] }[];
    inStock: boolean;
    featured?: boolean;
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    image: string;
    productCount: number;
}

export const categories: Category[] = [
    { id: '1', name: 'Electronics', slug: 'electronics', image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 124 },
    { id: '2', name: 'Wearables', slug: 'wearables', image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 86 },
    { id: '3', name: 'Audio', slug: 'audio', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 64 },
    { id: '4', name: 'Accessories', slug: 'accessories', image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 203 },
    { id: '5', name: 'Smart Home', slug: 'smart-home', image: 'https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 47 },
    { id: '6', name: 'Gaming', slug: 'gaming', image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=600', productCount: 91 },
];

export const products: Product[] = [
    {
        id: '1', name: 'Quantum Pro Headphones', slug: 'quantum-pro-headphones',
        price: 349.99, originalPrice: 449.99,
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/159707/headphones-design-technology-music-159707.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/164701/pexels-photo-164701.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        category: 'audio', rating: 4.8, reviewCount: 234,
        description: 'Experience sound like never before with our flagship noise-cancelling headphones. Featuring quantum acoustic technology, 40-hour battery life, and premium materials that redefine audio excellence.',
        specs: { 'Driver Size': '50mm', 'Frequency Response': '4Hz - 40kHz', 'Battery Life': '40 hours', 'Noise Cancellation': 'Adaptive ANC', 'Weight': '250g' },
        variants: [{ name: 'Color', options: ['Midnight Black', 'Arctic White', 'Navy Blue'] }],
        inStock: true, featured: true,
    },
    {
        id: '2', name: 'Nova Smartwatch Ultra', slug: 'nova-smartwatch-ultra',
        price: 599.99, originalPrice: 699.99,
        image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        category: 'wearables', rating: 4.9, reviewCount: 567,
        description: 'The most advanced smartwatch ever created. Titanium case, always-on Retina display, precision health sensors, and up to 72 hours of battery life.',
        specs: { 'Display': '1.9" OLED', 'Case Material': 'Titanium', 'Battery': '72 hours', 'Water Resistance': '100m', 'Sensors': 'Heart rate, SpO2, ECG' },
        variants: [{ name: 'Size', options: ['42mm', '46mm', '49mm'] }, { name: 'Color', options: ['Natural Titanium', 'Black Titanium', 'Blue Titanium'] }],
        inStock: true, featured: true,
    },
    {
        id: '3', name: 'Aether Laptop 16"', slug: 'aether-laptop-16',
        price: 2499.99,
        image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1810488/pexels-photo-1810488.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        category: 'electronics', rating: 4.7, reviewCount: 189,
        description: 'Unleash creative potential with the Aether Laptop. M3 Ultra chip, 16-inch Liquid Retina XDR display, and up to 22 hours of battery life for professionals who demand the best.',
        specs: { 'Processor': 'M3 Ultra', 'Display': '16" Liquid Retina XDR', 'RAM': '64GB Unified', 'Storage': '2TB SSD', 'Battery': '22 hours' },
        variants: [{ name: 'Chip', options: ['M3 Pro', 'M3 Max', 'M3 Ultra'] }],
        inStock: true, featured: true,
    },
    {
        id: '4', name: 'Prism Wireless Earbuds', slug: 'prism-wireless-earbuds',
        price: 199.99, originalPrice: 249.99,
        image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        category: 'audio', rating: 4.6, reviewCount: 412,
        description: 'Immersive audio in a compact design. Active noise cancellation, spatial audio, and seamless device switching for your everyday soundtrack.',
        specs: { 'Driver': 'Custom 11mm', 'ANC': 'Active Noise Cancellation', 'Battery': '8 hours (32 with case)', 'Water Resistance': 'IPX5', 'Connectivity': 'Bluetooth 5.3' },
        variants: [{ name: 'Color', options: ['White', 'Black', 'Coral'] }],
        inStock: true, featured: true,
    },
    {
        id: '5', name: 'Zenith Mechanical Keyboard', slug: 'zenith-mechanical-keyboard',
        price: 179.99,
        image: 'https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        category: 'accessories', rating: 4.5, reviewCount: 156,
        description: 'Premium mechanical keyboard with hot-swappable switches, per-key RGB, and aircraft-grade aluminum frame. Designed for those who type with intention.',
        specs: { 'Switches': 'Hot-swappable', 'Layout': '75%', 'Backlight': 'Per-key RGB', 'Frame': 'Aluminum', 'Connection': 'USB-C / Bluetooth' },
        variants: [{ name: 'Switch Type', options: ['Linear', 'Tactile', 'Clicky'] }],
        inStock: true,
    },
    {
        id: '6', name: 'Orion Smart Speaker', slug: 'orion-smart-speaker',
        price: 129.99,
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        category: 'smart-home', rating: 4.4, reviewCount: 98,
        description: 'Room-filling sound meets intelligent home control. Adaptive audio, multi-room support, and privacy-first voice assistant.',
        specs: { 'Drivers': '4 woofer + tweeter', 'Voice Assistant': 'Built-in', 'Connectivity': 'WiFi 6 + Bluetooth', 'Multi-room': 'Yes', 'Dimensions': '6.3" x 6.3" x 6.9"' },
        variants: [{ name: 'Color', options: ['Charcoal', 'Sand', 'Blue'] }],
        inStock: true,
    },
    {
        id: '7', name: 'Vortex Gaming Mouse', slug: 'vortex-gaming-mouse',
        price: 89.99, originalPrice: 119.99,
        image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        category: 'gaming', rating: 4.7, reviewCount: 321,
        description: 'Ultra-lightweight gaming mouse with 25K DPI sensor, optical switches, and ergonomic design for competitive precision.',
        specs: { 'Sensor': '25,600 DPI', 'Weight': '58g', 'Switches': 'Optical', 'Battery': '80 hours', 'Polling Rate': '1000Hz' },
        variants: [{ name: 'Color', options: ['Black', 'White', 'Pink'] }],
        inStock: true,
    },
    {
        id: '8', name: 'Flux USB-C Hub Pro', slug: 'flux-usbc-hub-pro',
        price: 79.99,
        image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        category: 'accessories', rating: 4.3, reviewCount: 87,
        description: 'Expand your connectivity with 12-in-1 USB-C hub. Dual 4K HDMI, 100W passthrough charging, and SD card reader in a sleek aluminum body.',
        specs: { 'Ports': '12-in-1', 'HDMI': 'Dual 4K@60Hz', 'Power Delivery': '100W', 'Data Transfer': '10Gbps', 'Material': 'Aluminum' },
        variants: [],
        inStock: true,
    },
    {
        id: '9', name: 'Nebula 4K Monitor 27"', slug: 'nebula-4k-monitor',
        price: 899.99, originalPrice: 1099.99,
        image: 'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/1024248/pexels-photo-1024248.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        category: 'electronics', rating: 4.8, reviewCount: 203,
        description: 'Professional-grade 4K monitor with Mini-LED technology, 1000 nits peak brightness, and factory-calibrated color accuracy for creative professionals.',
        specs: { 'Resolution': '4K UHD', 'Panel': 'Mini-LED', 'Brightness': '1000 nits peak', 'Color': '99% DCI-P3', 'Refresh Rate': '240Hz' },
        variants: [{ name: 'Size', options: ['27"', '32"'] }],
        inStock: true, featured: true,
    },
    {
        id: '10', name: 'Pulse Fitness Tracker', slug: 'pulse-fitness-tracker',
        price: 149.99,
        image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        category: 'wearables', rating: 4.2, reviewCount: 145,
        description: 'Sleek fitness tracker with advanced health monitoring, sleep tracking, and 14-day battery life. Your wellness companion, reimagined.',
        specs: { 'Display': '1.47" AMOLED', 'Battery': '14 days', 'Water Resistance': '5ATM', 'Sensors': 'Heart rate, SpO2', 'Weight': '26g' },
        variants: [{ name: 'Color', options: ['Black', 'White', 'Green'] }, { name: 'Band Size', options: ['S', 'M', 'L'] }],
        inStock: true,
    },
    {
        id: '11', name: 'Echo Noise Cancelling Buds', slug: 'echo-nc-buds',
        price: 159.99, originalPrice: 199.99,
        image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        category: 'audio', rating: 4.5, reviewCount: 278,
        description: 'Premium noise cancelling true wireless earbuds with Hi-Res Audio, adaptive ANC, and crystal-clear call quality.',
        specs: { 'Driver': '10mm Dynamic', 'ANC': 'Adaptive', 'Battery': '9 hours (36 with case)', 'Codec': 'LDAC, AAC', 'Water Resistance': 'IPX4' },
        variants: [{ name: 'Color', options: ['Midnight', 'Storm Blue', 'Coral Red'] }],
        inStock: true,
    },
    {
        id: '12', name: 'Titan Gaming Controller', slug: 'titan-gaming-controller',
        price: 69.99,
        image: 'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=600',
        ],
        category: 'gaming', rating: 4.6, reviewCount: 445,
        description: 'Pro-grade wireless gaming controller with Hall Effect triggers, customizable back buttons, and ultra-low latency for competitive gaming.',
        specs: { 'Connectivity': '2.4GHz + Bluetooth', 'Battery': '40 hours', 'Triggers': 'Hall Effect', 'Back Buttons': '2 Programmable', 'Compatibility': 'PC, PS5, Switch' },
        variants: [{ name: 'Color', options: ['Onyx', 'Pearl', 'Crimson'] }],
        inStock: true,
    },
];

export const reviews = [
    { id: '1', productId: '1', author: 'Alex M.', rating: 5, date: '2025-12-15', comment: 'Best headphones I have ever owned. The noise cancellation is incredible and the sound quality is unmatched.' },
    { id: '2', productId: '1', author: 'Sarah K.', rating: 4, date: '2025-11-28', comment: 'Great sound quality and comfort. Battery life is amazing. Wish the case was a bit more compact.' },
    { id: '3', productId: '1', author: 'James R.', rating: 5, date: '2025-10-05', comment: 'Worth every penny. The spatial audio feature is mind-blowing for movies and music.' },
    { id: '4', productId: '2', author: 'Emily T.', rating: 5, date: '2025-12-20', comment: 'This smartwatch has completely changed how I track my fitness. The titanium build is gorgeous.' },
    { id: '5', productId: '2', author: 'Michael B.', rating: 5, date: '2025-11-10', comment: 'The health sensors are incredibly accurate. Best smartwatch on the market, period.' },
    { id: '6', productId: '3', author: 'David L.', rating: 4, date: '2025-12-01', comment: 'Incredible performance for creative work. The display is stunning. A bit heavy but worth it.' },
];
