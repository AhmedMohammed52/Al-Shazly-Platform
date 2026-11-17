function SectionHeading({ eyebrow, title, description, className = '' }) {
  return (
    <header className={['section-heading', className].filter(Boolean).join(' ')}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </header>
  )
}

export default SectionHeading
