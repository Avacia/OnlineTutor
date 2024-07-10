/* ================================ Import File ============================= */
/* =================== Common File =========================== */
import './App.css'
import Home from './components/Home/home'
import TeacherDashboard from './components/Teacher/teacherDashboard'
import StudentDashboard from './components/Student/studentDashboard'
import AboutUs from './components/AboutUs/aboutUs'
import ContactUs from './components/ContactUs/contactUs'
import Settings from './components/Settings/settings'

/* ============================ Import Function ============================= */
import { Routes, Route } from 'react-router-dom'



function App() {

  return (

    <div className="Router">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/teacher-dashboard/*' element={<TeacherDashboard />}/>
        <Route path='/student-dashboard/*' element={<StudentDashboard />}/>
        <Route path='/aboutUs' element={<AboutUs />}/>
        <Route path='/contactUs' element={<ContactUs />}/>
        <Route path='/settings' element={<Settings />}/>
      </Routes>
    </div>

  )
}

export default App
