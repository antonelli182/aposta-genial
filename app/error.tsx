"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Algo deu errado!</h1>
      <p className="text-muted-foreground mb-8">
        Ocorreu um erro ao carregar esta página.
      </p>
      <button
        onClick={() => reset()}
        className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90"
      >
        Tentar novamente
      </button>
    </div>
  );
}