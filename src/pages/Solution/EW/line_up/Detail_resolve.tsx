import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import categoryResolveImg from "@/assets/images/resolve-banner.jpg"
import eseaRecImg from "@/assets/images/resolve2.jpg"
export default function DetailEwsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">RESOLVE</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-s font-semibold uppercase tracking-wider text-muted-foreground">TACTICAL ELECTRONIC SUPPORT SYSTEM</p>
            </div>
            </div>
            <div className="mx-auto max-w-10xl ">
            {/* width 100% 사진 */}
            <div className="w-full mb-12">
              <img
                src={categoryResolveImg}
                alt="Product Lineup"
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 한 줄짜리 큰 설명 */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-5xl lg:text-3xl font-medium text-foreground leading-relaxed">
              For direction finding and interception
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS GoldenBat-EWS? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">WHAT IS RESOLVE?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
              RESOLVE is an integral solution for advancing electronic warfare and surveillance. In an increasingly complex and congested electromagnetic spectrum, the need for a highly accurate and operationally proven system to assist military operations is vital. As the world’s leading supplier of EW systems, we have developed the highly successful RESOLVE for the military to locate, find and fix adversaries’ positions.
              </p>
            </div>
          </div>
        </section>

        {/* 사진 섹션 */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="w-full">
              <img
                src={eseaRecImg}
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
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">KEY Features</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Whole Picture</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Entire SIGINT picture with wideband geolocation.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Lightweight</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Easily used as portable manpacks.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Effective</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  User friendly human interfaces.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Transitional</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Modular system for short, medium and long haul.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Mobile</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tablet interface for detailed mobile assessment.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Unified</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Integrates with latest electronic attack equipment.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Secure</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Uses IP-based networking effective data-sharing.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Versatile</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Soldier-portable or vehicle mounted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">Specifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Frequency</h3>
                <p className="text-sm text-muted-foreground">40MHz intercept bandwidth (3 MHz to 3 GHz)</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Software</h3>
                <p className="text-sm text-muted-foreground">Prefix for laptop or Tacfix for tablet</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Scalability</h3>
                <p className="text-sm text-muted-foreground">Mounted or dismounted configurations</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Compatibility</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A wide range of third-party software for reporting and specialist signals analysis
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg md:col-span-2">
                <h3 className="text-lg font-medium text-foreground mb-3">Direction Finding Accuracy</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>≤3° RMS 30MHz to 2200MHz</li>
                  <li>≤10° RMS 2200MHz to 2500MHz</li>
                  <li>≤20° RMS &gt; 2500MHz</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To learn more about PERCEIVE MR® and how it can benefit your organization,
                please contact us at{" "}
                <a href="mailto:info@ebtech.kr" className="text-foreground hover:underline">
                  info@ebtech.kr
                </a>{" "}
                or{" "}
                <a href="tel:+82317216380" className="text-foreground hover:underline">
                  +82 31 721 6380
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
