import './App.css'
import { useState } from 'react';
import MondayPractice from './pages/monday/MondayPractice';
import TuesdayPractice from './pages/tuesday/TuesdayPractice';
import ThursdayPractice from './pages/thursday/ThursdayPractice';
import FridayPractice from './pages/friday/FridayPractice';
import SaturdayPractice from './pages/saturday/SaturdayPractice';

function App() {
  const [currentPage, setCurrentPage] = useState("");
  
  return (
    <>
      <h1 className="app-title">Weekly Practice</h1>
      <nav>
        <button onClick={() => setCurrentPage("Monday")} className={currentPage === "Monday" ? "active" : ""}>Monday - Fundamentals & Retrieval</button>
        <button onClick={() => setCurrentPage("Tuesday")} className={currentPage === "Tuesday" ? "active" : ""}>Tuesday - Debugging</button>
        <button onClick={() => setCurrentPage("Thursday")} className={currentPage === "Thursday" ? "active" : ""}>Thursday - Code Reading & Review</button>
        <button onClick={() => setCurrentPage("Friday")} className={currentPage === "Friday" ? "active" : ""}>Friday - System Design</button>
        <button onClick={() => setCurrentPage("Saturday")} className={currentPage === "Saturday" ? "active" : ""}>Saturday - Delivery Mode</button>
      </nav>
      <main>
        {currentPage === "Monday" && <MondayPractice />}
        {currentPage === "Tuesday" && <TuesdayPractice />}
        {currentPage === "Thursday" && <ThursdayPractice />}
        {currentPage === "Friday" && <FridayPractice />}
        {currentPage === "Saturday" && <SaturdayPractice />}
      </main>
    </>
  )
}

export default App
