import { Route } from 'react-router-dom'
import StudentLayout from '../layouts/StudentLayout.jsx'
import Overview from '../pages/student/Overview.jsx'
import Schedule from '../pages/student/Schedule.jsx'
import Content from '../pages/student/Content.jsx'
import Assignments from '../pages/student/Assignments.jsx'
import Announcements from '../pages/student/Announcements.jsx'
import Profile from '../pages/student/Profile.jsx'

export function StudentRoutes() {
  return (
    <Route path="student" element={<StudentLayout />}>
      <Route index element={<Overview />} />
      <Route path="schedule" element={<Schedule />} />
      <Route path="content" element={<Content />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="announcements" element={<Announcements />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
}
