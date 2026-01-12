import AgentCard from "./AgentCard";

const agents = [
  {
    name: "Maria",
    role: "Agente de Atendimento",
    description:
      "Rastreio cada interação, resolvo dúvidas instantaneamente e mantenho seus clientes satisfeitos 24/7. Escalo para humanos apenas quando necessário.",
    href: "/maria",
    videoUrl: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
    accentColor: "#4d65ff",
  },
  {
    name: "Lara",
    role: "Agente SDR",
    description:
      "Transformo seu mercado em receita. Identifico compradores ideais, engajo decisores e qualifico leads automaticamente enquanto você fecha negócios.",
    href: "/lara",
    videoUrl: "https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_30fps.mp4",
    accentColor: "#00d4aa",
  },
  {
    name: "Léo",
    role: "Agente de Transcrição",
    description:
      "Transcrevo reuniões, calls e podcasts em tempo real. Gero resumos inteligentes, extraio action items e nunca deixo você perder uma informação.",
    href: "/leo",
    videoUrl: "https://videos.pexels.com/video-files/4065388/4065388-uhd_2560_1440_30fps.mp4",
    accentColor: "#ff9f43",
  },
];

export default function Agents() {
  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="space-y-32">
          {agents.map((agent, index) => (
            <AgentCard
              key={agent.name}
              {...agent}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
