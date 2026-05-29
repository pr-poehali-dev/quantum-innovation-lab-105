import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export function CartDrawer() {
  const { items, removeItem, updateQty, clearCart, total, count, isOpen, setIsOpen } = useCart();
  const [step, setStep] = useState<"cart" | "form" | "done">("cart");
  const [delivery, setDelivery] = useState<"courier" | "post">("courier");
  const [form, setForm] = useState({ name: "", phone: "", address: "", comment: "" });

  const deliveryCost = delivery === "courier" ? (total >= 2500 ? 0 : 200) : 350;
  const grandTotal = total + deliveryCost;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("done");
    clearCart();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={20} className="text-primary" />
            <span className="font-medium">
              {step === "cart" && `Корзина${count > 0 ? ` (${count})` : ""}`}
              {step === "form" && "Оформление заказа"}
              {step === "done" && "Заказ принят"}
            </span>
          </div>
          <button onClick={() => { setIsOpen(false); setStep("cart"); }} className="text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="X" size={20} />
          </button>
        </div>

        {step === "cart" && (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-3 text-muted-foreground">
                  <Icon name="ShoppingCart" size={48} className="opacity-20" />
                  <p className="text-sm">Корзина пуста</p>
                  <p className="text-xs">Добавьте чай из каталога</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-3 bg-muted/40 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Leaf" size={18} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.type} · 50 г</p>
                        <p className="text-sm font-semibold text-primary mt-0.5">
                          {(item.discountedPrice ?? item.price) * item.quantity} ₽
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors text-sm"
                        >
                          −
                        </button>
                        <span className="w-5 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors text-sm"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors ml-1"
                      >
                        <Icon name="Trash2" size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="px-6 py-4 border-t border-border space-y-3">
                <p className="text-sm font-medium">Способ доставки</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setDelivery("courier")}
                    className={`flex flex-col items-start gap-1 p-3 rounded-xl border text-left transition-colors ${delivery === "courier" ? "border-primary bg-primary/5" : "border-border hover:bg-muted/40"}`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Icon name="Truck" size={14} className={delivery === "courier" ? "text-primary" : "text-muted-foreground"} />
                      <span className="text-sm font-medium">Курьер</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {total >= 2500 ? "Бесплатно 🎉" : "200 ₽"}
                    </span>
                  </button>
                  <button
                    onClick={() => setDelivery("post")}
                    className={`flex flex-col items-start gap-1 p-3 rounded-xl border text-left transition-colors ${delivery === "post" ? "border-primary bg-primary/5" : "border-border hover:bg-muted/40"}`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Icon name="MailOpen" size={14} className={delivery === "post" ? "text-primary" : "text-muted-foreground"} />
                      <span className="text-sm font-medium">Почта</span>
                    </div>
                    <span className="text-xs text-muted-foreground">от 350 ₽</span>
                  </button>
                </div>

                {total >= 2000 && (
                  <p className="text-xs text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                    🎁 Мы добавим образцы других сортов чая в подарок!
                  </p>
                )}
                {total >= 2500 && delivery === "courier" && (
                  <p className="text-xs text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                    🚚 Доставка курьером бесплатно!
                  </p>
                )}

                <div className="flex justify-between items-center pt-1">
                  <span className="text-sm text-muted-foreground">Товары</span>
                  <span className="text-sm">{total} ₽</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Доставка</span>
                  <span className="text-sm">{deliveryCost === 0 ? "Бесплатно" : `${deliveryCost} ₽`}</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-border">
                  <span className="font-medium">Итого</span>
                  <span className="font-semibold text-lg">{grandTotal} ₽</span>
                </div>

                <Button
                  className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setStep("form")}
                >
                  Оформить заказ
                </Button>
              </div>
            )}
          </>
        )}

        {step === "form" && (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="mb-4 p-3 bg-muted/40 rounded-xl space-y-1">
                <p className="text-xs text-muted-foreground mb-1">Ваш заказ</p>
                {items.map((i) => (
                  <p key={i.id} className="text-sm">{i.name} × {i.quantity} — {(i.discountedPrice ?? i.price) * i.quantity} ₽</p>
                ))}
                <div className="border-t border-border pt-1 mt-1 space-y-0.5">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Доставка ({delivery === "courier" ? "Курьер" : "Почта России"})</span>
                    <span>{deliveryCost === 0 ? "Бесплатно" : `${deliveryCost} ₽`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Итого</span>
                    <span>{grandTotal} ₽</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleOrder} className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Имя *</label>
                  <Input
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Телефон *</label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Адрес доставки *</label>
                  <Input
                    placeholder="Город, улица, дом, квартира"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Комментарий</label>
                  <Textarea
                    placeholder="Пожелания к заказу..."
                    rows={3}
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 rounded-full"
                    onClick={() => setStep("cart")}
                  >
                    Назад
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Подтвердить
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}

        {step === "done" && (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Icon name="CheckCircle" size={32} className="text-primary" />
            </div>
            <h3 className="font-serif text-2xl italic">Заказ принят!</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Мы свяжемся с вами в течение 30 минут для подтверждения.
            </p>
            <Button
              className="mt-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              onClick={() => { setIsOpen(false); setStep("cart"); }}
            >
              Отлично!
            </Button>
          </div>
        )}
      </div>
    </>
  );
}