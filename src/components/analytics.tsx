"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

type AnalyticsProps = {
  measurementId: string;
};

export function Analytics({ measurementId }: AnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    trackEvent("page_view", {
      page_path: pagePath,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    function handleTrackedClicks(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");

      if (!link) {
        return;
      }

      const phoneLocation = link.getAttribute("data-track-phone");
      if (phoneLocation) {
        trackEvent("phone_click", {
          event_category: "contact",
          event_label: phoneLocation,
        });
      }

      const ctaLabel = link.getAttribute("data-track-cta");
      if (ctaLabel) {
        trackEvent("cta_click", {
          event_category: "engagement",
          event_label: ctaLabel,
        });
      }
    }

    document.addEventListener("click", handleTrackedClicks);
    return () => document.removeEventListener("click", handleTrackedClicks);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
