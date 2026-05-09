import { Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { reviews } from "@/data/products";

interface ProductTabsProps {
    description: string;
    specs: Record<string, string>;
    productId: string;
}

export function ProductTabs({ description, specs, productId }: ProductTabsProps) {
    const productReviews = reviews.filter(r => r.productId === productId);

    return (
        <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="reviews">Reviews ({productReviews.length})</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-4">
                <p className="text-muted-foreground leading-relaxed">{description}</p>
            </TabsContent>

            <TabsContent value="reviews" className="mt-4">
                {productReviews.length === 0 ? (
                    <p className="text-muted-foreground text-sm">No reviews yet.</p>
                ) : (
                    <div className="space-y-4">
                        {productReviews.map(review => (
                            <div key={review.id} className="border rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                                            {review.author.charAt(0)}
                                        </div>
                                        <span className="font-medium text-sm">{review.author}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">{review.date}</span>
                                </div>
                                <div className="flex gap-0.5 mb-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className={`h-3 w-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}`} />
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                )}
            </TabsContent>

            <TabsContent value="specs" className="mt-4">
                <div className="rounded-lg border overflow-hidden">
                    {Object.entries(specs).map(([key, value], i) => (
                        <div key={key} className={`flex justify-between px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-muted/30' : ''}`}>
                            <span className="font-medium">{key}</span>
                            <span className="text-muted-foreground">{value}</span>
                        </div>
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    );
}
