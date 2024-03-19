import propTypes from 'prop-types'

function Button(items) {
  return (
    <button className={items.classes} onClick={() => items.event()}>{items.text}</button>
  )
}

Button.propTypes = {
  text: propTypes.string,
  classes: propTypes.string,
  event: propTypes.func
}

export default Button