export const displayPrice = sum => {
  return sum > 0 ? `(${sum} €)` : ""
}

export function formatPrice(val) {
  let parts = val.toFixed(2).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(",");
}

//"512ssd => 512 Go | "2tossd" => 2 To
export function formatSsdString(ssdString) {
  const numPart = ssdString.replace("ssd", "")

  if(numPart.includes("to")){
    return `${numPart.charAt(0)} To`
  } 
  return `${numPart} Go`
}