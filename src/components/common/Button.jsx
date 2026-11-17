function Button({ as: Element = 'button', variant = 'primary', className = '', children, ...props }) {
  return (
    <Element
      className={['button', `button--${variant}`, className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Element>
  )
}

export default Button
