import Link from "next/link";

interface AgentSectionProps {
  id: string;
  name: string;
  role: string;
  description: string;
  features: string[];
  videoPlaceholder: string;
  reversed?: boolean;
  color?: string;
}

export default function AgentSection({
  id,
  name,
  role,
  description,
  features,
  videoPlaceholder,
  reversed = false,
  color = "#4d65ff",
}: AgentSectionProps) {
  return (
    <section id={id} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Content */}
          <div className={reversed ? "lg:order-2" : ""}>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-6">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                Online
              </span>
            </div>

            {/* Name and role */}
            <h2 className="text-4xl md:text-5xl font-bold mb-2">{name}</h2>
            <p
              className="text-xl mb-6"
              style={{ color: color }}
            >
              {role}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {description}
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: color }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
              style={{ backgroundColor: color }}
            >
              Contratar {name}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Video/Visual placeholder */}
          <div className={reversed ? "lg:order-1" : ""}>
            <div className="relative">
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-2xl blur-3xl opacity-20"
                style={{ backgroundColor: color }}
              />

              {/* Video container */}
              <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden aspect-video">
                {/* Placeholder content */}
                <div className="absolute inset-0 video-placeholder flex items-center justify-center">
                  <div className="text-center">
                    {/* Play button */}
                    <button
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto transition-transform hover:scale-110"
                      style={{ backgroundColor: color }}
                    >
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </button>
                    <p className="text-gray-500 text-sm">{videoPlaceholder}</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 rounded-full px-3 py-1.5">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs text-white">DEMO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
