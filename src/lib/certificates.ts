export const CERTIFICATES = [
  {
    key: "canopy",
    src: "/images/certificates/canopy.png",
    categories: ["awnings"],
  },
  {
    key: "pavilion",
    src: "/images/certificates/pavilion.png",
    categories: ["aluminum-gazebos"],
  },
  {
    key: "fence",
    src: "/images/certificates/fence.png",
    categories: ["aluminum-fences"],
  },
  {
    key: "gate",
    src: "/images/certificates/gate.png",
    categories: ["aluminum-doors"],
  },
] as const;

export function certificatesForCategory(category?: string) {
  if (!category) return [...CERTIFICATES];
  return CERTIFICATES.filter((item) =>
    (item.categories as readonly string[]).includes(category),
  );
}
