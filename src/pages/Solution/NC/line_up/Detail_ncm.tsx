import Check from "lucide-react/dist/esm/icons/check";

import { ApplicationItem } from "@/components/application-item"
import { ProductContactSection } from "@/components/product-contact-section"
import { useLocale } from "@/lib/i18n"
import categoryNcmImg from "@/assets/images/solution/NC/NC-MONITORING-SYSTEM/hero.webp"
import eseaRecImg from "@/assets/images/solution/NC/NC-MONITORING-SYSTEM/main.webp"
import { DetailPageGate } from "@/components/DetailPageGate";

import app1Img from "@/assets/images/solution/NC/NC-MONITORING-SYSTEM/app1.webp"
import app2Img from "@/assets/images/solution/NC/NC-MONITORING-SYSTEM/app2.webp"
import app3Img from "@/assets/images/solution/NC/NC-MONITORING-SYSTEM/app3.webp"
import app4Img from "@/assets/images/solution/NC/NC-MONITORING-SYSTEM/app4.webp"
import app5Img from "@/assets/images/solution/NC/NC-MONITORING-SYSTEM/app5.webp"
import app6Img from "@/assets/images/solution/NC/NC-MONITORING-SYSTEM/app6.webp"
import app7Img from "@/assets/images/solution/NC/NC-MONITORING-SYSTEM/app7.webp"
import app8Img from "@/assets/images/solution/NC/NC-MONITORING-SYSTEM/app8.webp"

import networkImg from "@/assets/images/solution/NC/NC-MONITORING-SYSTEM/schema.webp"

const applicationImages = [app1Img, app2Img, app3Img, app4Img, app5Img, app6Img, app7Img, app8Img]

export default function DetailNcmPage() {
  const { t } = useLocale()
  const ncm = t.ncm

  return (
    <DetailPageGate>
      <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">{ncm.title}</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{ncm.subtitle}</p>
            </div>
          </div>

          {/* Full-width Hero Image */}
          <div className="w-full mb-12">
            <img
              src={categoryNcmImg}
              alt={ncm.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl lg:text-4xl font-medium text-foreground leading-relaxed">
                {ncm.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS NC MONITORING SYSTEM? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{ncm.whatIs.title}</h2>
              {ncm.whatIs.descriptions.map((desc, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-4 last:mb-0">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* 사진 섹션 */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="w-full">
              <img
                src={eseaRecImg}
                alt={ncm.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>


        {/* KEY FEATURES */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{ncm.features.title}</h2>
            </div>

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ncm.features.items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 py-3 ${index >= ncm.features.items.length - 2 ? "md:col-span-2" : ""}`}
                  >
                    <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* System Configuration */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{ncm.systemConfig.title}</h2>
            </div>
            <div>
            <div className="w-full flex justify-center">
              <img
                src={networkImg}
                alt={ncm.systemConfig.title}
                className="m-auto h-auto object-cover rounded-lg"
              />
            </div>
            </div>
          </div>
        </section>


        {/* Specifications */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{ncm.specs.title}</h2>
            </div>

            {/* ChemPro-X DS Specifications */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-foreground mb-6">{ncm.specs.chemproDS.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-background border border-border rounded-lg">
                  <h4 className="text-lg font-medium text-foreground mb-3">{ncm.specs.chemproDS.size.label}</h4>
                  <p className="text-sm text-muted-foreground">{ncm.specs.chemproDS.size.value}</p>
                </div>

                <div className="p-6 bg-background border border-border rounded-lg">
                  <h4 className="text-lg font-medium text-foreground mb-3">{ncm.specs.chemproDS.weight.label}</h4>
                  <p className="text-sm text-muted-foreground">{ncm.specs.chemproDS.weight.value}</p>
                </div>

                <div className="p-6 bg-background border border-border rounded-lg">
                  <h4 className="text-lg font-medium text-foreground mb-3">{ncm.specs.chemproDS.detection.label}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{ncm.specs.chemproDS.detection.description}</p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4 list-disc">
                    {ncm.specs.chemproDS.detection.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-background border border-border rounded-lg">
                  <h4 className="text-lg font-medium text-foreground mb-3">{ncm.specs.chemproDS.modes.label}</h4>
                  <p className="text-sm text-muted-foreground">{ncm.specs.chemproDS.modes.value}</p>
                </div>

                <div className="p-6 bg-background border border-border rounded-lg">
                  <h4 className="text-lg font-medium text-foreground mb-3">{ncm.specs.chemproDS.power.label}</h4>
                  <p className="text-sm text-muted-foreground">{ncm.specs.chemproDS.power.value}</p>
                </div>

                <div className="p-6 bg-background border border-border rounded-lg">
                  <h4 className="text-lg font-medium text-foreground mb-3">{ncm.specs.chemproDS.interface.label}</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {ncm.specs.chemproDS.interface.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Radioactive detector Specifications */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">{ncm.specs.radioactive.title}</h3>

              {/* Sensor (Gamma-Ray) */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">{ncm.specs.radioactive.gamma.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.gamma.type.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.gamma.type.value}</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.gamma.range.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.gamma.range.value}</p>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.gamma.range.error}</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.gamma.sensitivity.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.gamma.sensitivity.value}</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.gamma.energyRange.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.gamma.energyRange.value}</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.gamma.responseTime.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.gamma.responseTime.value}</p>
                  </div>
                </div>
              </div>

              {/* Sensor (Neutron) */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">{ncm.specs.radioactive.neutron.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.neutron.type.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.neutron.type.value}</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.neutron.range.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.neutron.range.value}</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.neutron.efficiency.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.neutron.efficiency.thermal}</p>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.neutron.efficiency.fast}</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.neutron.rangeAlt.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.neutron.rangeAlt.value}</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.neutron.energy.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.neutron.energy.value}</p>
                  </div>
                </div>
              </div>

              {/* Other */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">{ncm.specs.radioactive.other.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.other.power.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.other.power.value}</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.other.communication.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.other.communication.value}</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.other.size.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.other.size.body}</p>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.other.size.stand}</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.other.material.label}</h5>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.other.material.body}</p>
                    <p className="text-sm text-muted-foreground">{ncm.specs.radioactive.other.material.stand}</p>
                  </div>

                  <div className="p-6 bg-background border border-border rounded-lg">
                    <h5 className="text-lg font-medium text-foreground mb-3">{ncm.specs.radioactive.other.misc.label}</h5>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>{ncm.specs.radioactive.other.misc.startTime}</p>
                      <p>{ncm.specs.radioactive.other.misc.protection}</p>
                      <p>{ncm.specs.radioactive.other.misc.operationTemp}</p>
                      <p>{ncm.specs.radioactive.other.misc.shelfTemp}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{ncm.application.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {ncm.application.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ncm.application.items.map((title, index) => (
                <ApplicationItem
                  key={index}
                  imageSrc={applicationImages[index]}
                  imageAlt={title}
                  title={title}
                />
              ))}
            </div>
          </div>
        </section>

        <ProductContactSection />
    </div>
    </DetailPageGate>
  )
}
