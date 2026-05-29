import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Sprout",
    title: "Свежий сбор с плантаций",
    desc: "Работаем напрямую с фермерами в Китае, Индии и на Цейлоне. Чай поступает к нам сразу после сбора.",
  },
  {
    icon: "Hand",
    title: "Ручная скрутка листа",
    desc: "Традиционная обработка сохраняет природный аромат и все полезные свойства листа.",
  },
  {
    icon: "Gift",
    title: "Подарок от 2000 ₽",
    desc: "При заказе от 2000 рублей мы добавим чайный подарок на выбор — образцы редких сортов.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 px-6 bg-[#f5ede0]/40">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="text-center flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name={b.icon} size={26} className="text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
