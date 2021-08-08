export function slide(event: any) {
  const curTarget: any = event.currentTarget
  const containsCurClass: any = curTarget.classList.contains('up')
  let nextSibling = curTarget.nextSibling

  while (nextSibling.nodeType == 3 && /\s/.test(nextSibling.nodeValue)) {
    nextSibling = nextSibling.nextSibling
  }
  const detailScrollHeight = nextSibling.scrollHeight
  if (containsCurClass) {
    curTarget.classList.remove('up')
    // curTarget.firstElementChild.classList.remove('display-block')
    // curTarget.lastElementChild.classList.add('display-block')
    toggleSlide(nextSibling, detailScrollHeight, '500')
  } else {
    curTarget.classList.add('up')
    // curTarget.lastElementChild.classList.remove('display-block')
    // curTarget.firstElementChild.classList.add('display-block')
    toggleSlide(nextSibling, 0, '500')
  }
}
function toggleSlide(dom: any, height: any, time: any) {
  console.log(dom.style)
  dom.style.transition = 'height ' + time + 'ms'
  dom.style.height = height + 'px'
}
