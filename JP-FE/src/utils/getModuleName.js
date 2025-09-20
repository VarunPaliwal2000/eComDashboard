export default function getModuleName(path) {
  const segments = path.split("/").filter(Boolean);

  if (segments.length < 2) return "";

  const rawSegment = segments[1];
  const title = rawSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return title;
}

// Usage
