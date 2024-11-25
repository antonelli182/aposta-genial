import { Card } from "@/components/ui/card";
import { Trophy, Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Sobre a Aposta Genial</h1>
        
        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-muted-foreground">
            Transforme dados em chances. O jogo está na sua mão.
          </p>
          
          <p>
            A Aposta Genial nasceu da paixão pelo esporte e da busca pela excelência
            em análises esportivas. Nossa missão é fornecer conteúdo de qualidade
            e análises aprofundadas para ajudar nossos leitores a tomarem decisões
            mais inteligentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <Trophy className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Experiência</h3>
            <p className="text-muted-foreground">
              Anos de análise e cobertura dos principais campeonatos do Brasil e do mundo.
            </p>
          </Card>

          <Card className="p-6">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Precisão</h3>
            <p className="text-muted-foreground">
              Análises baseadas em dados estatísticos e observação técnica detalhada.
            </p>
          </Card>

          <Card className="p-6">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Comunidade</h3>
            <p className="text-muted-foreground">
              Uma comunidade engajada de apaixonados por esporte e análises táticas.
            </p>
          </Card>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Nossa Filosofia</h2>
          <p>
            Acreditamos que o sucesso nas apostas esportivas não é fruto do acaso,
            mas sim de análise criteriosa, conhecimento profundo e decisões bem
            fundamentadas. Nossa equipe trabalha incansavelmente para trazer:
          </p>
          
          <ul>
            <li>Análises táticas aprofundadas</li>
            <li>Estatísticas detalhadas e relevantes</li>
            <li>Cobertura completa dos principais campeonatos</li>
            <li>Dicas e estratégias para apostas mais inteligentes</li>
          </ul>

          <h2>Compromisso com a Qualidade</h2>
          <p>
            Cada análise publicada passa por um rigoroso processo de verificação,
            garantindo que nossos leitores tenham acesso apenas a informações
            precisas e relevantes. Nosso compromisso é com a excelência e a
            transparência em tudo o que fazemos.
          </p>
        </div>
      </div>
    </div>
  );
}