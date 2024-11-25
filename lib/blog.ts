import { Post } from "@/types/blog";
import { normalizeString } from "./utils";

export const POSTS: Post[] = [
  {
    id: 'analise-flamengo-palmeiras',
    title: 'Palpites de Hoje: Palmeiras x Flamengo - Análise Completa e Placar Exato',
    excerpt: 'Análise detalhada com estatísticas de futebol e palpites de especialistas para o confronto decisivo entre Palmeiras e Flamengo no Brasileirão.',
    date: '2023-11-24',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070',
    category: 'Palpites do Dia',
    content: `# Palpites de Hoje: Palmeiras x Flamengo

Nossa análise completa com estatísticas de futebol para apostas e palpites especializados para este confronto decisivo.

## Momento das Equipes

### Palmeiras
- Invicto há 10 jogos
- Melhor defesa do campeonato
- Abel Ferreira tem todos os titulares à disposição

### Flamengo
- 4 vitórias consecutivas
- Melhor ataque nos últimos 5 jogos
- Tite conseguiu encontrar a formação ideal

## Dicas Bet para Hoje

- Over 2.5 gols: Histórico recente favorável
- Ambas marcam: Sim
- Placar exato mais provável: 2-1`
  },
  {
    id: 'evolucao-tatica-brasileirao',
    title: 'Dicas Bet: Como a Evolução Tática do Brasileirão Impacta suas Apostas',
    excerpt: 'Análise especializada sobre as mudanças táticas no Brasileirão e como usar essas informações para palpites mais precisos.',
    date: '2023-11-23',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2070',
    category: 'Análise Tática',
    content: `# Evolução Tática e Apostas no Brasileirão

Entenda como as mudanças táticas afetam os palpites esportivos e aprimore suas apostas.

## Principais Mudanças

1. Pressão alta
2. Construção desde a defesa
3. Goleiros participativos
4. Laterais invertidos`
  },
  {
    id: 'apostas-inteligentes-copa',
    title: 'Palpites de Amanhã: Guia Completo Copa do Brasil',
    excerpt: 'Estratégias avançadas e dicas bets para fazer apostas mais assertivas durante a Copa do Brasil.',
    date: '2023-11-22',
    image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2070',
    category: 'Dicas de Apostas',
    content: `# Guia de Apostas Inteligentes: Copa do Brasil

A Copa do Brasil oferece oportunidades únicas para apostadores. Confira nossas dicas bet para maximizar suas chances.

## Fatores Cruciais

1. Histórico dos confrontos
2. Momento das equipes
3. Fator casa
4. Estatísticas relevantes`
  },
  {
    id: 'revelacoes-brasileirao',
    title: 'Apostas e Palpites: As Revelações que Podem Surpreender no Brasileirão',
    excerpt: 'Análise exclusiva dos jovens talentos que estão mudando as estatísticas de futebol para apostas no Brasileirão.',
    date: '2023-11-21',
    image: 'https://images.unsplash.com/photo-1550881111-7cfde14b8073?q=80&w=2070',
    category: 'Análise de Mercado',
    content: `# As Revelações do Brasileirão 2023

Conheça os jovens que estão impactando as estatísticas e mudando os palpites esportivos nesta temporada.

## Destaques da Temporada

1. Perfis técnicos
2. Estatísticas impressionantes
3. Potencial de mercado
4. Projeção de carreira`
  },
  {
    id: 'tecnologia-futebol',
    title: 'Estatísticas de Futebol: Como a Tecnologia Revoluciona as Apostas',
    excerpt: 'Descubra como usar dados e tecnologia para criar palpites mais precisos e melhorar suas apostas esportivas.',
    date: '2023-11-20',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2070',
    category: 'Inovação',
    content: `# A Revolução Tecnológica nas Apostas

A tecnologia está transformando a forma como analisamos estatísticas de futebol para apostas. 

## Inovações Principais

1. GPS e tracking
2. Análise de dados
3. VAR e tecnologia
4. Inteligência artificial`
  },
  {
    id: 'libertadores-analise',
    title: 'Palpites Libertadores: O Domínio Brasileiro na América',
    excerpt: 'Análise completa com estatísticas e dicas bet para os jogos da Libertadores envolvendo times brasileiros.',
    date: '2023-11-19',
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2070',
    category: 'Análise de Campanha',
    content: `# Palpites para Libertadores

Os clubes brasileiros dominam a competição. Use nossas dicas bets hoje para apostas mais precisas.

## Fatores do Sucesso

1. Poder econômico
2. Qualidade técnica
3. Estrutura dos clubes
4. Experiência internacional`
  }
];

export function getAllPosts(): Post[] {
  return POSTS;
}

export function getPostById(id: string): Post {
  const post = POSTS.find(p => p.id === id);
  if (!post) throw new Error('Post not found');
  return post;
}

export function searchPosts(query: string): Post[] {
  const normalizedQuery = normalizeString(query);
  return POSTS.filter(post => 
    normalizeString(post.title).includes(normalizedQuery) ||
    normalizeString(post.excerpt).includes(normalizedQuery) ||
    normalizeString(post.content).includes(normalizedQuery)
  );
}

export function getTeamById(id: string) {
  return TEAMS.find(team => team.id === id);
}