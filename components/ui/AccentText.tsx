import { Fragment } from "react";

/**
 * Renders a headline string, converting `*word*` segments into the
 * Instrument Serif italic accent treatment.
 */
export function AccentText({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <span key={i} className="accent-serif">
            {part.slice(1, -1)}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
