export const prettyLabel = (segment) => {
  console.log("prettyLabel", segment);
  // Converts dash/lowercase to Title Case for display
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
