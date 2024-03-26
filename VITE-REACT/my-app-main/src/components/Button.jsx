
function Button(items) {
  return (
    <button type="button" disabled={items.disabled} className={items.classes} onClick={() => items.event()}>{items.text}</button>
  )
}

export default Button