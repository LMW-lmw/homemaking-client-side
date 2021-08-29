/**
 * @param {Array} side 每个控制下拉菜单的按钮
 * @param {Array} icon 每个控制下拉菜单的按钮图标
 * @param {Array} child 每个下拉菜单的dom
 * @param {Array} childHeigh 每个下拉菜单的高度
 * @param {Number} index 选中的下拉菜单的索引值
 */
export function showSide(
  child: any[],
  childHeigh: any[],
  side: any[],
  icon: any[],
  index: number
): void {
  child[index].style.height = childHeigh[index].offsetHeight + 'px'
  side[index].className += ' active'
  icon[index].className += ' iconActive'
}
export function hideSide(
  child: any[],
  side: any[],
  icon: any[],
  index: number
): void {
  child[index].style.height = '0px'
  side[index].className = 'main-side'
  icon[index].className += 'el-icon-arrow-down down-or-up'
}
/**
 * @param {DocumentEvent} side 每个控制下拉菜单的按钮
 * @param {Array} icon 每个控制下拉菜单的按钮图标
 * @param {Array} child 每个下拉菜单的dom
 * @param {Array} childHeigh 每个下拉菜单的高度
 * @param {Number} index 选中的下拉菜单的索引值
 */
export function showOneSide(
  child: any[],
  childHeigh: any[],
  side: any,
  icon: any[],
  index: number
): void {
  child[index].style.height = childHeigh[index].offsetHeight + 'px'
  side.className += ' active'
  icon[index].className += ' iconActive'
}
