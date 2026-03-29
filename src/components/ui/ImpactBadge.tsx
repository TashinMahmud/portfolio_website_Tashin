import { cn } from "@/lib/utils";

interface ImpactBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const ImpactBadge = ({ text, className, ...props }: ImpactBadgeProps) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono tracking-tight text-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.2)]",
        className
      )}
      {...props}
    >
      <span className="mr-2 w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" aria-hidden="true" />
      {text}
    </div>
  );
};
