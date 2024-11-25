"use client";

import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const matches = [
  {
    homeTeam: "Palmeiras",
    awayTeam: "Flamengo",
    date: "2023-11-25",
    time: "20:00",
    stadium: "Allianz Parque",
    competition: "Brasileirão"
  },
  {
    homeTeam: "Corinthians",
    awayTeam: "São Paulo",
    date: "2023-11-26",
    time: "16:00",
    stadium: "Neo Química Arena",
    competition: "Brasileirão"
  },
  {
    homeTeam: "Santos",
    awayTeam: "Vasco",
    date: "2023-11-26",
    time: "18:30",
    stadium: "Vila Belmiro",
    competition: "Brasileirão"
  }
];

export default function PartidasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Próximas Partidas</h1>
      <div className="space-y-4">
        {matches.map((match, index) => (
          <Card key={index} className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <span className="text-lg font-semibold">{match.homeTeam}</span>
                <span className="text-2xl font-bold">vs</span>
                <span className="text-lg font-semibold">{match.awayTeam}</span>
              </div>
              <div className="flex flex-col md:flex-row items-center md:space-x-6">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{match.date} - {match.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{match.stadium}</span>
                </div>
                <span className="text-primary font-medium">{match.competition}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}