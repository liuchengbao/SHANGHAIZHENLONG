import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types";

export function ProductCard({
  product,
  viewDetailsLabel,
}: {
  product: Product;
  viewDetailsLabel: string;
}) {
  return (
    <article className="group h-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm transition hover:border-[var(--accent)]/30 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="line-clamp-2 text-base font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">
          {product.shortDescription}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent-dark)] transition hover:text-[var(--accent)]"
        >
          {viewDetailsLabel}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
