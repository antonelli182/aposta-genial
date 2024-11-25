import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contato</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <Mail className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground">
              contato@apostagenial.com
            </p>
          </Card>

          <Card className="p-6">
            <Phone className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Telefone</h3>
            <p className="text-muted-foreground">
              +55 (11) 9999-9999
            </p>
          </Card>

          <Card className="p-6">
            <MapPin className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Endereço</h3>
            <p className="text-muted-foreground">
              São Paulo, SP - Brasil
            </p>
          </Card>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Envie sua mensagem</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome
                </label>
                <Input id="name" placeholder="Seu nome completo" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Assunto
              </label>
              <Input id="subject" placeholder="Assunto da mensagem" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Mensagem
              </label>
              <Textarea
                id="message"
                placeholder="Digite sua mensagem..."
                rows={6}
              />
            </div>

            <Button type="submit" className="w-full md:w-auto">
              Enviar mensagem
            </Button>
          </form>
        </Card>

        <div className="mt-12 prose dark:prose-invert max-w-none">
          <h2>Horário de Atendimento</h2>
          <p>
            Nossa equipe está disponível para atendimento de segunda a sexta-feira,
            das 9h às 18h. Mensagens enviadas fora deste horário serão respondidas
            no próximo dia útil.
          </p>

          <h2>Parcerias e Mídia</h2>
          <p>
            Para assuntos relacionados a parcerias comerciais ou contatos com a
            imprensa, por favor envie um email para parcerias@apostagenial.com
          </p>
        </div>
      </div>
    </div>
  );
}