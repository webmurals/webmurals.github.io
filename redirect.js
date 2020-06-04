switch (location.protocol) {
  case "https:":
  case "http:":
  location.href = "https://webmural.github.io" +
  location.pathname +
  location.search +
  location.hash
}
