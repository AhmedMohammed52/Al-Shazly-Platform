import { Route } from 'react-router-dom'
import TeacherLayout from '../layouts/TeacherLayout.jsx'
import Overview from '../pages/teacher/Overview.jsx'
import Students from '../pages/teacher/Students.jsx'
import Schedule from '../pages/teacher/Schedule.jsx'
import Content from '../pages/teacher/Content.jsx'
import Assignments from '../pages/teacher/Assignments.jsx'
import Attendance from '../pages/teacher/Attendance.jsx'
import Announcements from '../pages/teacher/Announcements.jsx'
import Settings from '../pages/teacher/Settings.jsx'

export function TeacherRoutes() {
  return (
    <Route path="teacher" element={<TeacherLayout />}>
      <Route index element={<Overview />} />
      <Route path="students" element={<Students />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="content" element={<Content />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="announcements" element={<Announcements />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  )
}
