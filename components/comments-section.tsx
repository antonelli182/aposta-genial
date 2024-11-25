"use client";

import { useState, useEffect } from "react";
import { useVoteStore } from "@/lib/store";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Brain, ThumbsUp, ThumbsDown } from "lucide-react";

interface CommentsSectionProps {
  postId: string;
}

export function CommentsSection({ postId }: CommentsSectionProps) {
  const { getComments, addComment, addVote, getVote } = useVoteStore();
  const [newComment, setNewComment] = useState("");
  const [mounted, setMounted] = useState(false);
  const comments = getComments(postId);
  const currentVote = getVote(postId);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      addComment(postId, newComment);
      setNewComment("");
    }
  };

  const handleVote = (value: number) => {
    addVote(postId, value);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="py-8 border-t" id="feedback">
      <div className="bg-muted/50 p-4 sm:p-6 rounded-lg mb-8">
        <div className="flex items-start gap-4">
          <Brain className="hidden sm:block h-6 w-6 text-primary mt-1 shrink-0" />
          <div className="space-y-4 w-full">
            <div>
              <h2 className="text-lg font-bold mb-2">Ajude a melhorar nossas análises</h2>
              <p className="text-sm text-muted-foreground">
                Seu feedback é essencial para aprimorarmos nossa inteligência artificial e 
                entregarmos análises cada vez mais precisas.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 bg-background rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium mb-1">Como você avalia esta análise?</p>
                <p className="text-xs text-muted-foreground">
                  Sua avaliação nos ajuda a entender o que é mais relevante
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 ${currentVote === 1 ? 'text-primary bg-primary/10' : ''}`}
                  onClick={() => handleVote(1)}
                >
                  <ThumbsUp className="h-4 w-4" />
                  Útil
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-2 ${currentVote === -1 ? 'text-primary bg-primary/10' : ''}`}
                  onClick={() => handleVote(-1)}
                >
                  <ThumbsDown className="h-4 w-4" />
                  Pode melhorar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label htmlFor="feedback" className="block text-sm font-medium mb-2">
            Sugestões para melhorar
          </label>
          <Textarea
            id="feedback"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Compartilhe suas sugestões para aprimorarmos nossas análises..."
            className="mb-4 text-base"
            rows={4}
            style={{ fontSize: '16px' }}
          />
        </div>
        <Button 
          type="submit" 
          disabled={!newComment.trim()} 
          className="w-full sm:w-auto"
        >
          <ThumbsUp className="h-4 w-4 mr-2" />
          Enviar feedback
        </Button>
      </form>

      {comments.length > 0 && (
        <>
          <h3 className="font-semibold mb-4">Comentários da comunidade</h3>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-muted/30 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold">{comment.author}</span>
                  <span className="text-sm text-muted-foreground">
                    {format(new Date(comment.createdAt), "d 'de' MMMM 'às' HH:mm", { locale: ptBR })}
                  </span>
                </div>
                <p className="text-foreground/90">{comment.content}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}