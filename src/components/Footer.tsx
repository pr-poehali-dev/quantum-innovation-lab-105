export function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t">
      <div className="max-w-6xl mx-auto">
        {/* Navigation links */}
        <nav className="flex flex-wrap gap-6 mb-12">
          <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
            Кейсы
          </a>
          <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
            Тарифы
          </a>
          <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
            Блог
          </a>
          <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
            Создано на DialogAI
          </a>
          <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
            О нас
          </a>
          <a href="#" className="text-sm hover:text-muted-foreground transition-colors">
            Поддержка
          </a>
        </nav>

        {/* Copyright and legal */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <p className="text-sm text-muted-foreground">2025 DialogAI. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Условия использования
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>

        {/* Large logo */}
        <div className="overflow-hidden text-center">
          <h2 className="text-[8rem] md:text-[12rem] lg:text-[16rem] tracking-tight leading-none lowercase font-serif font-light text-accent">
            DialogAI
          </h2>
        </div>
      </div>
    </footer>
  );
}
