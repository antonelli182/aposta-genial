import TeamPage from '@/components/team-page';

const teams = {
  palmeiras: {
    name: "Palmeiras",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070",
    founded: "26 de agosto de 1914",
    stadium: "Allianz Parque",
    capacity: "43.713",
    titles: {
      brasileirao: 11,
      libertadores: 3,
      copaBrasil: 4,
    },
    nextMatches: [
      {
        opponent: "Flamengo",
        date: "2023-11-25",
        competition: "Brasileirão",
      },
      {
        opponent: "Internacional",
        date: "2023-11-29",
        competition: "Brasileirão",
      },
    ],
  },
  flamengo: {
    name: "Flamengo",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2070",
    founded: "15 de novembro de 1895",
    stadium: "Maracanã",
    capacity: "78.838",
    titles: {
      brasileirao: 8,
      libertadores: 3,
      copaBrasil: 4,
    },
    nextMatches: [
      {
        opponent: "Palmeiras",
        date: "2023-11-25",
        competition: "Brasileirão",
      },
      {
        opponent: "São Paulo",
        date: "2023-12-02",
        competition: "Brasileirão",
      },
    ],
  },
  corinthians: {
    name: "Corinthians",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2070",
    founded: "1 de setembro de 1910",
    stadium: "Neo Química Arena",
    capacity: "49.205",
    titles: {
      brasileirao: 7,
      libertadores: 1,
      copaBrasil: 3,
    },
    nextMatches: [
      {
        opponent: "São Paulo",
        date: "2023-11-26",
        competition: "Brasileirão",
      },
      {
        opponent: "Santos",
        date: "2023-11-30",
        competition: "Brasileirão",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(teams).map((team) => ({
    team,
  }));
}

export default function Page({ params }: { params: { team: string } }) {
  const team = teams[params.team as keyof typeof teams];
  return <TeamPage team={team} />;
}