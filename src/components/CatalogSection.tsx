import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";

const products = [
  { id: 1, name: "Ассам", type: "Чёрный чай", desc: "Терпкий, бодрящий", price: 450, badge: null },
  { id: 2, name: "Жасминовый жемчуг", type: "Зелёный чай", desc: "Нежный аромат", price: 550, badge: null },
  { id: 3, name: "Молочный улун", type: "Улун", desc: "Сливочный вкус", price: 670, badge: "Хит", discount: 15 },
  { id: 4, name: "Пуэр Шу", type: "Пуэр", desc: "Земляной, глубокий", price: 890, badge: "Хит", discount: 15 },
  { id: 5, name: "Бай Му Дань", type: "Белый чай", desc: "Медовый вкус", price: 990, badge: null },
  { id: 6, name: "Вечерний сбор", type: "Травяной", desc: "Мята, ромашка, чабрец", price: 390, badge: null },
  { id: 7, name: "Фруктовый микс", type: "Фруктовый чай", desc: "Малина, шиповник, яблоко", price: 420, badge: "Новинка" },
  { id: 8, name: "Цейлонский OPA", type: "Чёрный чай", desc: "Классика, яркий настой", price: 380, badge: null },
  { id: 9, name: "Масала", type: "Пряный чай", desc: "Имбирь, кардамон, корица", price: 490, badge: null },
];

const typeColors: Record<string, string> = {
  "Чёрный чай": "bg-amber-900/10 text-amber-900",
  "Зелёный чай": "bg-green-700/10 text-green-700",
  "Улун": "bg-teal-700/10 text-teal-700",
  "Пуэр": "bg-stone-700/10 text-stone-700",
  "Белый чай": "bg-yellow-600/10 text-yellow-700",
  "Травяной": "bg-lime-700/10 text-lime-700",
  "Фруктовый чай": "bg-rose-600/10 text-rose-600",
  "Пряный чай": "bg-orange-700/10 text-orange-700",
};

const typeIcons: Record<string, string> = {
  "Чёрный чай": "Coffee",
  "Зелёный чай": "Leaf",
  "Улун": "Wind",
  "Пуэр": "Mountain",
  "Белый чай": "Sparkles",
  "Травяной": "Flower2",
  "Фруктовый чай": "Apple",
  "Пряный чай": "Flame",
};

export function CatalogSection() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const { addItem, items } = useCart();

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);
  };

  return (
    <section id="catalog" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm border rounded-full mb-6 text-muted-foreground">Каталог</span>
          <h2 className="font-serif text-4xl md:text-5xl italic">Выберите свой чай</h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            50 граммов — идеально, чтобы попробовать и влюбиться
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => {
            const discountedPrice = p.discount ? Math.round(p.price * (1 - p.discount / 100)) : null;
            const inCart = items.some((i) => i.id === p.id);
            const isFav = favorites.includes(p.id);
            const icon = typeIcons[p.type] || "Leaf";
            const colorClass = typeColors[p.type] || "bg-green-700/10 text-green-700";

            return (
              <div
                key={p.id}
                className="relative bg-card border border-border rounded-2xl p-5 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                {p.badge && (
                  <span className={`absolute top-4 left-4 text-xs font-medium px-2.5 py-1 rounded-full ${p.badge === "Хит" ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"}`}>
                    {p.badge === "Хит" ? `🔥 ${p.badge}` : `✨ ${p.badge}`}
                  </span>
                )}

                <button
                  onClick={() => toggleFavorite(p.id)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-rose-500 transition-colors"
                >
                  <Icon name={isFav ? "Heart" : "Heart"} size={18} className={isFav ? "fill-rose-500 text-rose-500" : ""} />
                </button>

                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mt-4 ${colorClass.split(" ")[0]} bg-opacity-20`}>
                  <Icon name={icon} size={32} className={colorClass.split(" ")[1]} />
                </div>

                <div className="text-center">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${colorClass}`}>{p.type}</span>
                  <h3 className="font-serif text-lg mt-2 font-medium">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
                  <div>
                    {discountedPrice ? (
                      <>
                        <span className="font-semibold text-primary text-lg">{discountedPrice} ₽</span>
                        <span className="text-muted-foreground line-through text-sm ml-2">{p.price} ₽</span>
                      </>
                    ) : (
                      <span className="font-semibold text-lg">{p.price} ₽</span>
                    )}
                    <span className="text-xs text-muted-foreground block">за 50 г</span>
                  </div>
                  <Button
                    size="sm"
                    className={`rounded-full text-xs ${inCart ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
                    onClick={() => addItem({ id: p.id, name: p.name, type: p.type, price: p.price, ...(discountedPrice ? { discountedPrice } : {}) })}
                  >
                    {inCart ? "Добавлено" : "В корзину"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}