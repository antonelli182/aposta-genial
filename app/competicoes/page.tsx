"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const competitions = [
  {
    name: "Brasileirão Série A",
    image: "https://images.unsplash.com/photo-1550881111-7cfde14b8073?q=80&w=2070",
    description: "O principal campeonato do futebol brasileiro",
    teams: 20,
    currentRound: 35
  },
  {
    name: "Copa do Brasil",
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070",
    description: "A copa nacional mais importante do país",
    teams: 92,
    currentRound: "Final"
  },
  {
    name: "Libertadores",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2070",
    description: "O principal torneio de clubes da América do Sul",
    teams: 47,
    currentRound: "Final"
  }
];

export default function CompeticoesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Competições</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions.map((competition) => (
          <Card key={competition.name} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={competition.image}
                alt={competition.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{competition.name}</h2>
              <p className="text-muted-foreground mb-4">{competition.description}</p>
              <div className="text-sm">
                <p>Times participantes: {competition.teams}</p>
                <p>Rodada atual: {competition.currentRound}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}