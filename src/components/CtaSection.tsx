import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5e9]/40 via-[#e3f2fd]/40 to-[#f3e5f5]/30" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">Создайте своего AI-ассистента</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Превратите свои знания в доход. Создайте персонального AI-чатбота, которому ваши клиенты будут доверять и платить.
        </p>
        <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6">Начать</Button>
      </div>
    </section>
  );
}
