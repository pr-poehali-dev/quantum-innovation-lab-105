import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-[#d4e8c2]/40 via-[#f0e6d0]/30 to-[#e8dcc8]/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 text-sm border border-border rounded-full mb-6 text-muted-foreground bg-background/60">
            🍃 Натуральные листья с плантаций
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-balance italic">
            Заварной чай<br />с доставкой
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
            Только листья, никакой пыли. Отборные чаи из Китая, Индии и Цейлона — прямо к вашему столу.
          </p>
          <Button
            className="mt-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
            onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
          >
            Выбрать чай
          </Button>
        </div>
      </div>
    </section>
  );
}
