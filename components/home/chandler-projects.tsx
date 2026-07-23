import Image from "next/image";
import { Wrench, ShieldAlert, Award, MapPin } from "lucide-react";

interface ProjectCaseStudy {
  location: string;
  projectType: string;
  problem: string;
  fix: string;
  result: string;
  image: string;
}

const projects: ProjectCaseStudy[] = [
  {
    location: "Ocotillo, Chandler",
    projectType: "Tub-to-Shower Conversion",
    problem: "Many homeowners in Ocotillo have oversized bathtubs that take up valuable space and no longer fit their daily lifestyle. These outdated layouts can make bathrooms feel cramped and less functional.",
    fix: "We design custom tub-to-shower conversions with walk-in showers, modern tile, glass enclosures, and space-saving layouts tailored to your bathroom and your renovation goals.",
    result: "A brighter, more accessible bathroom that improves daily comfort, maximizes available space, and adds long-term value to your Chandler home.",
    image: "/images/tub-to-shower-1.webp",
  },
  {
    location: "Fulton Ranch, Chandler",
    projectType: "Luxury Bathroom Remodel",
    problem: "Older bathrooms often feature outdated vanities, worn tile, inefficient layouts, and finishes that no longer match today's modern design preferences.",
    fix: "Our bathroom remodeling services include custom vanities, premium tile installation, quartz countertops, modern lighting, and personalized layouts designed for your home.",
    result: "A stylish, functional bathroom with improved storage, modern finishes, and a design that complements your lifestyle while enhancing your home's value.",
    image: "/images/bathroom-showcase.webp",
  },
  {
    location: "Sun Lakes, Chandler",
    projectType: "Accessible Shower Remodeling",
    problem: "Traditional bathtubs and high shower thresholds can become difficult to use safely, especially for homeowners seeking greater comfort and accessibility.",
    fix: "We create accessible bathroom solutions with curbless showers, slip-resistant flooring, grab bar installation, wider entryways, and layouts designed for everyday convenience.",
    result: "A safer, more comfortable bathroom that supports independent living while maintaining a clean, modern appearance and lasting functionality.",
    image: "/images/bathroom-remodel-1.webp",
  },
];

export default function ChandlerProjects() {
  return (
    <section className="py-12 lg:py-20 bg-background border-t border-border" aria-label="Bathroom Remodeling Solutions for Chandler Homes">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase bg-primary/5 px-4 py-1.5 rounded-full">
            Local Proof
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6 text-foreground text-balance">
            Bathroom Remodeling Solutions for Chandler Homes
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            See how our bathroom remodeling services resolve common layout and design challenges for homeowners in Chandler's local communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Accent Glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/20 transition-colors pointer-events-none" />
              
              <div>
                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.projectType} project in ${project.location} by ARZ Home Remodeling`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>

                <div className="p-6 lg:p-8">
                  {/* Header Info */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {project.projectType}
                      </h3>
                    </div>
                  </div>

                  {/* Case Study Details */}
                  <div className="space-y-5 my-6">
                    {/* Problem */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldAlert className="w-4 h-4 text-destructive" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Problem</h4>
                        <p className="text-foreground/90 text-sm leading-relaxed">{project.problem}</p>
                      </div>
                    </div>

                    {/* Fix */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Wrench className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Our Solution</h4>
                        <p className="text-foreground/90 text-sm leading-relaxed">{project.fix}</p>
                      </div>
                    </div>

                    {/* Result */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Award className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Result</h4>
                        <p className="text-foreground/90 text-sm leading-relaxed font-medium">{project.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
