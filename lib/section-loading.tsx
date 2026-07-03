/** Placeholder while lazy-loaded page sections download. */
export function SectionLoading({ minHeight = 240 }: { minHeight?: number }) {
  return (
    <div
      className="bg-bg"
      style={{ minHeight }}
      aria-hidden
    />
  );
}
