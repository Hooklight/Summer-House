"use client";

import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

import type { Location } from "@/lib/content";

const ServiceAreaMapNoSSR = dynamic(
  () => import("@/components/service-area-map").then((module) => module.ServiceAreaMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-[360px] w-full animate-pulse rounded-2xl border border-[#e8dbc8] bg-[#f9f3e8] md:h-[460px]" />
    ),
  },
);

type ServiceAreaMapShellProps = {
  locations: Array<Pick<Location, "slug" | "name" | "summary" | "latitude" | "longitude">>;
};

export function ServiceAreaMapShell({ locations }: ServiceAreaMapShellProps) {
  return <ServiceAreaMapNoSSR locations={locations} />;
}
