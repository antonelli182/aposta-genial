"use client";

import { ArrowBigUp, ArrowBigDown, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { useVoteStore } from "@/lib/store";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface VoteButtonsProps {
  postId: string;
  commentCount?: number;
  vertical?: boolean;
  showComments?: boolean;
  showTotalVotes?: boolean;
  size?: "sm" | "default";
}

export function VoteButtons({ 
  postId, 
  commentCount = 0, 
  vertical = false, 
  showComments = true,
  showTotalVotes = false,
  size = "default"
}: VoteButtonsProps) {
  const { addVote, getVote, getTotalVotes } = useVoteStore();
  const [mounted, setMounted] = useState(false);
  const currentVote = getVote(postId);
  const totalVotes = getTotalVotes(postId);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleVote = (value: number) => {
    addVote(postId, value);
  };

  if (!mounted) {
    return null;
  }

  const buttonSize = size === "sm" ? "h-8 w-8" : "h-10 w-10";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className={cn(
      "flex items-center gap-1 touch-manipulation",
      vertical && "flex-col"
    )}>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          buttonSize,
          "rounded-full hover:bg-primary/10",
          currentVote === 1 && "text-primary bg-primary/10"
        )}
        onClick={() => handleVote(1)}
      >
        <ArrowBigUp className={iconSize} />
      </Button>
      
      <span className={cn(
        "font-medium select-none",
        size === "sm" ? "text-sm min-w-[16px]" : "min-w-[20px]",
        "text-center"
      )}>
        {currentVote}
      </span>
      
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          buttonSize,
          "rounded-full hover:bg-primary/10",
          currentVote === -1 && "text-primary bg-primary/10"
        )}
        onClick={() => handleVote(-1)}
      >
        <ArrowBigDown className={iconSize} />
      </Button>

      {showComments && (
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            buttonSize,
            "rounded-full hover:bg-primary/10 ml-2"
          )}
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('feedback');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <MessageSquare className={iconSize} />
          {commentCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {commentCount}
            </span>
          )}
        </Button>
      )}
      
      {showTotalVotes && totalVotes > 0 && (
        <p className={cn(
          "text-muted-foreground",
          size === "sm" ? "text-xs" : "text-sm"
        )}>
          {totalVotes} {totalVotes === 1 ? 'avaliação' : 'avaliações'}
        </p>
      )}
    </div>
  );
}