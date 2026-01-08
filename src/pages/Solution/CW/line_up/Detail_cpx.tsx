import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

import { ApplicationItem } from "@/components/application-item"
import categoryCpxImg from "@/assets/images/cpx-bg.jpg"
import eseaRecImg from "@/assets/images/cpx.jpg"

import app1Img from "@/assets/images/app-1.jpg"
import app2Img from "@/assets/images/app-2.jpg"
import app3Img from "@/assets/images/app-4.jpg"
import app4Img from "@/assets/images/app-5.png"
import app5Img from "@/assets/images/app-6.png"
import app6Img from "@/assets/images/app-7.jpg"



export default function DetailEwsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">CHEMPRO X</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-s font-semibold uppercase tracking-wider text-muted-foreground">HANDHELD CHEMICAL DETECTOR</p>
            </div>
            </div>
            <div className="mx-auto max-w-10xl ">
            {/* width 100% 사진 */}
            <div className="w-full mb-12">
              <img
                src={categoryCpxImg}
                alt="Product Lineup"
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 한 줄짜리 큰 설명 */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-5xl lg:text-3xl font-medium text-foreground leading-relaxed">
              XPAND YOUR SAFETY
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS GoldenBat-EWS? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">WHAT IS CHEMPRO X?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
              ChemProX belongs to a new generation of chemical detectors, so, it allows for full situational awareness during field operations. It features a built-in simulation training mode and an embedded chemical database with operational instructions. As a result, ChemProX enables any team to detect and classify CWA’s and TIC’s.

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
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">KEY Benefits</h2>
            </div>

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Wide Range of Detectable CWAs & TICs</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Wireless Network Connectivity</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Built-in GPS and Group Location</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Simulation Training Mode</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Chemical Database and Instructions</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Optimized Usability</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Lowest Maintenance Costs in Its Class</span>
                </div>

                <div className="flex items-start gap-3 py-3">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">UAV & UGV Use Without Integration</span>
                </div>

                <div className="flex items-start gap-3 py-3 md:col-span-2">
                  <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-base text-foreground">Optional Full CBRN Detection Capability</span>
                </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Size</h3>
                <p className="text-sm text-muted-foreground">Approx. 160 x 100 x 50 mm (6.3"L x 3.9"W x 2"D)</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Weight</h3>
                <p className="text-sm text-muted-foreground">Approx. 770 g (27 oz.) (w/Li-Ion battery)</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Detection Technology</h3>
                <p className="text-sm text-muted-foreground mb-2">Orthogonal detection using:</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4 list-disc">
                  <li>Open-loop (aspirated) IMS cell</li>
                  <li>Multiple semiconductor sensors</li>
                </ul>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Detection Modes</h3>
                <p className="text-sm text-muted-foreground">CWA/TICs</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Training</h3>
                <p className="text-sm text-muted-foreground">Built-in training mode</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Connectivity</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>WLAN, WPAN, Radio Data</li>
                  <li>USB memory stick</li>
                  <li>Ethernet (optional accessory)</li>
                  <li>Up to 10 device per group with radio data</li>
                </ul>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">MIL Standard Compliance</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>MIL-STD-810G</li>
                  <li>MIL-STD-461G</li>
                  <li>MIL-STD-1275D</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2 italic">(full list of conducted tests available on request)</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">Dust & Water Resistance</h3>
                <p className="text-sm text-muted-foreground">IP67, MIL-STD-810G</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">Application</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
              ChemProX is a versatile chemical detector therefore, it can be used both as a handheld equipment, or as stand-off component, as part of a field deployable network. ChemProX chemical detection performance is proven to be effective many different applications. For example, in single use (when the device is used as a conventional chemical detector), group use, perimeter monitoring network use, unmanned ground and air vehicles use, among others.

              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ApplicationItem
                imageSrc={app1Img}
                imageAlt="Application 1"
                title="First Responders"
              />
              <ApplicationItem
                imageSrc={app2Img}
                imageAlt="Application 2"
                title="Military"
              />
              <ApplicationItem
                imageSrc={app3Img}
                imageAlt="Application 3"
                title="Mounting on Drone"
              />
              <ApplicationItem
                imageSrc={app4Img}
                imageAlt="Application 4"
                title="Border CBRN Monitoring"
              />
              <ApplicationItem
                imageSrc={app5Img}
                imageAlt="Application 5"
                title="Armoured CBRN Reconnaisance"
              />
              <ApplicationItem
                imageSrc={app6Img}
                imageAlt="Application 6"
                title="Light CBRN Reconnaisance"
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
