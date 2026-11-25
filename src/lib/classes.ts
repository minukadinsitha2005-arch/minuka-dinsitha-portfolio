/** Compose optional class names without adding a runtime styling dependency. */
export function classes(...values: (string | false | null | undefined)[]) {
  return values.filter(Boolean).join(" ");
}
