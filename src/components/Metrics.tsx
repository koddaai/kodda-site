const metrics = [
  {
    value: "+85%",
    label: "Redução no tempo de resposta",
  },
  {
    value: "+40%",
    label: "Aumento em conversões",
  },
  {
    value: "-70%",
    label: "Custo operacional",
  },
  {
    value: "24/7",
    label: "Disponibilidade total",
  },
  {
    value: ">R$10M",
    label: "Receita gerada para clientes",
  },
];

export default function Metrics() {
  return (
    <section className="section-padding tropical-glow">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resultados que <span className="text-gradient">importam</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Números reais de empresas que usam Kodda.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-zinc-900/80 to-transparent border border-white/5"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#4d65ff] mb-3">
                {metric.value}
              </div>
              <div className="text-sm text-zinc-400">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
