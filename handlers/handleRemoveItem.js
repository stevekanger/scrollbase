const handleRemoveItem = (ctlStore, id) => {
  if (!id) throw new Error('Id is required to remove from controller')

  const { items } = ctlStore.get()
  const idx = items.findIndex((item) => item.id === id)

  if (idx > -1) {
    items[idx].kill()
    items.splice(idx, 1)
  }
}

export default handleRemoveItem
