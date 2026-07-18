import { Link } from "react-router-dom";
import logoIconDark from "../assets/logo-icon.png";
import logoIconLight from "../assets/logo-icon-light.png";

/**
 * Transparent Trainer Adda brand mark (no white sticker background).
 * - variant="dark"  → black icon/text for light backgrounds (navbar)
 * - variant="light" → white icon/text for dark backgrounds (footer)
 */
export default function BrandLogo({
  variant = "dark",
  showTagline = true,
  to = "/",
  className = "",
  iconClassName = "h-10 sm:h-11 w-auto",
  asLink = true,
}) {
  const isLight = variant === "light";
  const icon = isLight ? logoIconLight : logoIconDark;
  const main = isLight ? "text-white" : "text-black";
  const muted = isLight ? "text-gray-300" : "text-gray-600";
  const lineMain = isLight ? "bg-white" : "bg-black";

  const content = (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3 min-w-0 ${className}`}>
      <img
        src={icon}
        alt="Trainer Adda"
        className={`${iconClassName} object-contain shrink-0`}
        draggable={false}
      />
      <span className="flex flex-col leading-none select-none">
        <span
          className={`text-[17px] sm:text-[20px] md:text-[22px] font-bold tracking-wide uppercase ${main}`}
        >
          Trainer <span className="text-[#C1272D]">Adda</span>
        </span>
        {showTagline && (
          <span className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-1.5">
            <span className="h-px w-3 sm:w-4 bg-[#C1272D]" />
            <span
              className={`text-[8px] sm:text-[9px] md:text-[10px] font-medium tracking-[0.12em] sm:tracking-[0.18em] uppercase ${muted}`}
            >
              Train. Empower. Excel.
            </span>
            <span className={`h-px w-3 sm:w-4 ${lineMain}`} />
          </span>
        )}
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link
      to={to}
      className="inline-flex shrink-0 cursor-pointer"
      aria-label="Trainer Adda Home"
    >
      {content}
    </Link>
  );
}
