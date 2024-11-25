"use client";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

interface LatestNewsProps {
  posts: Post[];
}

export default function LatestNews({ posts = [] }: LatestNewsProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Últimas Notícias</h2>
        <Link href="/blog">
          <Button variant="outline">
            Ver mais
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm text-primary">{post.category}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {format(new Date(post.date), "d 'de' MMM", { locale: ptBR })}
                  </span>
                </div>
                <h3 className="font-semibold mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}