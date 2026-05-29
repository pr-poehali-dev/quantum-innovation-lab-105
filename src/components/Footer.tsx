import Icon from "@/components/ui/icon";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <nav className="flex flex-wrap gap-6 mb-10">
          <a href="#catalog" className="text-sm hover:text-muted-foreground transition-colors">Каталог</a>
          <a href="#delivery" className="text-sm hover:text-muted-foreground transition-colors">Доставка</a>
          <a href="#contacts" className="text-sm hover:text-muted-foreground transition-colors">Контакты</a>
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <p className="text-sm text-muted-foreground">© 2025 Чайная традиция. Все права защищены.</p>
          <div className="flex gap-4 items-center">
            <a
              href="https://vk.com/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="VK"
            >
              <Icon name="Users" size={16} />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Telegram"
            >
              <Icon name="Send" size={16} />
            </a>
          </div>
        </div>

        <div className="overflow-hidden text-center">
          <h2 className="text-[5rem] md:text-[8rem] lg:text-[10rem] tracking-tight leading-none font-serif font-light text-muted/60 italic select-none">
            Чайная
          </h2>
        </div>
      </div>
    </footer>
  );
}
