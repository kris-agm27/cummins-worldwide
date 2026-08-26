"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type Service = {
  number: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
};

export const finance: Service[] = [
  { number: "01", title: "Budgeting Resources", slug: "budgeting-resources", summary: "Build a clear operating plan that turns financial data into confident, practical decisions.", description: "We help translate your goals and financial information into a realistic, usable budget. The result is a clearer view of priorities, cash needs, and the decisions that will keep your plan moving forward." },
  { number: "02", title: "Tax Solutions", slug: "tax-solutions", summary: "Thoughtful tax support designed around the realities of individuals and growing enterprises.", description: "Our team helps organize the information, planning, and ongoing support behind a more confident tax strategy. Every recommendation is grounded in your circumstances, obligations, and long-term goals." },
  { number: "03", title: "Bookkeeping & Accounting", slug: "bookkeeping-accounting", summary: "Reliable reporting and clean financial records that help leaders see what is really happening.", description: "Accurate books create the foundation for better decisions. We provide consistent financial recordkeeping and reporting so you can understand performance, spot issues earlier, and move ahead with confidence." },
  { number: "04", title: "Risk Management", slug: "risk-management", summary: "Identify exposure early, protect what you have built, and prepare for what comes next.", description: "We help you identify operational and financial vulnerabilities before they become larger problems. Together, we build practical safeguards that support continuity, resilience, and responsible growth." },
];

export const hr: Service[] = [
  { number: "05", title: "Policy & Training Programs", slug: "policy-training-programs", summary: "Practical programs that create consistency, strengthen culture, and help teams perform.", description: "Clear policies and useful training give people the confidence to do their best work. We help create programs that set expectations, reinforce your culture, and support consistent performance across the organization." },
  { number: "06", title: "Talent Sourcing", slug: "talent-sourcing", summary: "Find capable people who fit the role, the organization, and the ambition behind the business.", description: "We help define what the role truly requires and identify candidates with the right experience and organizational fit. The focus is not simply filling a seat—it is building a stronger team." },
  { number: "07", title: "Employee Retention Resources", slug: "employee-retention-resources", summary: "Build the systems and working environment that make strong people want to stay.", description: "Retention starts with understanding what employees need to succeed. We help strengthen communication, development, recognition, and the day-to-day practices that support long-term commitment." },
  { number: "08", title: "Corporate Compliance", slug: "corporate-compliance", summary: "Clear guidance and dependable processes for the obligations that come with growth.", description: "We help turn complex requirements into practical processes your team can follow. Our approach supports responsible operations, stronger documentation, and greater confidence as your organization evolves." },
];

const allServices = [...finance, ...hr];

function ServiceDialog({ service, onClose, historyPath }: { service: Service; onClose: () => void; historyPath?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    if (historyPath) window.history.replaceState(null, "", `${historyPath}?service=${service.slug}`);
    return () => { if (dialog.open) dialog.close(); };
  }, [historyPath, service.slug]);

  const close = () => {
    if (historyPath) window.history.replaceState(null, "", historyPath);
    onClose();
  };

  return (
    <dialog ref={dialogRef} className="service-dialog" aria-labelledby={`service-title-${service.slug}`} onCancel={close} onClick={(event) => event.target === event.currentTarget && close()}>
      <div className="service-dialog-panel">
        <button className="service-dialog-close" type="button" onClick={close} aria-label="Close service details">×</button>
        <p className="eyebrow">Service {service.number}</p>
        <h2 id={`service-title-${service.slug}`}>{service.title}</h2>
        <p className="service-dialog-copy">{service.description}</p>
        <div className="service-dialog-actions">
          <Link className="button" href="/contact#contact-form">Discuss this service <span aria-hidden="true">↗</span></Link>
          <button className="service-dialog-text-button" type="button" onClick={close}>Back to services</button>
        </div>
      </div>
    </dialog>
  );
}

function ServiceGroup({ label, items }: { label: string; items: Service[] }) {
  const [selected, setSelected] = useState<Service | null>(null);
  return (
    <div className="service-page-group">
      <div className="service-label">{label}<span>04 services</span></div>
      <div className="service-grid">
        {items.map((service) => (
          <article className="service-card" id={service.slug} key={service.slug}>
            <span>{service.number}</span><h3>{service.title}</h3><p>{service.summary}</p>
            <button className="service-learn" type="button" onClick={() => setSelected(service)} aria-haspopup="dialog">Learn more <span aria-hidden="true">↗</span></button>
          </article>
        ))}
      </div>
      {selected && <ServiceDialog service={selected} onClose={() => setSelected(null)} historyPath="/services" />}
    </div>
  );
}

export function ServiceExplorer() {
  const [initialService, setInitialService] = useState<Service | null>(null);
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("service");
    if (slug) setInitialService(allServices.find((service) => service.slug === slug) ?? null);
  }, []);

  return <><ServiceGroup label="Personal & Enterprise Finance" items={finance} /><ServiceGroup label="Human Resources Solutions" items={hr} />{initialService && <ServiceDialog service={initialService} onClose={() => setInitialService(null)} historyPath="/services" />}</>;
}

export function HomeServiceExplorer() {
  const [selected, setSelected] = useState<Service | null>(null);

  const renderCards = (items: Service[]) => (
    <div className="service-grid">
      {items.map((service) => (
        <article className="service-card" key={service.slug}>
          <span>{service.number}</span><h3>{service.title}</h3><p>{service.summary}</p>
          <button className="service-learn" type="button" onClick={() => setSelected(service)} aria-haspopup="dialog" aria-label={`Learn more about ${service.title}`}>Learn more <span aria-hidden="true">↗</span></button>
        </article>
      ))}
    </div>
  );

  return <>
    <div className="service-label">Personal &amp; Enterprise Finance <span>04 services</span></div>
    {renderCards(finance)}
    <div className="service-label service-label-hr">Human Resources Solutions <span>04 services</span></div>
    {renderCards(hr)}
    {selected && <ServiceDialog service={selected} onClose={() => setSelected(null)} />}
  </>;
}
