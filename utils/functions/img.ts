const
getPathName = (_path = ""): string => {
  return _path
    .replace(/\\/g, "/")
    .replace(/^[^/]*\/\/[^/]*/, "")
    .replace(/[?#].*?$/, "")
}

export const ConvertImagePath = (_src = "", _size = 1): string => {
  if (
    ["production"].includes(process.env.APP_ENV || "") &&
    ~_src.indexOf("amazonaws.com") &&
    ~_src.indexOf("-production")
  ) {
    const path = getPathName(_src)
    _src = `https://kencoco-image.imgix.net${path}?auto=compress&lossless=0&auto=format&w=${_size}`
  } else if (process.env.APP_ENV === "production" && _src.charAt(0) === "/") {
    _src = `https://kencoco-jp-image-container.imgix.net${_src}?auto=compress&lossless=0&auto=format&w=${_size}`
  }
  return _src
}
