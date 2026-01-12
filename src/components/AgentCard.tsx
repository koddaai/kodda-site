import Link from "next/link";

interface AgentCardProps {
  name: string;
  role: string;
  description: string;
  href: string;
  videoUrl: string;
  accentColor: string;
  reversed?: boolean;
}

export default function AgentCard({
  name,
  role,
  description,
  href,
  videoUrl,
  accentColor,
  reversed = false,
}: AgentCardProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        reversed ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Content */}
      <div className={reversed ? "lg:[direction:ltr]" : ""}>
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="status-dot" style={{ background: accentColor }} />
          <span className="text-sm text-zinc-500 uppercase tracking-wider font-medium">
            Online
          </span>
        </div>

        {/* Name */}
        <h2 className="text-5xl md:text-6xl font-bold mb-3">{name}</h2>

        {/* Role */}
        <p className="text-xl md:text-2xl mb-6" style={{ color: accentColor }}>
          {role}
        </p>

        {/* Description */}
        <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-lg">
          {description}
        </p>

        {/* CTA */}
        <Link
          href={href}
          className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:gap-4"
          style={{ backgroundColor: accentColor }}
        >
          Contratar {name}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Video */}
      <div className={`${reversed ? "lg:[direction:ltr]" : ""} relative`}>
        <div
          className="absolute inset-0 rounded-3xl blur-3xl opacity-30 -z-10"
          style={{ background: accentColor }}
        />
        <div className="video-container aspect-[4/3] rounded-3xl border border-white/10 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster={`/images/${name.toLowerCase()}-poster.jpg`}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>

          {/* Overlay badge */}
          <div className="absolute top-6 right-6 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: accentColor }}
            />
            <span className="text-xs text-white font-medium uppercase tracking-wider">
              Demo ao vivo
            </span>
          </div>

          {/* Agent name overlay */}
          <div className="absolute bottom-6 left-6 z-10">
            <div className="text-white text-2xl font-bold">{name}</div>
            <div className="text-white/60 text-sm">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
