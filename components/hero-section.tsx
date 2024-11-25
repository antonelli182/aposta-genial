"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <Link href="/blog/analise-flamengo-palmeiras">
        <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070"
                alt="Featured article"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <div className="space-y-4">
                <p className="text-sm text-primary">Análise Tática</p>
                <h1 className="text-3xl font-bold">
                  Palmeiras vs Flamengo: O Duelo que Pode Definir o Brasileirão
                </h1>
                <p className="text-muted-foreground">
                  Genialidade é estar sempre preparado para o próximo lance. Nossa análise completa do confronto decisivo.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  24 Nov 2023
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </section>
  );
}