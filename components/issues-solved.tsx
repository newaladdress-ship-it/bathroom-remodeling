import { CheckCircle } from "lucide-react";

const issues = [
  "Outdated fixtures and finishes",
  "Poor lighting and ventilation",
  "Limited storage space",
  "Water damage and leaks",
  "Accessibility concerns",
  "Energy inefficiency"
];

type IssueItem = string | { problem?: string; solution?: string; title?: string; description?: string };

interface IssuesSolvedProps {
  title?: string;
  subtitle?: string;
  description?: string;
  issues?: IssueItem[];
}

export default function IssuesSolved({
  title = "Issues We Solve",
  subtitle,
  description = "Our expert team addresses common bathroom problems with professional solutions.",
  issues: customIssues,
}: IssuesSolvedProps) {
  const issuesToRender = customIssues ?? issues;

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="text-primary text-sm font-medium tracking-wider uppercase mb-4">
              {subtitle}
            </p>
          )}
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {issuesToRender.map((issue, index) => {
              const label = typeof issue === "string" 
                ? issue 
                : issue.title 
                ? `${issue.title} - ${issue.description}` 
                : `${issue.problem} - ${issue.solution}`;

              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-5 bg-background rounded-xl border border-border animate-in fade-in slide-in-from-left-4 text-left"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground text-sm leading-relaxed">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
