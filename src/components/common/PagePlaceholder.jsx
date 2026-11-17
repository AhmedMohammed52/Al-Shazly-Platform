function PagePlaceholder({ title, description = 'سيتم إعداد هذه الصفحة في مرحلة لاحقة.' }) {
  return (
    <main className="page-placeholder">
      <h1>{title}</h1>
      <p>{description}</p>
    </main>
  )
}

export default PagePlaceholder
