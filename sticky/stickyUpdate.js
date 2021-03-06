import getProgress from '../utils/getProgress'
import updateElementClass from '../utils/updateElementClass'

const stickyUpdate = (ctlStore, stickyStore) => {
  const { options, scroll } = ctlStore.get()
  const { layoutHorizontal } = options
  const { el, start, distance, callback } = stickyStore.get()
  const progress = getProgress(start, distance, scroll)

  const pos = Math.min(distance, Math.max(0, scroll - start))
  el.style.transform = layoutHorizontal
    ? `translate3d(${pos}px,0,0)`
    : `translate3d(0,${pos}px,0)`

  updateElementClass(el, progress)
  callback(progress, scroll)
}

export default stickyUpdate
