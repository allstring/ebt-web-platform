import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

import { ApplicationItem } from "@/components/application-item"
import categoryNcmImg from "@/assets/images/ncm-bg.jpg"
import eseaRecImg from "@/assets/images/ncm.jpg"

import app1Img from "@/assets/images/app-b1.png"
import app2Img from "@/assets/images/app-b2.png"
import app3Img from "@/assets/images/app-b3.png"
import app4Img from "@/assets/images/app-b4.png"
import app5Img from "@/assets/images/app-b5.png"
import app6Img from "@/assets/images/app-b6.png"

import networkImg from "@/assets/images/ncm_network.png"

export default function DetailEwsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">NC MONITORING SYSTEM</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-s font-semibold uppercase tracking-wider text-muted-foreground">DETECTION SYSTEM COMPATIBLE CHEMICAL DETECTOR</p>
            </div>
            </div>
            <div className="mx-auto max-w-10xl ">
            {/* width 100% 사진 */}
            <div className="w-full mb-12">
              <img
                src={categoryNcmImg}
                alt="Product Lineup"
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 한 줄짜리 큰 설명 */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-5xl lg:text-3xl font-medium text-foreground leading-relaxed">
              ONE DETECTOR TO BIND THEM ALL
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS GoldenBat-EWS? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">WHAT IS NC MONITORING SYSTEM?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
              One detector to bind them all. NC MONITORING SYSTEM is a chemical detector for fixed installations, which allows for both independent usage and system integration, featuring a local display with full CBRN system status.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              Designed and developed for being a resourceful instrument, NC MONITORING SYSTEM permanently monitors, detects and classifies CWA’s and TIC’s, while it can serve as a network melting pot for other system components communication.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
              NC MONITORING SYSTEM combines chemical detector performance and CBRN System Monitoring capabilities. All connected CBRN System network devices’ statuses can be checked in ChemProX-DS user interface. Featuring industry-leading sensitivity and false alarm rejection, NC MONITORING SYSTEM is the most user friendly and low-maintenance package of its class.
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


        {/* KEY Benefits */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">KEY FEATURES</h2>
            </div>

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">24/7 chemical detection (CWA/TICs)</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Gamma-ray and Neutron detection</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Versatile communication and connectivity</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Local display with full system status</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Built-in maintenance & instruction tools for operator guidance</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Robust design for indoor & outdoor applications</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Integrate to 3rd party systems (Modbus interface)</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Automatic relay control</span>
                </div>

                <div className="flex items-start gap-3 py-3 md:col-span-2">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">OCompatible with previous Environics systems</span>
                </div>

                <div className="flex items-start gap-3 py-3 md:col-span-2">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Online software updates available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">System Configuration</h2>
            </div>
            <div>
            <div className="w-full flex justify-center">
              <img
                src={networkImg}
                alt="GoldenBat-EWS"
                className="m-auto h-auto object-cover rounded-lg"
                // style={{
                //   filter: "invert(1) brightness(2)", // 대충 검은색을 흰색처럼
                //   mixBlendMode: "difference",
                // }}
              />
            </div>
            </div>
          </div>
        </section>


        {/* Specifications */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">Specifications</h2>
            </div>

            {/* ChemPro-X DS Specifications */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-foreground mb-6">(ChemPro-X DS)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-background border border-border rounded-lg">
                  <h4 className="text-lg font-medium text-foreground mb-3">Size</h4>
                  <p className="text-sm text-muted-foreground">Approx. 240 x 230 x 78 mm (9.4"L x 9"W x 3"D)</p>
                </div>

                <div className="p-6 bg-background border border-border rounded-lg">
                  <h4 className="text-lg font-medium text-foreground mb-3">Weight</h4>
                  <p className="text-sm text-muted-foreground">Approx. 2.5 kg (88.9 oz)</p>
                </div>

                <div className="p-6 bg-background border border-border rounded-lg">
                  <h4 className="text-lg font-medium text-foreground mb-3">Detection Technology</h4>
                  <p className="text-sm text-muted-foreground mb-2">Orthogonal detection using:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4 list-disc">
                    <li>Open-loop (aspirated) IMS cell</li>
                    <li>Multiple semiconductor sensors</li>
                    <li>Under exemption limit Ni-63 (90MBq) radiation source</li>
                  </ul>
                </div>

                <div className="p-6 bg-background border border-border rounded-lg">
                  <h4 className="text-lg font-medium text-foreground mb-3">Detection Modes</h4>
                  <p className="text-sm text-muted-foreground">CWA, TIC</p>
                </div>

                <div className="p-6 bg-background border border-border rounded-lg">
                  <h4 className="text-lg font-medium text-foreground mb-3">Power</h4>
                  <p className="text-sm text-muted-foreground">9-33 VDC (MIL-STD-1275)</p>
                </div>

                <div className="p-6 bg-background border border-border rounded-lg">
                  <h4 className="text-lg font-medium text-foreground mb-3">Interface Protocol</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Modbus TCP/IP (Ethernet)</li>
                    <li>Modbus RTU (RS-485/RS-422)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Radioactive detector Specifications */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">(Radioactive detector)</h3>
              
              {/* Sensor (Gamma-Ray) */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">Sensor (Gamma-Ray)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Type</h5>
                    <p className="text-sm text-muted-foreground">NaI(Tl) Scintillator(Low Range) Temperature Compensated 5 level Energy Compensated Semiconductor(High Range)</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Range</h5>
                    <p className="text-sm text-muted-foreground">0.001 uSv/h ~ 4 Sv/h</p>
                    <p className="text-sm text-muted-foreground">error &lt;15%</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Sensitivity</h5>
                    <p className="text-sm text-muted-foreground">&gt; 30000 cpm/uSv/h</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Energy Range</h5>
                    <p className="text-sm text-muted-foreground">50 keV ~ 3000 keV</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Response Time</h5>
                    <p className="text-sm text-muted-foreground">&lt; 2s</p>
                  </div>
                </div>
              </div>

              {/* Sensor (Neutron) */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">Sensor (Neutron)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Type</h5>
                    <p className="text-sm text-muted-foreground">6LiF + ZnS:Ag Scintillator</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Range</h5>
                    <p className="text-sm text-muted-foreground">0~ 1,000,000 CPM</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Efficiency</h5>
                    <p className="text-sm text-muted-foreground">Thermal N : &gt; 55%</p>
                    <p className="text-sm text-muted-foreground">Fast N : &gt;1%</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Range</h5>
                    <p className="text-sm text-muted-foreground">1 uSv/h ~ 10 Sv/h</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Energy</h5>
                    <p className="text-sm text-muted-foreground">0.025 eV ~ 10 Mev</p>
                  </div>
                </div>
              </div>

              {/* Other */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Other</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Power</h5>
                    <p className="text-sm text-muted-foreground">DC 9~ 18V Power &lt;3W</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Communication</h5>
                    <p className="text-sm text-muted-foreground">RS485, RS232, 9600 bps, 8bit, 1stop, No</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Size</h5>
                    <p className="text-sm text-muted-foreground">Body : dia 51mm X h 187 mm ~ 1200 g</p>
                    <p className="text-sm text-muted-foreground">Stand : dia 150 mm x h 133mm ~150 g</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Material</h5>
                    <p className="text-sm text-muted-foreground">Body : SUS304 (2mm thickness)</p>
                    <p className="text-sm text-muted-foreground">Stand : ABS(black) - 3d printed</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">Miscellaneous</h5>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>Start Time : &lt; 30 sec</p>
                      <p>Protection : IP67</p>
                      <p>Operation Temp : -30 ~ 50 'C</p>
                      <p>Shelf Temp : -40 ~70 'C</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">Application</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
              NC Monitoring System is designed in a rugged housing to endure harsh and demanding environmental conditions, making it suitable for mobile and stationary detection systems. This includes platforms such as vessels, military vehicles, and critical infrastructures.

              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ApplicationItem
                imageSrc={app1Img}
                imageAlt="Application 1"
                title="Naval & Maritime CBRN Monitoring"
              />
              <ApplicationItem
                imageSrc={app2Img}
                imageAlt="Application 2"
                title="Armoured CBRN Reconnaissance"
              />
              <ApplicationItem
                imageSrc={app3Img}
                imageAlt="Application 3"
                title="Armoured CBRN Monitoring"
              />
              <ApplicationItem
                imageSrc={app4Img}
                imageAlt="Application 4"
                title="Light CBRN Reconnaissance"
              />
              <ApplicationItem
                imageSrc={app5Img}
                imageAlt="Application 5"
                title="Building CBRN Monitoring"
              />
              <ApplicationItem
                imageSrc={app6Img}
                imageAlt="Application 6"
                title="Shelter CBRN Monitoring"
              />
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                To learn more about CHEMPRO X and how it can benefit your organization,
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
