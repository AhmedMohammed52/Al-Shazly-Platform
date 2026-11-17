function Container({ as: Element = 'div', className = '', children, ...props }) {
  return (
    <Element className={['container', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </Element>
  )
}

export default Container
