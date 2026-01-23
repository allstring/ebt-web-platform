import Check from "lucide-react/dist/esm/icons/check";

import { ApplicationItem } from "@/components/application-item"
import { ProductContactSection } from "@/components/product-contact-section"
import { useLocale } from "@/lib/i18n"
import ranidxHeroImg from "@/assets/images/solution/NC/RanidX/hero.webp"
import ranidxImg1 from "@/assets/images/solution/NC/RanidX/main1.webp"
import ranidxImg2 from "@/assets/images/solution/NC/RanidX/main2.webp"

import app3Img from "@/assets/images/solution/NC/ranidx/app3.webp"
import app2Img from "@/assets/images/solution/NC/ranidx/app2.webp"
import app1Img from "@/assets/images/solution/NC/ranidx/app1.webp"
import app4Img from "@/assets/images/solution/NC/ranidx/app4.webp"
import app5Img from "@/assets/images/solution/NC/ranidx/app5.webp"
import app6Img from "@/assets/images/solution/NC/ranidx/app6.webp"
import app7Img from "@/assets/images/solution/NC/ranidx/app7.webp"
import app8Img from "@/assets/images/solution/NC/ranidx/app8.webp"

const applicationImages = [app1Img, app2Img, app3Img, app4Img, app5Img, app6Img, app7Img, app8Img]

export default function DetailRanidxPage() {
  const { t } = useLocale()
  const ranidx = t.ranidx

  return (
    <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">{ranidx.title}</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-s font-semibold uppercase tracking-wider text-muted-foreground">{ranidx.subtitle}</p>
            </div>
            </div>
            <div className="mx-auto max-w-10xl ">
            {/* width 100% 사진 */}
            <div className="w-full mb-12">
              <img
                src={ranidxHeroImg}
                alt={ranidx.title}
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 한 줄짜리 큰 설명 */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-5xl lg:text-3xl font-medium text-foreground leading-relaxed">
              {ranidx.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS RanidX? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{ranidx.whatIs.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {ranidx.whatIs.description}
              </p>
            </div>
          </div>
        </section>

        {/* 사진 섹션 - 2개 이미지 */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img
                src={ranidxImg1}
                alt={`${ranidx.title} - View 1`}
                className="w-full h-auto object-cover rounded-lg"
              />
              <img
                src={ranidxImg2}
                alt={`${ranidx.title} - View 2`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>


        {/* KEY Features */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{ranidx.benefits.title}</h2>
            </div>

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ranidx.benefits.items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 py-3 ${index === ranidx.benefits.items.length - 1 ? "md:col-span-2" : ""}`}
                  >
                    <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{ranidx.specs.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.size.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.size.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.weight.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.weight.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.material.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.material.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.detection.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.detection.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.detectedRadiation.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.detectedRadiation.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.doseRate.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.doseRate.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.energyRange.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.energyRange.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.communication.label}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {ranidx.specs.communication.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.powerInput.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.powerInput.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.tempOperating.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.tempOperating.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.tempStorage.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.tempStorage.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.humidity.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.humidity.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.dustWater.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.dustWater.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.shockResistance.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.shockResistance.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.vibrationResistance.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.vibrationResistance.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.emcOther.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.emcOther.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.chemproXDS.label}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {ranidx.specs.chemproXDS.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.warranty.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.warranty.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg md:col-span-2">
                <h3 className="text-lg font-medium text-foreground mb-3">{ranidx.specs.optionalAccessories.label}</h3>
                <p className="text-sm text-muted-foreground">{ranidx.specs.optionalAccessories.value}</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-6 italic">{ranidx.specs.milNote}</p>
          </div>
        </section>

        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{ranidx.application.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {ranidx.application.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ranidx.application.items.map((title, index) => (
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

        <ProductContactSection text={ranidx.contact.text} suffix={ranidx.contact.suffix} />
    </div>
  )
}
