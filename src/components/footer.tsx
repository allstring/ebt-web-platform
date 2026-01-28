import { useLocale } from "@/lib/i18n"
import logo_footer from "@/assets/images/footer/EBT-logo--gray.png"
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

export function Footer() {
  const { t } = useLocale()

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-4 lg:px-8">
        {/* 회사 정보 섹션 */}
        <div className="space-y-1 text-sm text-muted-foreground leading-relaxed my-4">
          {/* 로고 - hover 시 부드러운 확대 효과 */}
          <img
            src={logo_footer}
            alt="EBTech"
            className="h-10 transition-transform duration-300 hover:scale-105"
          />

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
            <span>{t.footer.phone} : {CONTACT_INFO.phone}</span>
            <span>{t.footer.fax} : {CONTACT_INFO.fax}</span>
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
          <p className="text-xs text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
