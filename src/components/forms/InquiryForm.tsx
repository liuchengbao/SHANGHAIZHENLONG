"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import {
  inquirySchema,
  type InquiryFormData,
} from "@/lib/validators/inquiry";
import { Button } from "@/components/ui/Button";

type InquiryFormProps = {
  defaultProduct?: string;
  compact?: boolean;
  productOptions?: { value: string; label: string }[];
};

export function InquiryForm({
  defaultProduct = "",
  compact = false,
  productOptions = [],
}: InquiryFormProps) {
  const t = useTranslations("form");
  const tc = useTranslations("common");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { productInterest: defaultProduct, website: "" },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error ?? t("errors.submit"));
      }

      if (typeof window !== "undefined" && "gtag" in window) {
        (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.(
          "event",
          "generate_lead",
          { method: "inquiry_form", locale },
        );
      }
      setStatus("success");
      reset({ productInterest: defaultProduct, website: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : t("errors.submit"),
      );
    }
  };

  const fieldClass =
    "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100";
  const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";
  const errorClass = "mt-1 text-xs text-red-600";

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <h3 className="text-xl font-semibold text-emerald-900">
          {t("successTitle")}
        </h3>
        <p className="mt-2 text-emerald-800">{t("successMessage")}</p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          {t("sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-900">{t("title")}</h3>
          <p className="mt-1 text-sm text-slate-600">{t("description")}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t("name")} *
          </label>
          <input id="name" className={fieldClass} {...register("name")} />
          {errors.name && (
            <p className={errorClass}>{t("errors.name")}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            {t("company")}
          </label>
          <input id="company" className={fieldClass} {...register("company")} />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            {t("email")} *
          </label>
          <input
            id="email"
            type="email"
            className={fieldClass}
            {...register("email")}
          />
          {errors.email && (
            <p className={errorClass}>{t("errors.email")}</p>
          )}
        </div>

        <div>
          <label htmlFor="whatsapp" className={labelClass}>
            {t("whatsapp")}
          </label>
          <input id="whatsapp" className={fieldClass} {...register("whatsapp")} />
        </div>

        <div>
          <label htmlFor="country" className={labelClass}>
            {t("country")} *
          </label>
          <input id="country" className={fieldClass} {...register("country")} />
          {errors.country && (
            <p className={errorClass}>{t("errors.country")}</p>
          )}
        </div>

        <div>
          <label htmlFor="productInterest" className={labelClass}>
            {t("productInterest")} *
          </label>
          <select
            id="productInterest"
            className={fieldClass}
            defaultValue={defaultProduct}
            {...register("productInterest")}
          >
            <option value="">{t("selectProduct")}</option>
            {productOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            <option value="other">{t("otherProduct")}</option>
          </select>
          {errors.productInterest && (
            <p className={errorClass}>{t("errors.productInterest")}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="quantity" className={labelClass}>
            {t("quantity")}
          </label>
          <input id="quantity" className={fieldClass} {...register("quantity")} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            {t("message")} *
          </label>
          <textarea
            id="message"
            rows={5}
            className={fieldClass}
            placeholder={t("messagePlaceholder")}
            {...register("message")}
          />
          {errors.message && (
            <p className={errorClass}>{t("errors.message")}</p>
          )}
        </div>
      </div>

      
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        className="mt-6 w-full sm:w-auto"
        disabled={status === "loading"}
      >
        {status === "loading" ? tc("sending") : tc("submitInquiry")}
      </Button>
    </form>
  );
}
