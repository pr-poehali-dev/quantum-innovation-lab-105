import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: 1, name: "Ассам", type: "Чёрный чай", desc: "Терпкий, бодрящий", price: 450, badge: null,
    details: "Классика индийского чаеводства с плантаций штата Ассам. Даёт насыщенный тёмно-янтарный настой с солодовыми нотками. Идеален с молоком по-английски.",
    brew: "95°С · 3–4 мин",
    origin: "Индия, Ассам",
    image: "https://cdn.poehali.dev/projects/4ebe760b-113c-482a-8041-e5ae4a54d8b6/bucket/6ca0a88b-4aaa-4bd2-8638-9fba5891f9a5.jpg",
  },
  {
    id: 2, name: "Жасминовый жемчуг", type: "Зелёный чай", desc: "Нежный аромат", price: 550, badge: null,
    details: "Зелёный чай, вручную скрученный в шарики и ароматизированный свежими цветами жасмина. При заварке шарики медленно раскрываются — настоящее зрелище.",
    brew: "80°С · 2–3 мин",
    origin: "Китай, Фуцзянь",
    image: "https://cdn.poehali.dev/projects/4ebe760b-113c-482a-8041-e5ae4a54d8b6/bucket/c256892b-e1cc-4cf0-bde0-34f3343fa9f6.jpg",
  },
  {
    id: 3, name: "Молочный улун", type: "Улун", desc: "Сливочный вкус", price: 670, badge: "Хит", discount: 15,
    details: "Полуферментированный чай с природным молочным послевкусием. Листья собирают в период туманов, что придаёт им особую кремовую сладость без каких-либо добавок.",
    brew: "85°С · 3–5 мин",
    origin: "Тайвань",
    image: "https://cdn.poehali.dev/projects/4ebe760b-113c-482a-8041-e5ae4a54d8b6/bucket/94e129df-ef58-4a6a-952f-bb77dbdb47cf.jpg",
  },
  {
    id: 4, name: "Пуэр Шу", type: "Пуэр", desc: "Земляной, глубокий", price: 890, badge: "Хит", discount: 15,
    details: "Прессованный пуэр с многолетней выдержкой. Глубокий земляной вкус с нотками чернослива и древесины. Отлично бодрит и помогает пищеварению.",
    brew: "95°С · 3–5 мин",
    origin: "Китай, Юньнань",
    image: "https://cdn.poehali.dev/projects/4ebe760b-113c-482a-8041-e5ae4a54d8b6/bucket/77625e14-50d3-4d40-8dad-ac0e69a563d6.jpg",
  },
  {
    id: 5, name: "Бай Му Дань", type: "Белый чай", desc: "Медовый вкус", price: 990, badge: null,
    details: "Один из самых деликатных белых чаёв — молодые почки и первые листья, высушенные на солнце без обработки. Светлый настой с цветочным и медовым ароматом.",
    brew: "75°С · 4–5 мин",
    origin: "Китай, Фуцзянь",
    image: "https://cdn.poehali.dev/projects/4ebe760b-113c-482a-8041-e5ae4a54d8b6/bucket/f03d235d-398a-46ba-afa7-a2ee55815a95.jpg",
  },
  {
    id: 6, name: "Вечерний сбор", type: "Травяной", desc: "Мята, ромашка, чабрец", price: 390, badge: null,
    details: "Авторский травяной сбор для вечернего отдыха. Мята успокаивает, ромашка снимает напряжение, чабрец согревает. Без кофеина — идеально перед сном.",
    brew: "90°С · 5–7 мин",
    origin: "Россия, Алтай",
    image: "https://cdn.poehali.dev/projects/4ebe760b-113c-482a-8041-e5ae4a54d8b6/bucket/e200f7b7-526b-4964-a619-58d9757870c0.jpg",
  },
  {
    id: 7, name: "Фруктовый микс", type: "Фруктовый чай", desc: "Малина, шиповник, яблоко", price: 420, badge: "Новинка",
    details: "Яркий фруктовый купаж из сушёной малины, шиповника и яблочных ломтиков. Насыщенный рубиновый цвет, кисло-сладкий вкус. Хорош горячим и холодным.",
    brew: "90°С · 5–7 мин",
    origin: "Россия",
    image: "https://cdn.poehali.dev/projects/4ebe760b-113c-482a-8041-e5ae4a54d8b6/bucket/4132d2b9-301b-48fa-97fb-3e2fc8b3d45c.jpg",
  },
  {
    id: 8, name: "Цейлонский OPA", type: "Чёрный чай", desc: "Классика, яркий настой", price: 380, badge: null,
    details: "Крупнолистовой цейлонский чай категории OPA с высокогорных плантаций. Яркий медово-золотистый настой с лёгкой цитрусовой кислинкой и чистым послевкусием.",
    brew: "95°С · 3–4 мин",
    origin: "Шри-Ланка, Нувара-Элия",
    image: "https://cdn.poehali.dev/projects/4ebe760b-113c-482a-8041-e5ae4a54d8b6/bucket/8b6b7e07-47aa-4cfc-8e67-17eea05a814c.jpg",
  },
  {
    id: 9, name: "Масала", type: "Пряный чай", desc: "Имбирь, кардамон, корица", price: 490, badge: null,
    details: "Индийский пряный чай на основе чёрного Ассама с имбирём, кардамоном, корицей и гвоздикой. Согревает, тонизирует, наполняет домашним уютом.",
    brew: "95°С · 4–5 мин",
    origin: "Индия",
    image: "https://cdn.poehali.dev/projects/4ebe760b-113c-482a-8041-e5ae4a54d8b6/bucket/d8782f51-4f0b-48a4-9f0d-8cb7b269038e.jpg",
  },
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

                {p.image ? (
                  <div className="w-full h-44 rounded-xl overflow-hidden mt-1">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mt-4 ${colorClass.split(" ")[0]} bg-opacity-20`}>
                    <Icon name={icon} size={32} className={colorClass.split(" ")[1]} />
                  </div>
                )}

                <div className="text-center">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${colorClass}`}>{p.type}</span>
                  <h3 className="font-serif text-xl mt-2 font-medium">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">{p.desc}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed text-center">{p.details}</p>

                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Icon name="Thermometer" size={12} />
                    {p.brew}
                  </span>
                  <span className="w-px h-3 bg-border" />
                  <span className="flex items-center gap-1">
                    <Icon name="MapPin" size={12} />
                    {p.origin}
                  </span>
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