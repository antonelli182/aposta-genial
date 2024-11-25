export default function TeamLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="animate-pulse space-y-8">
        <div className="h-[400px] bg-muted rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[300px] bg-muted rounded-lg" />
          <div className="h-[300px] bg-muted rounded-lg" />
        </div>
      </div>
    </div>
  );
}