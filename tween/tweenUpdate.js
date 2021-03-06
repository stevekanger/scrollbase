import getProgress from '../utils/getProgress'
import updateElementClass from '../utils/updateElementClass'

const tweenUpdate = (ctlStore, tweenStore) => {
  const { scroll } = ctlStore.get()
  const { el, timeline, start, distance, peak, callback } = tweenStore.get()

  const progress = getProgress(start, distance, scroll)

  if (peak < 1) {
    timeline.progress(
      progress > 0.5 ? 0.5 * 2 - progress : progress * (0.5 * 2)
    )
  } else {
    timeline.progress(progress)
  }

  updateElementClass(el, progress)
  callback(progress, scroll)
}

export default tweenUpdate
