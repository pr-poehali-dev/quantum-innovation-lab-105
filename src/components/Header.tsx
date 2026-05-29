import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";

export function Header() {
  const { count, setIsOpen } = useCart();

  return (
    <header className="w-full py-4 px-6 flex items-center justify-between max-w-7xl mx-auto sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <a href="/" className="font-serif text-xl italic text-foreground tracking-wide">
        Чайная традиция
      </a>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#catalog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Каталог
        </a>
        <a href="#delivery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Доставка
        </a>
        <a href="#contacts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Контакты
        </a>
      </nav>
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" className="relative gap-2" onClick={() => setIsOpen(true)}>
          <Icon name="ShoppingCart" size={18} />
          <span className="hidden sm:inline text-sm">Корзина</span>
          {count > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full text-[10px] font-semibold flex items-center justify-center">
              {count}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}