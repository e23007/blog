import { convert } from 'html-to-text'

const extractText = (html, length = 80, more = '…') => {
  const text = convert(html, {
    selectors: [
      { selector: 'img', format: 'skip' },
      { selector: 'a', options: { ignoreHref: true } }
    ]
  })
  console.log('convert', text)
  return text.slice(0, length) + more
}
export { extractText }
