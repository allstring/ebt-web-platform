// src/components/CatalogRequestForm.tsx
// 카탈로그 요청 폼 - 페이지 접근과 무관, 요청만 처리
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function CatalogRequestForm() {
  const navigate = useNavigate();
  const { t } = useLocale();
  const { form } = t.detailPageGate;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // 콘솔에 폼 데이터 출력
    console.log("=== Catalog Request ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Company:", company);
    console.log("Timestamp:", new Date().toISOString());
    console.log("=======================");

    setTimeout(() => {
      toast.success(form.successMessage);
      setIsLoading(false);
      setIsSubmitted(true);
      // 2초 후 이전 페이지로 이동
      setTimeout(() => {
        navigate(-1);
      }, 2000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm text-muted-foreground">{form.successMessage}</p>
        <p className="text-xs text-muted-foreground mt-2">{form.redirectMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">{form.name}</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={form.namePlaceholder}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{form.email}</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={form.emailPlaceholder}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">{form.company}</Label>
        <Input
          id="company"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder={form.companyPlaceholder}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? form.submitting : form.button}
      </Button>
    </form>
  );
}
