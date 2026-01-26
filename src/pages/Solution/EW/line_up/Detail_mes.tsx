import categoryMesImg from "@/assets/images/mes-bg.png"
import mesImg from "@/assets/images/mes.png"
import { ProductContactSection } from "@/components/product-contact-section"
import { DetailPageGate } from "@/components/DetailPageGate";

export default function DetailMesPage() {
  return (
    <DetailPageGate>
      <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">eBT-MES</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Drone Detection and Tracking System</p>
            </div>
          </div>

          {/* Full-width Hero Image */}
          <div className="w-full mb-12">
            <img
              src={categoryMesImg}
              alt="eBT-MES"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl lg:text-4xl font-medium text-foreground leading-relaxed">
                Integrated Platform That Completely Blocks All Drone Threats
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS GoldenBat-EWS? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">WHAT IS eBT-MES?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
              eBT-MES is a next-generation C-UAS detection system that integrates broadband RF detection, precise positioning of drones and pilots, and real-time collection and storage of FPV images.

From multicopter to multicopter, even in complex urban radio environments and operational situations It boasts overwhelming performance that does not miss even FPV drones.
              </p>
            </div>
          </div>
        </section>

        {/* 사진 섹션 */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="w-full">
              <img
                src={mesImg}
                alt="GoldenBat-EWS"
                className="w-full h-auto object-cover rounded-lg"
                // style={{
                //   filter: "invert(1) brightness(2)", // 대충 검은색을 흰색처럼
                //   mixBlendMode: "difference",
                // }}
              />
            </div>
          </div>
        </section>

        {/* KEY Features */}
        {/* <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">KEY Features</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Vehicle-Mounted Mobility</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deploy GoldenBat-EWS to any location, providing you with the flexibility to respond to evolving threats and seize opportunities.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Comprehensive Electronic Warfare</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Offers a complete suite of ES, EA, and signal monitoring capabilities.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Advanced Signal Processing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Employs cutting-edge algorithms for accurate signal analysis and threat identification.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Wideband Coverage</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Covers a broad range of frequencies, ensuring comprehensive detection and monitoring.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">High-Performance Hardware</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Features powerful hardware components for optimal performance and reliability.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">User-Friendly Interface</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Provides an intuitive and easy-to-use interface for operators.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Scalable Architecture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Can be easily customized and expanded to meet your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Specifications */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">Specifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Frequency</h3>
                <p className="text-sm text-muted-foreground">70MHz ~ 6.2GHz</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Base band</h3>
                <p className="text-sm text-muted-foreground">400MHz, 800MHz, 900MHz, 1.2GHz, 1.4GHz, 2.4GHz, 5.2GHz, 5.8GHz</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Detection Range</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Commercial drones: ≥10 km</li>
                  <li>FPV drones: ≥2 km</li>
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Dimension</h3>
                <p className="text-sm text-muted-foreground">400mm × 165mm × 500mm</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Weight</h3>
                <p className="text-sm text-muted-foreground">&gt;6 kg</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">IP Rating</h3>
                <p className="text-sm text-muted-foreground">IP67</p>
              </div>
            </div>
          </div>
        </section>

        <ProductContactSection text="To learn more about GoldenBat-EWS and how it can benefit your organization, please contact us at" />
    </div>
    </DetailPageGate>
  )
}
