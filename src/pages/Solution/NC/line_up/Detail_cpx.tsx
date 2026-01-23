import Check from "lucide-react/dist/esm/icons/check";

import { ApplicationItem } from "@/components/application-item"
import { ProductContactSection } from "@/components/product-contact-section"
import { useLocale } from "@/lib/i18n"
import categoryCpxImg from "@/assets/images/cpx-bg.jpg"
import eseaRecImg from "@/assets/images/cpx.jpg"

import app1Img from "@/assets/images/app-1.jpg"
import app2Img from "@/assets/images/app-2.jpg"
import app3Img from "@/assets/images/app-4.jpg"
import app4Img from "@/assets/images/app-5.png"
import app5Img from "@/assets/images/app-6.png"
import app6Img from "@/assets/images/app-7.jpg"

const applicationImages = [app1Img, app2Img, app3Img, app4Img, app5Img, app6Img]

export default function DetailCpxPage() {
  const { t } = useLocale()
  const cpx = t.cpx

  return (
    <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 제목 */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-foreground">{cpx.title}</h1>
            </div>

            {/* 소제목 */}
            <div className="mb-8 text-center">
              <p className="text-s font-semibold uppercase tracking-wider text-muted-foreground">{cpx.subtitle}</p>
            </div>
            </div>
            <div className="mx-auto max-w-10xl ">
            {/* width 100% 사진 */}
            <div className="w-full mb-12">
              <img
                src={categoryCpxImg}
                alt={cpx.title}
                className="w-full h-auto object-cover"
              />
            </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* 한 줄짜리 큰 설명 */}
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-5xl lg:text-3xl font-medium text-foreground leading-relaxed">
              {cpx.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IS CHEMPRO X? */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{cpx.whatIs.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {cpx.whatIs.description}
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
                alt={cpx.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>


        {/* KEY Benefits */}
        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{cpx.benefits.title}</h2>
            </div>

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cpx.benefits.items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 py-3 ${index === cpx.benefits.items.length - 1 ? "md:col-span-2" : ""}`}
                  >
                    <Check className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-base text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-24 lg:py-32 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">{cpx.specs.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{cpx.specs.size.label}</h3>
                <p className="text-sm text-muted-foreground">{cpx.specs.size.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{cpx.specs.weight.label}</h3>
                <p className="text-sm text-muted-foreground">{cpx.specs.weight.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{cpx.specs.detection.label}</h3>
                <p className="text-sm text-muted-foreground mb-2">{cpx.specs.detection.description}</p>
                <ul className="space-y-1 text-sm text-muted-foreground ml-4 list-disc">
                  {cpx.specs.detection.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{cpx.specs.modes.label}</h3>
                <p className="text-sm text-muted-foreground">{cpx.specs.modes.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{cpx.specs.training.label}</h3>
                <p className="text-sm text-muted-foreground">{cpx.specs.training.value}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{cpx.specs.connectivity.label}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {cpx.specs.connectivity.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{cpx.specs.milStandard.label}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {cpx.specs.milStandard.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-2 italic">{cpx.specs.milStandard.note}</p>
              </div>

              <div className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-medium text-foreground mb-3">{cpx.specs.dustWater.label}</h3>
                <p className="text-sm text-muted-foreground">{cpx.specs.dustWater.value}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 border-t border-border">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-4xl mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground mb-6">{cpx.application.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {cpx.application.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cpx.application.items.map((title, index) => (
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

        <ProductContactSection text={cpx.contact.text} suffix={cpx.contact.suffix} />
    </div>
  )
}
