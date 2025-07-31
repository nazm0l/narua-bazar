import { Skeleton } from "@/components/ui/skeleton";

export default function ShopCardSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="w-40 lg:w-full items-center shadow-lg rounded-lg bg-white">
        <Skeleton className="h-[200px] w-full" />
        <div className="p-4">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[250px] mt-3" />
        </div>
      </Skeleton>
    </div>
  );
}
