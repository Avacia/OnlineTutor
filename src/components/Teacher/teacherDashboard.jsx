/* ================================ Import File ============================= */
/* =================== Common File =========================== */


/* ============================ Import Function ============================= */
import {Routes, Route} from 'react-router-dom'



export default function teacherDashboard(){
    return(
        <div className="teacherDashboard">
             <Routes>
                <Route path='/' element={<div>Teacher Information</div>}/>
                <Route path='/subjectSelection/*' element={<div>Subject Selection</div>}/>
                <Route path='/studentTrackerOverview' element={<div>Student Tracker Overview</div>}/>
                <Route path='/helpRequestsTeacher' element={<div>Help Requests</div>}/>
            </Routes>
        </div>
    )
}