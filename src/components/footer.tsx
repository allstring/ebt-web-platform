import { t } from "@/lib/i18n"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-4 lg:px-8">
        <div className="space-y-0 text-sm text-muted-foreground leading-relaxed my-4">
          <img src="/logo-footer.png" alt="EBTech" className="h-10" />
          <span className="text-lg font-semibold tracking-tight text-foreground">{t.footer.companyName}</span>
          <p>
            {t.footer.headquarters} : {t.footer.headquartersAddress}
          </p>
          <p>
            {t.footer.rndCenter} : {t.footer.rndAddress}
          </p>
          <p>{t.footer.phone} : +82-31-721-6375&nbsp;&nbsp;&nbsp;{t.footer.fax} : +82-31-721-6376&nbsp;&nbsp;&nbsp;{t.footer.email} : info@ebtech.kr</p>
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {t.footer.copyright} © {new Date().getFullYear()} {t.footer.companyName}. {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}
