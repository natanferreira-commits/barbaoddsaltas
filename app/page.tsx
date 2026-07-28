export default function Page() {
  // TODO: trocar pelo link real do bot/grupo do Barba quando o Natan mandar
  const grupoLink = "https://t.me/+PLACEHOLDER";

  return (
    <main className="min-h-screen w-full flex flex-col hero-bg">
      <div className="flex-1 w-full flex flex-col hero-overlay">
        {/* Conteúdo — empurrado pra baixo pra deixar o Barba aparecer */}
        <div className="flex-1 w-full max-w-2xl mx-auto flex flex-col items-center text-center px-6 pb-10 pt-[52vh] sm:pt-[48vh] md:pt-[42vh]">
          {/* Chip topo */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-neon/15 border border-brand-neon/50 text-brand-neon text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-5">
            Grupo · Odds Altas
          </div>

          {/* Headline — Inter Black */}
          <h1 className="font-black leading-[0.95] tracking-tight mb-5">
            <span className="block text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Odds altas do
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl text-brand-neon drop-shadow-[0_2px_20px_rgba(255,106,0,0.5)]">
              El Barba
            </span>
          </h1>

          {/* Sub */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium max-w-lg leading-snug mb-7">
            Bilhete de <span className="text-brand-neon font-bold">odd alta</span> todo dia, leitura afiada e comunidade que vive bola.
          </p>

          {/* CTA */}
          <a
            href={grupoLink}
            target="_blank"
            rel="noopener noreferrer"
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
