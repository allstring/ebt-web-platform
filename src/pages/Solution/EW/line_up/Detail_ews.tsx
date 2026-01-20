import categoryBbatsImg from "@/assets/images/gbews-bg_censored.jpg"
import eseaRecImg from "@/assets/images/esea_rec.png"
export default function DetailEwsPage() {
  return (
    <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">GoldenBat-EWS</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-s font-semibold uppercase tracking-wider text-muted-foreground">Your Mobile Electronic Warfare Solution</p>
            </div>
            </div>
            <div className="mx-auto max-w-10xl ">
            {/* width 100% 사진 */}
            <div className="w-full mb-12">
              <img
                src={categoryBbatsImg}
                alt="Product Lineup"
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 한 줄짜리 큰 설명 */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-5xl lg:text-3xl font-medium text-foreground leading-relaxed">
              Dominate the Electromagnetic Spectrum from Anywhere
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS GoldenBat-EWS? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">WHAT IS GoldenBat-EWS?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                GoldenBat-EWS is a vehicle-mounted electronic warfare (EW) system designed to provide you with unparalleled situational awareness and control over the electromagnetic spectrum, right where you need it. Combining electronic support (ES) and electronic attack (EA) capabilities, GoldenBat-EWS empowers your forces with the intelligence needed to gain a decisive advantage on the battlefield, regardless of location.
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
                style={{
                  filter: "invert(1) brightness(2)", // 대충 검은색을 흰색처럼
                  mixBlendMode: "difference",
                }}
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
        </section>

        {/* Specifications */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">Specifications</h2>
            </div>

            <div className="space-y-12">
              {/* ES Section */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">ES</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">CESM</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>30MHz - 6GHz (Optional up to 18GHz)</li>
                      <li>Direction Finding against hoppers of up to 1000 hops per second</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">RESM</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>2GHz - 18GHz</li>
                      <li>Full 360° Azimuth Coverage</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EA Section */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">EA</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">Rx Antenna</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>30MHz - 6GHz</li>
                      <li>6-18GHz(Option)</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">Tx Antenna</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>30MHz - 6GHz</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg md:col-span-2">
                    <h4 className="text-lg font-medium text-foreground mb-3">Jamming Mode</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>Brute Force Mode(Tone, Noise, Multi Tone, Seep, AM modulation)</li>
                      <li>Barrage Mode</li>
                      <li>Response Mode</li>
                      <li>Sequential Brute Mode</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* SW Section */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">SW</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">Signal Monitoring</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Monitoring communication signals with a broadband spectrum
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">Signal Identification/Signal Classification</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Accurate signal identification and classification by linking with database and map
                    </p>
                  </div>
                  <div className="p-6 bg-card border border-border rounded-lg">
                    <h4 className="text-lg font-medium text-foreground mb-3">Mission Planning/Signal Analysis</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Workflow-based mission planning, execution, and reporting functions advanced signal analysis functions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To learn more about GoldenBat-EWS and how it can benefit your organization,
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
    </div>
  )
}
