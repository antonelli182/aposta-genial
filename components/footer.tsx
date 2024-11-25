import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Aposta Genial</h3>
            <p className="text-sm text-muted-foreground">
              Transforme dados em chances. 
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre" className="hover:text-primary">Sobre Nós</Link></li>
              <li><Link href="/privacidade" className="hover:text-primary">Política de Privacidade</Link></li>
              <li><Link href="/contato" className="hover:text-primary">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Competições</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/competicoes" className="hover:text-primary">Brasileirão</Link></li>
              <li><Link href="/competicoes" className="hover:text-primary">Copa do Brasil</Link></li>
              <li><Link href="/competicoes" className="hover:text-primary">Libertadores</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-4 pt-4 text-center text-sm text-muted-foreground/60">
          <p>
            Made with passion for sports ❤️⚽️ Powered by{" "}
            <Link 
              href="https://machina.gg/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Machina Sports
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}