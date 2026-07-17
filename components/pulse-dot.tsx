/** Ponto ambar pulsante — sinal de "ativo/disponivel" reutilizado em nav, hero e contato. */
export function PulseDot({ className }: { className?: string }) {
  return (
    <span className={`relative flex size-1.5${className ? ` ${className}` : ""}`}>
      <span className="absolute inline-flex size-full rounded-full bg-signal [animation:signal-pulse_2.4s_ease-in-out_infinite]" />
    </span>
  );
}
