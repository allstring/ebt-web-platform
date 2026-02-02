import { forwardRef } from "react"
import { useLocale } from "@/lib/i18n"
import { useTheme } from "@/hooks/use-theme"
import LogoLight from "@/assets/images/navigation/EBT-logo.svg?react"
import LogoDark from "@/assets/images/navigation/EBT-logo--dark.svg?react"

// ============================================================================
// Footer Component
// 사이트 하단 푸터 영역 - 회사 정보 및 저작권 표시
// ============================================================================

// 회사 연락처 정보 (하드코딩된 값들)
const CONTACT_INFO = {
  phone: "+82-31-721-6375",
  fax: "+82-31-721-6376",
  email: "info@ebtech.kr",
} as const

interface FooterProps {
  /** snap-section 클래스 추가 여부 (스크롤 스냅 페이지용) */
  asSnapSection?: boolean
}

export const Footer = forwardRef<HTMLElement, FooterProps>(({ asSnapSection = false }, ref) => {
  const { t } = useLocale()
  const { isLight } = useTheme()
  return (
    <footer ref={ref} className={`border-t border-border bg-card ${asSnapSection ? "snap-section" : ""}`}>
      <div className="mx-auto max-w-5xl px-6 py-4 lg:px-8">
        {/* 회사 정보 섹션 */}
        <div className="space-y-1 text-sm text-muted-foreground leading-relaxed my-4">
          {/* 로고 - hover 시 부드러운 확대 효과 */}
          {isLight ? (
            <LogoDark className="h-6 w-auto object-contain" />
          ) : (
            <LogoLight className="h-6 w-auto object-contain" />
          )}
          <span className="sr-only">EBTech</span>

          {/* 회사명 */}
          <span className="block text-lg font-semibold tracking-tight text-foreground">
            {t.footer.companyName}
          </span>

          {/* 주소 정보 */}
          <p className="transition-colors duration-200 hover:text-foreground">
            {t.footer.headquarters} : {t.footer.headquartersAddress}
          </p>
          <p className="transition-colors duration-200 hover:text-foreground">
            {t.footer.rndCenter} : {t.footer.rndAddress}
          </p>

          {/* 연락처 정보 */}
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>
              {t.footer.phone} : {CONTACT_INFO.phone}
            </span>
            <span>
              {t.footer.fax} : {CONTACT_INFO.fax}
            </span>
            <span>
              {t.footer.email} :{" "}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="underline-offset-2 hover:underline hover:text-foreground transition-colors duration-200"
              >
                {CONTACT_INFO.email}
              </a>
            </span>
          </p>
        </div>

        {/* 저작권 섹션 */}
        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"