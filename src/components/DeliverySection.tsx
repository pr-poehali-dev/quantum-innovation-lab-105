import Icon from "@/components/ui/icon";

export function DeliverySection() {
  return (
    <section id="delivery" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 text-sm border rounded-full mb-6 text-muted-foreground">Доставка и оплата</span>
          <h2 className="font-serif text-4xl md:text-5xl italic">Привезём куда угодно</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <h3 className="font-medium text-base flex items-center gap-2">
              <Icon name="Truck" size={18} className="text-primary" />
              Способы доставки
            </h3>
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Курьером по городу</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Бесплатно при заказе от 2500 ₽</p>
                </div>
                <span className="text-sm font-medium text-primary whitespace-nowrap">200 ₽</span>
              </div>
              <div className="border-t border-border" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Почта России</p>
                  <p className="text-xs text-muted-foreground mt-0.5">По всей России, 3–10 дней</p>
                </div>
                <span className="text-sm font-medium text-primary whitespace-nowrap">от 350 ₽</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
            <h3 className="font-medium text-base flex items-center gap-2">
              <Icon name="CreditCard" size={18} className="text-primary" />
              Способы оплаты
            </h3>
            <div className="space-y-3">
              {[
                { icon: "CreditCard", label: "Картой онлайн", desc: "Visa, MasterCard, МИР" },
                { icon: "Package", label: "При получении", desc: "Наличными или картой" },
                { icon: "Smartphone", label: "СБП", desc: "Быстро через приложение банка" },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={m.icon} size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{m.label}</p>
                    <p className="text-xs text-muted-foreground">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-green-50 border border-amber-200/60 rounded-2xl p-6 text-center">
          <p className="text-sm font-medium text-amber-800">
            🎁 Бесплатная доставка курьером при заказе от 2500 ₽ + подарок при заказе от 2000 ₽
          </p>
        </div>
      </div>
    </section>
  );
}
