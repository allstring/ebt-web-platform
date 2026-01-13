import categoryPerceiveImg from "@/assets/images/perceive_bg2.jpg"
import eseaRecImg from "@/assets/images/perceive2.jpg"
export default function DetailEwsPage() {
  return (
    <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">PERCEIVE Multi-Role (MR)®</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-s font-semibold uppercase tracking-wider text-muted-foreground">THE NEXT GENERATION IN INTEGRATED WIDEBAND SENSOR</p>
            </div>
            </div>
            <div className="mx-auto max-w-10xl ">
            {/* width 100% 사진 */}
            <div className="w-full mb-12">
              <img
                src={categoryPerceiveImg}
                alt="Product Lineup"
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 한 줄짜리 큰 설명 */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-5xl lg:text-3xl font-medium text-foreground leading-relaxed">
              The next generation in integrated wideband sensor
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS GoldenBat-EWS? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">WHAT IS PERCEIVE MR®?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
              PERCEIVE MR® is a Small Form Factor Antenna Head, developed for use at the cutting edge of Electronic Surveillance. It is the first tactical wideband integrated antenna head to utilise both Adaptive Beamforming and Super Resolution Direction Finding technologies in such a small sensor. This approach allows operators to ‘see’ through the clutter and report pinpoint position fixes with the highest degree of accuracy and the smallest sensor profile.  
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
                <h3 className="text-lg font-medium text-foreground mb-2">100MHz Instantaneous Bandwidth</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Covering 2MHz to 6GHz for comprehensive signal detection and analysis.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Super Resolution Direction Finding</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Separates multiple signals on the same channel with precision.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">32 Digital Drop Channels</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Multiple simultaneous channel monitoring and analysis capabilities.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Adaptive Digital Beamforming</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Increases sensitivity and reduces co-adjacent channel interference.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">2°RMS DF Accuracy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Azimuth and Elevation direction finding (30MHz - 6GHz).
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Fast Hopper Intercept</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Effective intercept of frequency-hopping signals.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">Dual GNSS Compassing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  With MEMS inertial sensor data and magnetic compass for accurate positioning.
                </p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-2">PREFIX/VIPER Software</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For laptop or screen use with intuitive interface.
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
                <h3 className="text-lg font-medium text-foreground mb-3">Intercept Frequency Range</h3>
                <p className="text-sm text-muted-foreground">2MHz to 6GHz</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Direction Finding Frequency Range</h3>
                <p className="text-sm text-muted-foreground">30MHz to 6GHz</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Direction Finding Accuracy</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>30MHz to 500MHz: 2.5 degrees RMS</li>
                  <li>500MHz to 6GHz: 1.2 degrees RMS</li>
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Scan Speed</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Fast Scan: 3GHz/sec</li>
                  <li>DF Scan: 150MHz/sec</li>
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">LPI Performance</h3>
                <p className="text-sm text-muted-foreground">Up to 1000 Hops/sec</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">System Weight</h3>
                <p className="text-sm text-muted-foreground">23Kg (Manportable excle batteries)</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Radiohead Weight</h3>
                <p className="text-sm text-muted-foreground">10Kg</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">System Volume (Radiohead)</h3>
                <p className="text-sm text-muted-foreground">0.28m × 0.46m</p>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg md:col-span-2">
                <h3 className="text-lg font-medium text-foreground mb-3">Software</h3>
                <p className="text-sm text-muted-foreground">Prefix for laptop or Tacfix for tablet</p>
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
    </div>
  )
}
