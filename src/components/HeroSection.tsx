import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[80vh] flex items-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5e9]/30 via-[#e3f2fd]/30 to-[#f3e5f5]/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-balance">
            Создайте и монетизируйте своего AI-ассистента
          </h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
            Превратите свои знания в прибыльный бизнес. Создайте персонального AI-чатбота, которому ваши клиенты будут доверять и платить.
          </p>
          <Button className="mt-8 rounded-full bg-foreground text-background hover:bg-foreground/90 px-6">
            Создать AI-ассистента
          </Button>
        </div>
      </div>
    </section>
  );
}
