function hostLabel(url) {
  if (!url) return "proyecto";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/**
 * Marco tipo navegador para que las capturas se lean como mockups de producto,
 * no como JPG sueltos. Sin perspectiva 3D agresiva: encaja con el look studio.
 */
export default function BrowserMockup({
  src,
  alt = "",
  url,
  className = "",
  imgClass = "",
  aspect = "aspect-[16/10]",
  reveal = null,
}) {
  const host = hostLabel(url);

  return (
    <div
      className={`group/mock relative overflow-hidden rounded-xl border border-line bg-raised ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-ink/80 px-3 py-2.5 md:px-4">
        <div className="flex shrink-0 gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-paper/25" />
          <span className="h-2 w-2 rounded-full bg-paper/25" />
          <span className="h-2 w-2 rounded-full bg-paper/25" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mx-auto flex max-w-md items-center gap-2 truncate rounded-full border border-line bg-ink px-3 py-1">
            <span className="shrink-0 font-syne text-[9px] tracking-[0.14em] uppercase text-muted">
              https
            </span>
            <span className="truncate font-syne text-[10px] tracking-[0.04em] text-paper/55">
              {host}
            </span>
          </div>
        </div>
        <span className="hidden shrink-0 font-syne text-[9px] tracking-[0.16em] uppercase text-muted sm:inline">
          Live
        </span>
      </div>

      <div className={`relative overflow-hidden bg-ink ${aspect}`}>
        {reveal ? (
          reveal
        ) : (
          <img
            src={src}
            alt={alt}
            className={`h-full w-full object-cover object-top ${imgClass}`}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
