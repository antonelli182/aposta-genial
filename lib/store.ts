"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Vote {
  postId: string;
  value: number;
}

interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  createdAt: string;
}

interface VoteStore {
  votes: Vote[];
  comments: Comment[];
  addVote: (postId: string, value: number) => void;
  removeVote: (postId: string) => void;
  getVote: (postId: string) => number;
  getTotalVotes: (postId: string) => number;
  addComment: (postId: string, content: string) => void;
  getComments: (postId: string) => Comment[];
}

export const useVoteStore = create<VoteStore>()(
  persist(
    (set, get) => ({
      votes: [],
      comments: [
        {
          id: '1',
          postId: 'analise-flamengo-palmeiras',
          author: 'João Silva',
          content: 'Gostaria de ver mais análises estatísticas detalhadas sobre o histórico dos confrontos.',
          createdAt: '2024-02-10T10:00:00Z'
        },
        {
          id: '2',
          postId: 'analise-flamengo-palmeiras',
          author: 'Maria Santos',
          content: 'Seria interessante incluir uma seção sobre as formações alternativas que os times podem utilizar.',
          createdAt: '2024-02-10T11:30:00Z'
        }
      ],
      addVote: (postId: string, value: number) => {
        const { votes } = get();
        const existingVote = votes.find(v => v.postId === postId);
        
        if (existingVote) {
          if (existingVote.value === value) {
            set({
              votes: votes.filter(v => v.postId !== postId)
            });
          } else {
            set({
              votes: votes.map(v =>
                v.postId === postId ? { ...v, value } : v
              )
            });
          }
        } else {
          set({
            votes: [...votes, { postId, value }]
          });
        }
      },
      removeVote: (postId: string) => {
        set(state => ({
          votes: state.votes.filter(v => v.postId !== postId)
        }));
      },
      getVote: (postId: string) => {
        const vote = get().votes.find(v => v.postId === postId);
        return vote ? vote.value : 0;
      },
      getTotalVotes: (postId: string) => {
        return get().votes.filter(v => v.postId === postId).length;
      },
      addComment: (postId: string, content: string) => {
        const newComment: Comment = {
          id: Date.now().toString(),
          postId,
          author: 'Usuário Anônimo',
          content,
          createdAt: new Date().toISOString()
        };
        set(state => ({
          comments: [...state.comments, newComment]
        }));
      },
      getComments: (postId: string) => {
        return get().comments.filter(c => c.postId === postId);
      }
    }),
    {
      name: 'vote-storage'
    }
  )
);