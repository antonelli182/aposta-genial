"use client";

import { Card } from "@/components/ui/card";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Trophy, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface Team {
  name: string;
  image: string;
  founded: string;
  stadium: string;
  capacity: string;
  titles: {
    brasileirao: number;
    libertadores: number;
    copaBrasil: number;
  };
  nextMatches: Array<{
    opponent: string;
    date: string;
    competition: string;
  }>;
}

interface TeamPageProps {
  team: Team | undefined;
}

export default function TeamPage({ team }: TeamPageProps) {
  if (!team) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
        <Image
          src={team.image}
          alt={team.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8">
          <h1 className={cn(
            "text-4xl font-bold mb-2",
            "dark:text-white text-black"
          )}>
            {team.name}
          </h1>
          <p className={cn(
            "dark:text-white/80 text-black/80"
          )}>
            Jogue como quem entende do jogo
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Informações do Clube</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Fundação: {team.founded}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <span>Estádio: {team.stadium} ({team.capacity} lugares)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span>Títulos:</span>
            </div>
            <ul className="pl-8 space-y-1 text-sm">
              <li>Brasileirão: {team.titles.brasileirao}</li>
              <li>Libertadores: {team.titles.libertadores}</li>
              <li>Copa do Brasil: {team.titles.copaBrasil}</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Próximas Partidas</h2>
          <div className="space-y-4">
            {team.nextMatches.map((match, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-semibold">{team.name} vs {match.opponent}</p>
                  <p className="text-sm text-muted-foreground">{match.competition}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {match.date}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}