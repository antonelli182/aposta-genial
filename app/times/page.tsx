"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const teams = [
  {
    name: "Palmeiras",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070",
    stats: { position: 1, wins: 20, draws: 10, losses: 5 }
  },
  {
    name: "Flamengo",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2070",
    stats: { position: 2, wins: 19, draws: 8, losses: 8 }
  },
  {
    name: "Corinthians",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2070",
    stats: { position: 4, wins: 17, draws: 9, losses: 9 }
  }
];

export default function TimesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Times do Brasileirão</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <Link key={team.name} href={`/times/${team.name.toLowerCase()}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={team.image}
                  alt={team.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{team.name}</h2>
                <div className="text-sm text-muted-foreground">
                  <p>Posição atual: {team.stats.position}º</p>
                  <p>Vitórias: {team.stats.wins}</p>
                  <p>Empates: {team.stats.draws}</p>
                  <p>Derrotas: {team.stats.losses}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}