export type FeatureIcon =
  | "cog-8-tooth"
  | "link-solid"
  | "chart-pie"
  | "arrow-path";

export type FeatureBentoItem = {
  id: string;
  title: string;
  description: string;
  icon: FeatureIcon;
  /** Grid placement on desktop (2-column bento). */
  gridClass: string;
};

export const FEATURES_BENTO: readonly FeatureBentoItem[] = [
  {
    id: "automation",
    title: "Intelligent Automation",
    description:
      "Orchestrate complex workflows with rule-based triggers, scheduled jobs, and smart defaults that adapt to your team's patterns.",
    icon: "cog-8-tooth",
    gridClass: "md:col-span-2",
  },
  {
    id: "integration",
    title: "Seamless Integration",
    description:
      "Connect APIs, webhooks, and third-party tools in minutes with pre-built connectors and a unified event bus.",
    icon: "link-solid",
    gridClass: "",
  },
  {
    id: "analytics",
    title: "Real-time Analytics",
    description:
      "Monitor KPIs live with interactive dashboards, custom reports, and anomaly detection across every workspace.",
    icon: "chart-pie",
    gridClass: "",
  },
  {
    id: "security",
    title: "Enterprise Security",
    description:
      "Protect data with end-to-end encryption, role-based access controls, audit logs, and SOC 2 compliant infrastructure.",
    icon: "arrow-path",
    gridClass: "md:col-span-2",
  },
] as const;

export const MOBILE_BREAKPOINT = 768;
