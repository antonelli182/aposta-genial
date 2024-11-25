import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Proteção de Dados</h3>
            <p className="text-muted-foreground">
              Seus dados são protegidos e tratados com o máximo de segurança.
            </p>
          </Card>

          <Card className="p-6">
            <Lock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Segurança</h3>
            <p className="text-muted-foreground">
              Utilizamos criptografia avançada para proteger suas informações.
            </p>
          </Card>

          <Card className="p-6">
            <Eye className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Transparência</h3>
            <p className="text-muted-foreground">
              Você tem total controle sobre seus dados pessoais.
            </p>
          </Card>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>1. Informações Coletadas</h2>
          <p>
            A Aposta Genial coleta e utiliza alguns dados pessoais de nossos usuários.
            A coleta destes dados ocorre nos seguintes momentos:
          </p>
          <ul>
            <li>Quando você se cadastra em nossa plataforma</li>
            <li>Quando você utiliza nossos serviços</li>
            <li>Quando você nos contata através de nossos canais de atendimento</li>
          </ul>

          <h2>2. Como Utilizamos seus Dados</h2>
          <p>
            Os dados pessoais coletados são utilizados para as seguintes finalidades:
          </p>
          <ul>
            <li>Fornecer nossos serviços</li>
            <li>Melhorar sua experiência de usuário</li>
            <li>Enviar atualizações e notificações relevantes</li>
            <li>Prevenir fraudes e garantir a segurança</li>
          </ul>

          <h2>3. Compartilhamento de Dados</h2>
          <p>
            A Aposta Genial não compartilha seus dados pessoais com terceiros,
            exceto quando:
          </p>
          <ul>
            <li>Exigido por lei</li>
            <li>Necessário para proteger nossos direitos</li>
            <li>Você autorizar expressamente</li>
          </ul>

          <h2>4. Seus Direitos</h2>
          <p>
            Você tem os seguintes direitos em relação aos seus dados pessoais:
          </p>
          <ul>
            <li>Acesso aos dados</li>
            <li>Correção de dados incompletos ou inexatos</li>
            <li>Exclusão dos dados</li>
            <li>Portabilidade dos dados</li>
            <li>Revogação do consentimento</li>
          </ul>

          <h2>5. Segurança dos Dados</h2>
          <p>
            Implementamos medidas técnicas e organizacionais apropriadas para
            proteger seus dados pessoais contra acesso não autorizado, alteração,
            divulgação ou destruição não autorizada.
          </p>

          <h2>6. Contato</h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre esta política
            de privacidade, entre em contato conosco através do email:
            privacidade@apostagenial.com
          </p>

          <h2>7. Atualizações da Política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos que
            você revise esta página regularmente para se manter informado sobre
            quaisquer alterações.
          </p>

          <div className="mt-8 p-4 bg-muted rounded-lg">
            <p className="text-sm">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}