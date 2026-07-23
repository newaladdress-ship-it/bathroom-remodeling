export default function ChandlerShowerMaterials() {
  return (
    <section className="py-16 bg-background">
      <div className="w-full max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Choosing Materials for Arizona Bathrooms</span>
          <h2 className="font-serif text-4xl font-semibold mt-2 mb-4 text-foreground">
            Materials & Design Considerations for Chandler Homes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Arizona homes experience unique conditions, including dry climate, temperature changes, and mineral-rich water. Choosing suitable materials can improve durability and simplify maintenance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Tile & Grout Selection */}
          <div className="p-8 bg-secondary rounded-2xl border border-border">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Tile & Grout Selection
            </h3>
            <p className="text-foreground/90 leading-relaxed text-sm">
              Porcelain tile and quality grout options are popular choices because they provide durability and a wide range of design possibilities while remaining easy to maintain.
            </p>
          </div>

          {/* Card 2: Planning for Temperature Changes */}
          <div className="p-8 bg-secondary rounded-2xl border border-border">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Planning for Temperature Changes
            </h3>
            <p className="text-foreground/90 leading-relaxed text-sm">
              Proper installation techniques, flexible sealing materials, and correct preparation help accommodate normal expansion and contraction that can occur with changing temperatures.
            </p>
          </div>

          {/* Card 3: Community Guidelines & Project Planning */}
          <div className="p-8 bg-secondary rounded-2xl border border-border">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
              Community Guidelines & Project Planning
            </h3>
            <p className="text-foreground/90 leading-relaxed text-sm">
              Many Chandler neighborhoods and nearby communities have specific homeowner guidelines. We help homeowners plan projects while considering access, scheduling, and installation requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
