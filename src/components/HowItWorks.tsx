import { FileText, Globe, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-sm border rounded-full mb-6">Как это работает</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-balance">
            Самый простой способ
            <br />
            запустить AI-бизнес
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Обучите AI, настройте брендинг, подключите платежи и начните продавать доступ — все в одной платформе.
          </p>
        </div>

        {/* Step 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-2xl md:text-3xl mb-4">1. Обучите AI-ассистента</h3>
            <p className="text-muted-foreground leading-relaxed">
              Настройте инструкции, параметры поведения и возможности. Загрузите документы,
              данные и экспертизу, чтобы AI отвечал с вашими уникальными знаниями.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <InstructionsCard />
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <BrandCard />
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-4">2. Настройте бренд</h3>
            <p className="text-muted-foreground leading-relaxed">
              Загрузите логотип и favicon, выберите цвета и настройте тексты. Сделайте AI-ассистента частью
              вашего бренда — профессионально, стильно и SEO-оптимизировано.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h3 className="font-serif text-2xl md:text-3xl mb-4">3. Подключите домен</h3>
            <p className="text-muted-foreground leading-relaxed">
              Добавьте свой домен или поддомен. AI-ассистент будет выглядеть как естественная часть вашего бренда,
              а не сторонний сервис.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <DomainCard />
          </div>
        </div>

        {/* Step 4 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <PaymentsCard />
          </div>
          <div>
            <h3 className="font-serif text-2xl md:text-3xl mb-4">4. Настройте платежи</h3>
            <p className="text-muted-foreground leading-relaxed">
              Подключите Stripe за несколько минут. Предложите бесплатные пробные сообщения, затем монетизируйте гибкими тарифами.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="text-center mb-16">
          <h3 className="font-serif text-2xl md:text-3xl mb-4">5. Запуск!</h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            Ваш брендированный AI готов. Поделитесь ссылкой, привлеките пользователей и начните превращать диалоги в доход.
          </p>
          <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6">
            Создать AI-ассистента
          </Button>
        </div>

        {/* Chat demo */}
        <ChatDemo />
      </div>
    </section>
  );
}

function InstructionsCard() {
  return (
    <div className="bg-muted/50 rounded-xl p-6">
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <h4 className="text-sm font-medium mb-4">Инструкции</h4>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground">Роль</label>
            <div className="h-0.5 bg-muted mt-2 w-full" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Характер</label>
            <div className="h-0.5 bg-muted mt-2 w-full" />
          </div>
        </div>

        <h4 className="text-sm font-medium mt-6 mb-3">Файлы</h4>
        <div className="flex items-center gap-2 p-3 border rounded-lg">
          <FileText className="w-4 h-4 text-purple-500" />
          <span className="text-sm">Отчет.pdf</span>
        </div>

        <h4 className="text-sm font-medium mt-6 mb-3">Сайт</h4>
        <div className="flex items-center gap-2 p-3 border rounded-lg">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm">mywebsite.ru</span>
        </div>
      </div>
    </div>
  );
}

function BrandCard() {
  return (
    <div className="bg-muted/50 rounded-xl p-6">
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
            <span className="text-purple-500 font-bold">A</span>
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Upload className="w-4 h-4" />
            Загрузить лого
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Фон</span>
            <div className="w-8 h-8 rounded-full bg-gray-100 border" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Акцент</span>
            <div className="w-8 h-8 rounded-full bg-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DomainCard() {
  return (
    <div className="bg-muted/50 rounded-xl p-6">
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <div className="flex items-center gap-2 p-3 border rounded-lg">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm">chat.mybusiness.ru</span>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white text-xs">&#10003;</span>
          </div>
          <span className="text-sm text-green-600">Домен подключен</span>
        </div>
      </div>
    </div>
  );
}

function PaymentsCard() {
  return (
    <div className="bg-muted/50 rounded-xl p-6">
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <span className="text-purple-500 font-bold text-xl italic">stripe</span>
          <Button variant="outline" size="sm">
            Подключить Stripe
          </Button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 border rounded-lg text-sm">100 сообщений</span>
            <span className="px-3 py-1.5 border rounded-lg text-sm">390 ₽/мес</span>
            <span className="text-green-500 text-sm font-medium">+100 ₽</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 border rounded-lg text-sm">200 сообщений</span>
            <span className="px-3 py-1.5 border rounded-lg text-sm">790 ₽/мес</span>
            <span className="text-green-500 text-sm font-medium">+200 ₽</span>
          </div>
        </div>

        <Button variant="outline" size="sm" className="mt-4 gap-1 bg-transparent">
          <span>+</span> Добавить тариф
        </Button>
      </div>
    </div>
  );
}

function ChatDemo() {
  return (
    <div className="relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5e9]/50 via-[#e3f2fd]/50 to-[#f3e5f5]/50 rounded-3xl" />

      <div className="relative rounded-3xl p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center">
                <span className="text-purple-500 text-xs font-bold">A</span>
              </div>
              <span className="text-sm font-medium">Fitness X</span>
            </div>
            <nav className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Чат</span>
              <span className="text-sm text-muted-foreground">О нас</span>
              <span className="text-sm text-muted-foreground">Тарифы</span>
              <span className="text-sm text-muted-foreground">Войти</span>
              <button className="px-3 py-1 text-xs bg-purple-500 text-white rounded-full">Регистрация</button>
            </nav>
          </div>

          {/* Chat content */}
          <div className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-2">Чем могу помочь?</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Готовы к тренировкам? Спросите об упражнениях, питании
              <br />
              или создании идеальной программы для вас.
            </p>

            <div className="max-w-md mx-auto mb-6">
              <div className="border rounded-lg p-3">
                <input type="text" placeholder="Спросите что угодно" className="w-full text-sm outline-none" readOnly />
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <span>&#128206;</span> 0 файлов
                  </div>
                  <button className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center">
                    <span className="text-white text-xs">&#8593;</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="text-left max-w-md mx-auto space-y-2">
              <p className="text-sm text-muted-foreground">Быстрый полезный завтрак?</p>
              <p className="text-sm text-muted-foreground">Лучшая растяжка от боли в спине?</p>
              <p className="text-sm text-muted-foreground">Простые домашние тренировки?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
