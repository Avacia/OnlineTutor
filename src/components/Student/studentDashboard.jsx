/* ================================ Import File ============================= */
/* =================== Common File =========================== */


/* ============================ Import Function ============================= */
import {Routes, Route} from 'react-router-dom'


export default function studentDashboard(){
    return(
        <div className="studentDashboard">
            <Routes>
                <Route path='/' element={<div>Student Information</div>}/>
                <Route path='/subjectSelection/*' element={<div>Subject Selection</div>}/>
                <Route path='/overallGrade' element={<div>Overall Grade</div>}/>
                <Route path='/studentChat' element={<div>Student Chat</div>}/>
                <Route path='/helpRequestsTeacher' element={<div>Help Requests</div>}/>
            </Routes>
        </div>
    )
}