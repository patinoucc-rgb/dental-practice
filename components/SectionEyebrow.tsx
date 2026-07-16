export default function SectionEyebrow({
  children,
  className = "",
  centered = true,
}: {
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 mb-5 ${
        centered ? "justify-center" : "justify-start"
      } ${className}`}
    >
      <span className="h-px w-8 bg-trustcyan-500/50" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-trustcyan-600 dark:text-trustcyan-400">
        {children}
      </span>
      <span className="h-px w-8 bg-trustcyan-500/50" />
    </div>
  );
}
