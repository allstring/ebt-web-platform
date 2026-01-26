// src/components/DetailPageGate.tsx
// Detail 페이지 접근 게이트 - Cookie 기반 인증
import { useState, useEffect, type ReactNode } from "react";
import { useLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { CatalogRequestForm } from "./CatalogRequestForm";
import { cn } from "@/lib/utils";
import Check from "lucide-react/dist/esm/icons/check";
import Shield from "lucide-react/dist/esm/icons/shield";

const COOKIE_NAME = "cookie-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1년

// 쿠키 유틸리티 함수
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() ?? null;
  }
  return null;
}

function setCookie(name: string, value: string, maxAge: number): void {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; SameSite=Strict; Secure`;
}

function deleteCookie(name: string): void {
  document.cookie = `${name}=; path=/; max-age=0`;
}

interface DetailPageGateProps {
  children: ReactNode;
}

type ActiveTab = "consent" | "catalog";

export function DetailPageGate({ children }: DetailPageGateProps) {
  const { t } = useLocale();
  const { title, description, tabs, consent } = t.detailPageGate;
  const [isGranted, setIsGranted] = useState(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>("consent");
  const [hasMounted, setHasMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Cookie 확인 - accepted인 경우만 통과
    const consentCookie = getCookie(COOKIE_NAME);
    if (consentCookie === "accepted") {
      setIsGranted(true);
    }

    // AccessGate에서 Accept 시 이벤트 수신
    const handleConsentAccepted = () => {
      setIsGranted(true);
    };
    window.addEventListener("cookie-consent-accepted", handleConsentAccepted);
    return () => window.removeEventListener("cookie-consent-accepted", handleConsentAccepted);
  }, []);

  const handleGrantAccess = () => {
    if (!isChecked) return;
    setCookie(COOKIE_NAME, "accepted", COOKIE_MAX_AGE);
    setIsGranted(true);
  };

  if (!hasMounted) {
    return null;
  }

  if (isGranted) {
    return <>{children}</>;
  }

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-card/50">
      <div className="mx-auto max-w-lg px-6 lg:px-8 py-16">
        <div className="p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Title & Description */}
          <h1 className="text-2xl font-semibold tracking-tight text-foreground text-center">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-center">
            {description}
          </p>

          {/* Tabs */}
          <div className="mt-8">
            <div className="grid grid-cols-2 gap-1 rounded-lg bg-muted p-1">
              <button
                onClick={() => setActiveTab("consent")}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-all",
                  activeTab === "consent"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                )}
              >
                {tabs.consent}
              </button>
              <button
                onClick={() => setActiveTab("catalog")}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-all",
                  activeTab === "catalog"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                )}
              >
                {tabs.email}
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              {activeTab === "consent" && (
                <div className="space-y-5">
                  {/* Custom Checkbox */}
                  <label
                    htmlFor="terms"
                    className={cn(
                      "flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all",
                      isChecked
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    )}
                  >
                    <div className="relative flex-shrink-0">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className={cn(
                        "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                        isChecked
                          ? "bg-primary border-primary"
                          : "border-muted-foreground/40"
                      )}>
                        {isChecked && <Check className="w-3.5 h-3.5 text-primary-foreground" />}
                      </div>
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">
                      {consent.label}
                    </span>
                  </label>

                  {/* Submit Button */}
                  <Button
                    onClick={handleGrantAccess}
                    className={cn(
                      "w-full transition-all",
                      !isChecked && "opacity-50 cursor-not-allowed"
                    )}
                    disabled={!isChecked}
                  >
                    {consent.button}
                  </Button>
                </div>
              )}

              {activeTab === "catalog" && (
                <CatalogRequestForm />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 디버깅용 유틸리티
export const DetailPageGateDebug = {
  getStatus: () => getCookie(COOKIE_NAME),
  reset: () => {
    deleteCookie(COOKIE_NAME);
    console.log("Cookie consent cleared. Refresh the page.");
  },
  grant: () => {
    setCookie(COOKIE_NAME, "accepted", COOKIE_MAX_AGE);
    console.log("Access granted. Refresh the page.");
  },
};

if (import.meta.env.DEV) {
  (window as unknown as { DetailPageGateDebug: typeof DetailPageGateDebug }).DetailPageGateDebug = DetailPageGateDebug;
}
