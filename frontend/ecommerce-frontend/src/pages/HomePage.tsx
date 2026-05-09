import { Hero } from "@/components/home/Hero";
import { PromoBanner } from "@/components/home/PromoBanner";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Categories } from "@/components/home/Categories";
import { Benefits } from "@/components/home/Benefits";
import { Newsletter } from "@/components/home/Newsletter";

export function HomePage() {
    return (
        <>
            <Hero />
            <PromoBanner />
            <FeaturedProducts />
            <Categories />
            <Benefits />
            <Newsletter />
        </>
    );
}
