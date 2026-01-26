import categoryLocateImg from "@/assets/images/locate-bg.jpg"
import eseaRecImg from "@/assets/images/locate.jpg"
import { ProductContactSection } from "@/components/product-contact-section"
import { DetailPageGate } from "@/components/DetailPageGate";

export default function DetailLocatePage() {
  return (
    <DetailPageGate>
      <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">LOCATE-T</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Strategic HF Monitoring & Direction Finding</p>
            </div>
          </div>

          {/* Full-width Hero Image */}
          <div className="w-full mb-12">
            <img
              src={categoryLocateImg}
              alt="LOCATE-T"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl lg:text-4xl font-medium text-foreground leading-relaxed">
                Strategic HF Monitoring & Direction Finding
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS GoldenBat-EWS? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">WHAT IS LOCATE-T?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
              LOCATE-T is an advanced transportable Electronic Support capability, which is proven in complex environments. With comprehensive training and support, LOCATE-T delivers a step-change in transportable SIGINT capability.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              By combining the LOCATE-T system with the RESOLVE HF antenna system, we've developed a unique capability that enables rapid deployment of a transportable SIGINT system for use within the 2-30 MHz HF band, to meet any operational needs.
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
                <h3 className="text-lg font-medium text-foreground mb-2">Super Resolution Direction Finding (SRDF) (2°RMS)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Utilises Super Resolution Direction Finding (SRDF) for improved accuracy and better resolution of targets on the same frequency. Capable of Reception of Near Vertical Incidence (NVIS)
                </p>
              </div>


              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Adaptive Beam Forming</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Integrated Adaptive Digital Beam Forming (ADBF) to increase target signal identification and reduce spectral clutter.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Signal Classification</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Based upon the widely recognised Multiple Signal Classification (MUSIC) algorithm. Delivers Tactical HF Direction Finding (DF). The enhanced output data may then be demodulated regardless of the presence of other signals.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">2°RMS DF Azimuth and Elevation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KEY Benefits */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">KEY Benefits</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Transportable Form-Factor</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  HF Electronic Support capabilities are available in a compact form that enables flexible operation from tactically deployed semi-mobile and static positions. Rapidly deployable by team of two in 40 minutes.
                </p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Integration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                Totally integratable with the Strategic LOCATE and tactical RESOLVE systems. Designed to extend the Locate baseline. The LOCATE family can be fully networked providing shared monitoring and accurate geolocation of both strategic and tactical targets.
                </p>
              </div>

            </div>
          </div>
        </section>


        <ProductContactSection text="To learn more about LOCATE-T and how it can benefit your organization, please contact us at" />
    </div>
    </DetailPageGate>
  )
}
