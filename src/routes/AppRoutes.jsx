import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WebsiteLayout from '../layouts/WebsiteLayout.jsx'
import Home from '../pages/website/Home/Home.jsx'
import NotFound from '../pages/NotFound.jsx'
import { StudentRoutes } from './StudentRoutes.jsx'
import { TeacherRoutes } from './TeacherRoutes.jsx'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebsiteLayout />}>
          <Route index element={<Home />} />
        </Route>
        {TeacherRoutes()}
        {StudentRoutes()}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
