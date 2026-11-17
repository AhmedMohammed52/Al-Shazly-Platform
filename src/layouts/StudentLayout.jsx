import { Outlet } from 'react-router-dom'

function StudentLayout() {
  return (
    <div className="student-layout" dir="rtl">
      <Outlet />
    </div>
  )
}

export default StudentLayout
