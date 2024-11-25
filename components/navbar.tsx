"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Search } from "./search";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Aposta Genial
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/partidas" className="hover:text-primary">
            Partidas
          </Link>
          <Link href="/times" className="hover:text-primary">
            Times
          </Link>
          <Link href="/competicoes" className="hover:text-primary">
            Competições
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Search />
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Perfil</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}