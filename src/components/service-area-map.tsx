"use client";

import type { LatLngBoundsExpression } from "leaflet";
import { Circle, CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";

import type { Location } from "@/lib/content";

type ServiceAreaMapProps = {
  locations: Array<Pick<Location, "slug" | "name" | "summary" | "latitude" | "longitude">>;
};

const dallasCenter: [number, number] = [32.8517, -96.7867];

export function ServiceAreaMap({ locations }: ServiceAreaMapProps) {
  const bounds: LatLngBoundsExpression = locations.map((location) => [location.latitude, location.longitude]);

  return (
    <MapContainer
      center={dallasCenter}
      zoom={10}
      scrollWheelZoom={false}
      className="h-[360px] w-full rounded-2xl border border-[#e8dbc8] md:h-[460px]"
      bounds={bounds}
      boundsOptions={{ padding: [30, 30] }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Circle
        center={dallasCenter}
        radius={26000}
        pathOptions={{ color: "#bb4b28", fillColor: "#bb4b28", fillOpacity: 0.08, weight: 1.5 }}
      />

      {locations.map((location) => (
        <CircleMarker
          key={location.slug}
          center={[location.latitude, location.longitude]}
          radius={9}
          pathOptions={{ color: "#1a2745", fillColor: "#bb4b28", fillOpacity: 0.95, weight: 2 }}
        >
          <Popup>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-[#1a2745]">{location.name}</p>
              <p className="text-xs text-[#4b5f86]">{location.summary}</p>
              <a href={`/locations/${location.slug}`} className="text-xs font-semibold text-[#bb4b28] underline">
                Open {location.name} page
              </a>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
