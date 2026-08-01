import type { LucideIcon } from "lucide-react";

type Feature = {
  Icon: LucideIcon;
  label: string;
  copy: string;
};

type IconFeatureGridProps = {
  features: Feature[];
};

export function IconFeatureGrid({ features }: IconFeatureGridProps) {
  return (
    <div className="icon-feature-grid">
      {features.map((feature) => (
        <div key={feature.label} className="icon-feature-grid__card">
          <span className="icon-feature-grid__icon-wrap" aria-hidden>
            <feature.Icon className="icon-feature-grid__icon" />
          </span>
          <h3 className="icon-feature-grid__label">{feature.label}</h3>
          <p className="icon-feature-grid__copy">{feature.copy}</p>
        </div>
      ))}
    </div>
  );
}
