"use client";

import { getPostById, getAllPosts } from "@/lib/blog";
import { MarkdownContent } from "@/components/markdown-content";
import { RelatedPosts } from "@/components/related-posts";
import { Calendar, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CommentsSection } from "@/components/comments-section";
import { ShareWidget } from "@/components/share-widget";

export default function BlogPost({ id }: { id: string }) {
  try {
    const post = getPostById(id);
    const allPosts = getAllPosts();

    return (
      <article className="min-h-screen animate-fade-in">
        <div className="container mx-auto px-4 py-8">
          {/* Back button */}
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="group">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Voltar para o Blog
              </Button>
            </Link>
          </div>

          {/* Article header */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="space-y-4">
              <Link 
                href={`/blog?category=${post.category}`}
                className="inline-block text-sm bg-primary/10 text-primary px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
              >
                {post.category}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {format(new Date(post.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </div>
                <ShareWidget title={post.title} />
              </div>
              <p className="text-xl text-muted-foreground">{post.excerpt}</p>
            </div>
          </div>

          {/* Featured image */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose-container">
              <MarkdownContent content={post.content} />
            </div>
            
            {/* Comments */}
            <CommentsSection postId={post.id} />
            
            {/* Related posts */}
            <RelatedPosts currentPostId={post.id} posts={allPosts} />
          </div>
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}