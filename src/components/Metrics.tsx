"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  {
    value: "+85%",
    numericValue: 85,
    prefix: "+",
    suffix: "%",
    label: "Redução no tempo de resposta",
  },
  {
    value: "+40%",
    numericValue: 40,
    prefix: "+",
    suffix: "%",
    label: "Aumento em conversões",
  },
  {
    value: "-70%",
    numericValue: 70,
    prefix: "-",
    suffix: "%",
    label: "Custo operacional",
  },
  {
    value: "24/7",
    numericValue: null,
    prefix: "",
    suffix: "",
    label: "Disponibilidade total",
  },
];

function CountUp({
  target,
  isInView,
}: {
  target: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return <>{count}</>;
}

function AnimatedMetric({
  value,
  numericValue,
  prefix,
  suffix,
  label,
  index,
}: {
  value: string;
  numericValue: number | null;
  prefix: string;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-2xl p-8 md:p-10 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Number */}
      <div className="relative mb-4">
        <span className="metric-value">
          {numericValue !== null ? (
            <>
              {prefix}
              <CountUp target={numericValue} isInView={isInView} />
              {suffix}
            </>
          ) : (
            value
          )}
        </span>

        {/* Underline decorativo */}
        <motion.div
          className="metric-underline"
          initial={{ width: 0 }}
          animate={isInView ? { width: "40%" } : {}}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
        />
      </div>

      {/* Label */}
      <p className="metric-label">{label}</p>
    </motion.div>
  );
}

export default function Metrics() {
  const { t } = useLanguage();

  return (
    <section className="section-wrapper bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="w-full flex flex-col items-center text-center mb-16">
          <motion.span
            className="label-tag mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Métricas reais
          </motion.span>
          <motion.h2
            className="heading-section text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t("metrics.title")}
          </motion.h2>
          <motion.p
            className="body-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t("metrics.subtitle")}
          </motion.p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <AnimatedMetric key={index} {...metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
