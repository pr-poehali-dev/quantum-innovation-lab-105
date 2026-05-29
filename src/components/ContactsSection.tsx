import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export function ContactsSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-24 px-6 bg-[#f5ede0]/40">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 text-sm border rounded-full mb-6 text-muted-foreground">Контакты</span>
          <h2 className="font-serif text-4xl md:text-5xl italic">Свяжитесь с нами</h2>
          <p className="mt-4 text-muted-foreground">Ответим на любые вопросы о чае и заказах</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Телефон</p>
                <p className="font-medium">+7 (999) 123-45-67</p>
                <p className="text-xs text-muted-foreground mt-0.5">Пн–Пт с 10:00 до 20:00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:tea@chaynatraditsiya.ru" className="font-medium hover:text-primary transition-colors">
                  tea@chaynatraditsiya.ru
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="MessageCircle" size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Мессенджеры</p>
                <div className="flex gap-2">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-full text-sm hover:bg-secondary transition-colors"
                  >
                    <Icon name="Send" size={14} />
                    Telegram
                  </a>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-full text-sm hover:bg-secondary transition-colors"
                  >
                    <Icon name="Phone" size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="CheckCircle" size={24} className="text-primary" />
                </div>
                <p className="font-medium">Сообщение отправлено!</p>
                <p className="text-sm text-muted-foreground">Ответим в течение рабочего дня</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-medium mb-4">Задать вопрос</h3>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.ru"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Вопрос</label>
                  <Textarea
                    placeholder="Напишите ваш вопрос..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Отправить
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
