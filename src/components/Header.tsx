import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between max-w-7xl mx-auto">
      <a href="/" className="font-serif text-xl italic">
        DialogAI
      </a>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Кейсы
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Тарифы
        </a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Поддержка
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm">
          Войти
        </Button>
        <Button size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
          Регистрация
        </Button>
      </div>
    </header>
  );
}
