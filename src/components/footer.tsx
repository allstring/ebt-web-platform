
export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-6 py-4 lg:px-8">
        <div className="space-y-0 text-sm text-muted-foreground leading-relaxed my-4">
          <img src="/logo-footer.png" alt="EBTech" className="h-10" />
          <span className="text-lg font-semibold tracking-tight text-foreground">EBT Corporation</span>
          <p>
            Headquarters : #504, 54, Changeop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of Korea
          </p>
          <p>
            R&amp;D Center : #B703, 43, Changeop-ro, Sujeong-gu, Seongnam-si, Gyeonggi-do, Republic of Korea
          </p>
          <p>Phone : +82-31-721-6375&nbsp;&nbsp;&nbsp;FAX : +82-31-721-6376&nbsp;&nbsp;&nbsp;E-Mail : info@ebtech.kr</p>
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Copyright © {new Date().getFullYear()} EBT Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
