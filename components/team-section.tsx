"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Times em Destaque</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            name: "Palmeiras",
            slug: "palmeiras",
            image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070"
          },
          {
            name: "Flamengo",
            slug: "flamengo",
            image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2070"
          }
        ].map((team) => (
          <Link key={team.name} href={`/times/${team.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2">
                <div className="relative h-full min-h-[200px]">
                  <Image
                    src={team.image}
                    alt={team.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{team.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Jogue como quem entende do jogo
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">• Próximo jogo: Sábado, 20:00</p>
                    <p className="text-sm">• Últimas vitórias: 3</p>
                    <p className="text-sm">• Posição atual: 2º</p>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}