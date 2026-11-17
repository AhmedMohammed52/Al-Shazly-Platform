import { Outlet } from 'react-router-dom'

function TeacherLayout() {
  return (
    <div className="teacher-layout" dir="rtl">
      <Outlet />
    </div>
  )
}

export default TeacherLayout
