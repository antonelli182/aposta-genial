export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-muted rounded w-1/4 mx-auto"></div>
        <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
        <div className="h-4 bg-muted rounded w-1/3 mx-auto"></div>
      </div>
    </div>
  );
}