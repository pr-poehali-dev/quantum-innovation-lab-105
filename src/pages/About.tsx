import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Icon from "@/components/ui/icon";

const HISTORY = [
  {
    title: "Легенда о Шэнь Нуне",
    year: "2737 до н.э.",
    image: "https://cdn.poehali.dev/projects/4ebe760b-113c-482a-8041-e5ae4a54d8b6/files/3a24eee9-1f22-4bab-8e7b-b4fbc7910a1b.jpg",
    text: "Китайский император-земледелец Шэнь Нун отдыхал в тени дерева, когда порыв ветра уронил несколько листьев в его котёл с кипящей водой. Напиток оказался ароматным и бодрящим. Так, по преданию, 4700 лет назад был открыт чай. Шэнь Нун записал его свойства в трактате о лекарственных травах — первом документальном упоминании чая в истории.",
  },
  {
    title: "Чайные клиперы",
    year: "XIX век",
    image: "https://cdn.poehali.dev/projects/4ebe760b-113c-482a-8041-e5ae4a54d8b6/files/49fe0d87-e024-4288-a302-5d32e550b7e1.jpg",
    text: "В середине XIX века свежий чай стоил баснословных денег — ценился именно первый урожай сезона. Ради скорости строились клиперы — самые быстрые парусники своей эпохи. Гонки из Китая в Лондон превратились в легенду: суда преодолевали 25 000 км за 90–100 дней. Победитель получал премию и право продавать чай по наивысшей цене.",
  },
  {
    title: "Русский самовар",
    year: "XVIII–XIX вв.",
    image: "https://cdn.poehali.dev/projects/4ebe760b-113c-482a-8041-e5ae4a54d8b6/files/dac976f7-114d-4db3-ac4a-b4a53eb4254c.jpg",
    text: "В Россию чай попал через Сибирь в XVII веке как дипломатический подарок из Китая. К XVIII веку тульские мастера создали самовар — символ русского чаепития. Заварку делали крепкой, разбавляя кипятком из самовара. Традиция пить чай «вприкуску» с сахаром, баранками и вареньем стала частью национальной культуры.",
  },
];

const REGIONS = [
  {
    name: "Китай",
    flag: "🇨🇳",
    method: "Ручной сбор",
    icon: "Hand",
    desc: "Лист срывают вручную — «золотой стандарт» для элитных сортов. Опытный сборщик набирает 1–2 кг за день. Именно ручной сбор позволяет отбирать только молодые почки и верхние два листа, что даёт деликатный вкус.",
    color: "bg-red-50 border-red-200",
    iconColor: "text-red-600",
  },
  {
    name: "Индия",
    flag: "🇮🇳",
    method: "Машинный сбор",
    icon: "Settings",
    desc: "Огромные плантации Ассама обрабатываются машинами. Это позволяет собирать сотни тонн в день при минимальных затратах. Машинный сбор даёт крупный лист, идеальный для крепкого чёрного чая с молоком.",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600",
  },
  {
    name: "Шри-Ланка",
    flag: "🇱🇰",
    method: "Высокогорный сбор",
    icon: "Mountain",
    desc: "Плантации Нувара-Элия расположены на высоте 1800–2500 м над уровнем моря. Туманы и прохладный воздух замедляют рост куста — лист накапливает больше ароматических веществ. Цейлонский чай отличается цитрусовой свежестью.",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
  },
  {
    name: "Япония",
    flag: "🇯🇵",
    method: "Затенение (тэнча)",
    icon: "Sun",
    desc: "За 3–4 недели до сбора кусты укрывают сетками от солнца. В темноте лист вырабатывает больше хлорофилла и L-теанина — аминокислоты, дающей умами и спокойную концентрацию. Из тэнча делают маттэ.",
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
  },
];

const TEAS = [
  {
    name: "Ассам",
    type: "Чёрный",
    fermentation: "Полная",
    country: "Индия 🇮🇳",
    harvest: "Машинный",
    taste: "Солодовый, терпкий, с нотками тёмного мёда",
    feature: "Идеален с молоком и сахаром. Второй по популярности в мире после китайских чаёв.",
    color: "bg-amber-800",
    badge: "bg-amber-100 text-amber-800",
  },
  {
    name: "Жасминовый жемчуг",
    type: "Зелёный",
    fermentation: "Без ферментации",
    country: "Китай 🇨🇳",
    harvest: "Ручной",
    taste: "Цветочный, нежный, со сладким послевкусием",
    feature: "Листья скручивают в шарики вручную и многократно ароматизируют живыми цветами жасмина.",
    color: "bg-green-600",
    badge: "bg-green-100 text-green-800",
  },
  {
    name: "Молочный улун",
    type: "Улун",
    fermentation: "Частичная (20–30%)",
    country: "Тайвань 🇹🇼",
    harvest: "Ручной",
    taste: "Сливочный, ванильный, с молочной мягкостью",
    feature: "Особый сорт куста Jin Xuan. При правильной обработке лист сам даёт молочный аромат без добавок.",
    color: "bg-teal-600",
    badge: "bg-teal-100 text-teal-800",
  },
  {
    name: "Пуэр Шу",
    type: "Пуэр",
    fermentation: "Постферментация",
    country: "Китай 🇨🇳",
    harvest: "Ручной",
    taste: "Земляной, глубокий, с древесными нотками",
    feature: "Проходит «влажное созревание» под контролем микроорганизмов. Чем старше — тем ценнее.",
    color: "bg-stone-700",
    badge: "bg-stone-100 text-stone-800",
  },
  {
    name: "Бай Му Дань",
    type: "Белый",
    fermentation: "Минимальная",
    country: "Китай 🇨🇳",
    harvest: "Ручной",
    taste: "Деликатный, медовый, с цветочной свежестью",
    feature: "Собирают только почку и два молодых листа. Сушат на воздухе без скручивания — максимум нежности.",
    color: "bg-gray-400",
    badge: "bg-gray-100 text-gray-700",
  },
  {
    name: "Вечерний сбор",
    type: "Травяной",
    fermentation: "Без ферментации",
    country: "Россия 🇷🇺",
    harvest: "Ручной",
    taste: "Травяной, с нотками мяты, липы и ромашки",
    feature: "Авторский купаж из трав вечернего разнотравья. Успокаивает и готовит ко сну.",
    color: "bg-indigo-500",
    badge: "bg-indigo-100 text-indigo-800",
  },
  {
    name: "Фруктовый микс",
    type: "Фруктовый",
    fermentation: "Без ферментации",
    country: "Германия 🇩🇪",
    harvest: "Купажирование",
    taste: "Ягодный, сочный, с кислинкой гибискуса",
    feature: "Смесь сушёных фруктов, ягод и цветков. Заваривается без чайного листа, богат витамином C.",
    color: "bg-pink-500",
    badge: "bg-pink-100 text-pink-800",
  },
  {
    name: "Цейлонский OP",
    type: "Чёрный",
    fermentation: "Полная",
    country: "Шри-Ланка 🇱🇰",
    harvest: "Высокогорный",
    taste: "Яркий, цитрусовый, с золотистым настоем",
    feature: "Orange Pekoe — крупный скрученный лист первого сбора. Идеален без молока.",
    color: "bg-orange-700",
    badge: "bg-orange-100 text-orange-800",
  },
  {
    name: "Масала",
    type: "Чёрный с пряностями",
    fermentation: "Полная",
    country: "Индия 🇮🇳",
    harvest: "Машинный",
    taste: "Пряный, согревающий, с имбирём и кардамоном",
    feature: "Традиционный индийский чай «чай-масала». Готовится с молоком, имбирём, гвоздикой и корицей.",
    color: "bg-yellow-700",
    badge: "bg-yellow-100 text-yellow-800",
  },
];

const FERMENTATION_LABELS: Record<string, string> = {
  "Без ферментации": "bg-green-100 text-green-700",
  "Минимальная": "bg-lime-100 text-lime-700",
  "Частичная (20–30%)": "bg-teal-100 text-teal-700",
  "Полная": "bg-red-100 text-red-700",
  "Постферментация": "bg-stone-200 text-stone-700",
};

export default function About() {
  const [activeHistory, setActiveHistory] = useState(0);
  const [filter, setFilter] = useState("Все");

  const types = ["Все", "Чёрный", "Зелёный", "Улун", "Белый", "Пуэр", "Травяной", "Фруктовый"];
  const filtered = filter === "Все" ? TEAS : TEAS.filter((t) => t.type.startsWith(filter));

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-[#f5ede0]/60 to-background">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Энциклопедия чая</p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">История и культура чая</h1>
          <p className="text-muted-foreground leading-relaxed">
            От древних легенд Китая до самовара на русском столе — путешествие сквозь 5000 лет чайной культуры.
          </p>
        </div>
      </section>

      {/* История */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-medium text-center mb-10">История</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
            {HISTORY.map((h, i) => (
              <button
                key={i}
                onClick={() => setActiveHistory(i)}
                className={`flex-1 text-left p-4 rounded-xl border transition-all ${activeHistory === i ? "border-primary bg-primary/5" : "border-border hover:bg-muted/40"}`}
              >
                <p className="text-xs text-muted-foreground mb-0.5">{h.year}</p>
                <p className="font-medium text-sm">{h.title}</p>
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center bg-card border border-border rounded-2xl overflow-hidden">
            <img
              src={HISTORY[activeHistory].image}
              alt={HISTORY[activeHistory].title}
              className="w-full h-64 md:h-full object-cover"
            />
            <div className="p-8">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{HISTORY[activeHistory].year}</p>
              <h3 className="font-serif text-2xl font-medium mb-4">{HISTORY[activeHistory].title}</h3>
              <p className="text-muted-foreground leading-relaxed">{HISTORY[activeHistory].text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Регионы сбора */}
      <section className="py-16 px-6 bg-[#f5ede0]/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-medium text-center mb-3">Регионы сбора</h2>
          <p className="text-center text-muted-foreground mb-10 text-sm">Как и где собирают чай — от горных плантаций до промышленных полей</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REGIONS.map((r, i) => (
              <div key={i} className={`border rounded-2xl p-5 ${r.color}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{r.flag}</span>
                  <div>
                    <p className="font-semibold text-sm">{r.name}</p>
                    <p className={`text-xs font-medium flex items-center gap-1 ${r.iconColor}`}>
                      <Icon name={r.icon as "Hand"} size={11} />
                      {r.method}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Сорта */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl font-medium text-center mb-3">Сравнение сортов</h2>
          <p className="text-center text-muted-foreground mb-8 text-sm">Ферментация, происхождение, вкус и особенности каждого сорта</p>

          {/* Фильтр */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${filter === t ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted/40 text-muted-foreground"}`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((tea, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                <div className={`${tea.color} h-2 w-full`} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-serif text-lg font-medium">{tea.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tea.badge}`}>{tea.type}</span>
                    </div>
                    <span className="text-xl flex-shrink-0">{tea.country.slice(-2)}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="MapPin" size={12} />
                      <span>{tea.country}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="Zap" size={12} />
                      <span>Ферментация: </span>
                      <span className={`px-1.5 py-0.5 rounded text-[11px] font-medium ${FERMENTATION_LABELS[tea.fermentation] ?? "bg-gray-100 text-gray-700"}`}>
                        {tea.fermentation}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="Hand" size={12} />
                      <span>Сбор: {tea.harvest}</span>
                    </div>
                  </div>

                  <div className="bg-muted/40 rounded-xl p-3 mb-3">
                    <p className="text-xs text-muted-foreground mb-0.5">Вкус</p>
                    <p className="text-sm">{tea.taste}</p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">{tea.feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
