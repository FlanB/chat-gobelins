const fontsNumber = 3

export default function randomFonts(node) {
  // separate the text into words
  node.innerHTML = node.textContent.replace(/\S+/g, "<span>$&</span>")
  //apply random font to each word
  const words = node.querySelectorAll("span")
  for (let i = 0; i < words.length; i++) {
    const randomFont = Math.floor(Math.random() * fontsNumber) + 1
    words[i].classList.add(`font-${randomFont}`)
  }
}
