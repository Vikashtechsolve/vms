import { useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";

/**
 * Type-to-filter dropdown used for the state/city pickers on the trainer form.
 * Keeps the same look as `.input-field` so it blends with the rest of the form.
 */
export default function SearchableSelect({
  value,
  onChange,
  options,
  placeholder = "Select",
  searchPlaceholder = "Type to search...",
  emptyMessage = "No matches found",
  disabled = false,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const wrapRef = useRef(null);
  const searchRef = useRef(null);
  const listRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? options.filter((o) => o.toLowerCase().includes(q)) : options;
  }, [options, query]);

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActiveIndex(Math.max(options.indexOf(value), 0));
    requestAnimationFrame(() => searchRef.current?.focus());
  }, [open, options, value]);

  useEffect(() => {
    if (!open) return;
    listRef.current
      ?.querySelector('[data-active="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex, query]);

  function commit(option) {
    onChange(option);
    setOpen(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (!open) {
      if (e.key === "Enter" || e.key === "ArrowDown") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[activeIndex]) commit(filtered[activeIndex]);
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div className="relative" ref={wrapRef} onKeyDown={handleKeyDown}>
      <button
        type="button"
        onClick={() => !disabled && setOpen((o) => !o)}
        disabled={disabled}
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`input-field flex items-center justify-between gap-2 text-left ${
          disabled ? "cursor-not-allowed bg-gray-100 text-gray-400" : "cursor-pointer"
        } ${open ? "border-[#C1272D] ring-2 ring-[#C1272D]/50" : ""}`}
      >
        <span className={`truncate ${value ? "text-gray-900" : "text-gray-400"}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180 text-[#C1272D]" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
          <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-3 py-2">
            <Search className="h-4 w-4 shrink-0 text-gray-400" />
            <input
              ref={searchRef}
              type="text"
              value={query}
              placeholder={searchPlaceholder}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(0);
              }}
              autoComplete="off"
              className="w-full border-0 bg-transparent p-0 text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <ul ref={listRef} role="listbox" className="max-h-60 overflow-y-auto p-1.5">
            {filtered.length === 0 && (
              <li className="px-3 py-4 text-center text-sm text-gray-500">{emptyMessage}</li>
            )}
            {filtered.map((option, i) => (
              <li key={option}>
                <div
                  role="option"
                  aria-selected={option === value}
                  data-active={i === activeIndex}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => commit(option)}
                  className={`flex cursor-pointer items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                    i === activeIndex ? "bg-[#C1272D]/5" : ""
                  } ${option === value ? "font-semibold text-[#C1272D]" : "text-gray-700"}`}
                >
                  <span className="truncate">{option}</span>
                  {option === value && <Check className="h-4 w-4 shrink-0" />}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
