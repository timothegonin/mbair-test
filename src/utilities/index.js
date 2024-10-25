export const displayPrice = sum => {
  return sum > 0 ? `(${sum} €)` : ""
}

export function formatPrice(val) {
  let parts = val.toFixed(2).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(",");
}