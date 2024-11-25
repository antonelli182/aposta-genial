"use client";

import * as React from "react";
import { Search as SearchIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { searchPosts } from "@/lib/blog";
import { normalizeString } from "@/lib/utils";

type SearchResult = {
  id: string;
  title: string;
  type: "post" | "team" | "match";
  url: string;
  excerpt?: string;
};

const teams = [
  { id: "palmeiras", name: "Palmeiras" },
  { id: "flamengo", name: "Flamengo" },
  { id: "corinthians", name: "Corinthians" },
  { id: "sao-paulo", name: "São Paulo" },
  { id: "santos", name: "Santos" },
];

const matches = [
  {
    id: "palmeiras-flamengo",
    title: "Palmeiras vs Flamengo",
    date: "2023-11-25",
  },
  {
    id: "corinthians-sao-paulo",
    title: "Corinthians vs São Paulo",
    date: "2023-11-26",
  },
  {
    id: "santos-vasco",
    title: "Santos vs Vasco",
    date: "2023-11-26",
  },
];

export function Search() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [results, setResults] = React.useState<SearchResult[]>([]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSearch = React.useCallback(async (value: string) => {
    setQuery(value);
    if (value.length === 0) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    const normalizedQuery = normalizeString(value);
    
    // Search through different content types
    const searchResults: SearchResult[] = [
      // Search through blog posts
      ...searchPosts(value).map(post => ({
        id: post.id,
        title: post.title,
        type: "post" as const,
        url: `/blog/${post.id}`,
        excerpt: post.excerpt,
      })),

      // Search through teams
      ...teams
        .filter(team => 
          normalizeString(team.name).includes(normalizedQuery)
        )
        .map(team => ({
          id: team.id,
          title: team.name,
          type: "team" as const,
          url: `/times/${team.id.toLowerCase()}`,
        })),

      // Search through matches
      ...matches
        .filter(match => 
          normalizeString(match.title).includes(normalizedQuery)
        )
        .map(match => ({
          id: match.id,
          title: `${match.title} - ${match.date}`,
          type: "match" as const,
          url: `/partidas`,
        })),
    ];

    setResults(searchResults);
    setIsLoading(false);
  }, []);

  const handleSelect = (result: SearchResult) => {
    setOpen(false);
    router.push(result.url);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={() => setOpen(true)}
        aria-label="Buscar no site"
      >
        <SearchIcon className="h-5 w-5" />
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogTitle>Buscar no site</DialogTitle>
          <div className="space-y-4">
            <Input
              placeholder="Digite sua busca..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full"
              autoFocus
            />
            <div className="max-h-[300px] overflow-y-auto">
              {isLoading ? (
                <div className="flex items-center justify-center py-6">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="ml-2">Buscando...</span>
                </div>
              ) : results.length === 0 ? (
                <div className="text-center py-6 text-sm text-muted-foreground">
                  {query ? "Nenhum resultado encontrado." : "Digite para buscar"}
                </div>
              ) : (
                <div className="space-y-2">
                  {results.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleSelect(result)}
                      className={cn(
                        "w-full flex items-center p-2 rounded-md hover:bg-muted text-left",
                      )}
                    >
                      <span
                        className={cn(
                          "mr-2 flex h-6 w-6 items-center justify-center rounded-md border",
                          {
                            "bg-primary/10": result.type === "post",
                            "bg-green-500/10": result.type === "team",
                            "bg-blue-500/10": result.type === "match",
                          }
                        )}
                      >
                        {result.type === "post" && "📝"}
                        {result.type === "team" && "⚽"}
                        {result.type === "match" && "🏆"}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-medium">{result.title}</span>
                        {result.excerpt && (
                          <span className="text-sm text-muted-foreground line-clamp-1">
                            {result.excerpt}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}