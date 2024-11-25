"use client";

import { Card } from "@/components/ui/card";
import { Calendar, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useVoteStore } from "@/lib/store";
import { useEffect, useState } from "react";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category: string;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  const { getTotalVotes, getVote } = useVoteStore();
  const [mounted, setMounted] = useState(false);
  const totalVotes = getTotalVotes(post.id);
  const currentVote = getVote(post.id);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link 
      href={`/blog/${post.id}`}
      className="group transition-transform hover:-translate-y-1 duration-200"
    >
      <Card className="overflow-hidden h-full">
        <div className="relative h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105 duration-200"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: ptBR })}
            </span>
          </div>
          <h2 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h2>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{post.excerpt}</p>
          
          {mounted && totalVotes > 0 && (
            <div className="flex items-center text-sm text-muted-foreground">
              <ThumbsUp className={`h-4 w-4 mr-1 ${currentVote > 0 ? 'text-primary' : ''}`} />
              <span>
                {totalVotes} {totalVotes === 1 ? 'avaliação' : 'avaliações'}
              </span>
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}