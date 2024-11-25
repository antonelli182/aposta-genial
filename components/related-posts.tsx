"use client";

import { Post } from "@/types/blog";
import { Card } from "./ui/card";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface RelatedPostsProps {
  currentPostId: string;
  posts: Post[];
}

export function RelatedPosts({ currentPostId, posts }: RelatedPostsProps) {
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  return (
    <section className="py-12 border-t">
      <h2 className="text-2xl font-bold mb-6">Artigos Relacionados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link 
            key={post.id} 
            href={`/blog/${post.id}`}
            className="group"
          >
            <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-semibold text-lg line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="text-sm text-muted-foreground flex items-center mt-auto">
                  <Calendar className="h-4 w-4 mr-1" />
                  {format(new Date(post.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}