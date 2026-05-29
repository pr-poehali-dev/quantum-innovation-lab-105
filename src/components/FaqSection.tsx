"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Что такое DialogAI и как это работает?",
    answer:
      "DialogAI — это платформа для создания, обучения и монетизации собственного AI-ассистента. Вы можете настроить его под свою экспертизу, оформить в цветах вашего бренда и продавать доступ клиентам.",
  },
  {
    question: "Как DialogAI использует мои данные для создания AI-ассистента?",
    answer:
      "Мы используем загруженные вами файлы, документы и контент сайта для обучения AI-ассистента. Ваши данные используются исключительно для работы вашего чата и никогда не передаются другим пользователям.",
  },
  {
    question: "Как начать работу с DialogAI и какие есть тарифы?",
    answer:
      "Начать просто — зарегистрируйтесь, загрузите базу знаний, настройте брендинг и запускайте. Мы предлагаем гибкие тарифные планы с возможностью бесплатного пробного периода и премиум-опциями.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Часто задаваемые
              <br />
              вопросы
            </h2>
          </div>
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-sm pr-4">{faq.question}</span>
                  <Plus
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-45" : ""}`}
                  />
                </button>
                {openIndex === index && <div className="pb-5 text-sm text-muted-foreground">{faq.answer}</div>}
              </div>
            ))}
            <div className="border-t" />
          </div>
        </div>
      </div>
    </section>
  );
}
