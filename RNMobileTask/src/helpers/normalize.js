// @flow

const normalizeImageURL = (sourceURL: string, imageURL: string) => {
  const pattern = /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/

  if (!pattern.test(imageURL)) {
    return `${sourceURL.replace(/^((\w+:)?\/\/[^\/]+\/?).*$/,'$1')}${imageURL}`
  }

  return imageURL
}

export {
  normalizeImageURL
}
