"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(
    new RegExp(`(^|;\\s*)(${name})=([^;]*)`)
  );
  return match ? decodeURIComponent(match[3]) : undefined;
}

function makeEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function Page() {
  const grupoLink = "https://t.me/elbarba0bot?start=6a6a4fae0aa015d9100cb7cf";

  const handleLeadClick = () => {
    const eventId = makeEventId();
    const customData = {
      content_name: "Grupo Odds Altas El Barba",
      content_category: "Odds Altas"
    };

    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", customData, { eventID: eventId });
    }

    if (typeof window !== "undefined") {
      const body = {
        event_id: eventId,
        event_name: "Lead",
        event_source_url: window.location.href,
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
        custom_data: customData
      };

      const blob = new Blob([JSON.stringify(body)], {
        type: "application/json"
      });

      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/track", blob);
      } else {
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
          keepalive: true
        }).catch(() => {});
      }
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col hero-bg">
      <div className="flex-1 w-full flex flex-col hero-overlay">
        {/* Conteúdo — empurrado pra baixo pra deixar o Barba aparecer */}
        <div className="flex-1 w-full max-w-2xl mx-auto flex flex-col items-center text-center px-6 pb-10 pt-[52vh] sm:pt-[48vh] md:pt-[42vh]">
          {/* Chip topo */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neon/15 border border-brand-neon/50 text-brand-neon text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-5">
            El Barba · Odds Altas
          </div>

          {/* Headline — Inter Black */}
          <h1 className="font-black leading-[0.9] tracking-tight uppercase mb-5">
            <span className="block text-5xl sm:text-6xl md:text-7xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Acesso
            </span>
            <span className="block text-6xl sm:text-7xl md:text-8xl text-brand-neon drop-shadow-[0_2px_20px_rgba(255,106,0,0.5)]">
              Liberado
            </span>
          </h1>

          {/* Sub */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium max-w-lg leading-snug mb-7">
            Entra no grupo de odds altas <span className="text-brand-neon font-bold">mais raiz do país</span>. Bilhete todo dia, sem enrolação.
          </p>

          {/* CTA */}
          <a
            href={grupoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLeadClick}
            className="shine pulse-cta group w-full max-w-md inline-flex items-center justify-center gap-2 py-5 px-6 rounded-full bg-brand-neon text-black font-black text-lg sm:text-xl uppercase tracking-wide hover:brightness-110 active:scale-[0.98] transition"
          >
            <span>Quero entrar agora</span>
            <span className="group-hover:translate-x-1 transition">→</span>
          </a>
        </div>

        {/* Rodapé compliance */}
        <footer className="w-full bg-black/90 border-t border-brand-neon/20 px-6 py-6">
          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-start gap-3">
            <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/40 text-white/70 text-[10px] font-black">
              +18
            </div>
            <p className="text-[11px] sm:text-xs text-white/60 leading-relaxed text-center sm:text-left">
              Conteúdo destinado a maiores de 18 anos. Aposta com responsabilidade.
              Apostas são uma forma de entretenimento e envolvem risco. Aposte apenas
              o valor que você está disposto a perder. Resultados passados não
              garantem resultados futuros. Este conteúdo não promete ganhos ou
              retornos. Ministério da Fazenda adverte: aposta não é investimento.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
