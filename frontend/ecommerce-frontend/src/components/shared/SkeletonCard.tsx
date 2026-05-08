import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
    return (
        <div className="rounded-xl border bg-card p-0 overflow-hidden">
            <Skeleton className="aspect-square w-full" />
            <div className="p-4 space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex justify-between items-center pt-2">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-9 w-9 rounded-full" />
                </div>
            </div>
        </div>
    );
}

export function SkeletonRow() {
    return (
        <div className="flex gap-4 p-4">
            <Skeleton className="h-20 w-20 rounded-lg" />
            <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/4" />
            </div>
        </div>
    );
}
