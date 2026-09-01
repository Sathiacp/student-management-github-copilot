import { useState } from 'react'
import './App.css'

function App() {
  // Student list stored in React state
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      course: 'React Basics'
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      course: 'JavaScript Advanced'
    },
    {
      id: 3,
      name: 'Carol Davis',
      email: 'carol@example.com',
      course: 'Web Design'
    }
  ])

  // State for the student name input
  const [inputName, setInputName] = useState('')

  // State for the student email input
  const [inputEmail, setInputEmail] = useState('')

  // State for the student course input
  const [inputCourse, setInputCourse] = useState('')

  // Function to add a new student
  const addStudent = () => {
    // Check that the student name is not empty
    if (inputName.trim() === '') {
      alert('Please enter a name')
      return
    }

    // Create a new student
    const newStudent = {
      id: students.length + 1,
      name: inputName,
      email: inputEmail,
      course: inputCourse
    }

    // Add the new student to the existing list
    setStudents([...students, newStudent])

    // Clear the input fields
    setInputName('')
    setInputEmail('')
    setInputCourse('')
  }

  return (
    <div className="container">
      <h1>Student Management</h1>

      <div className="add-student-section">
        <input
          type="text"
          placeholder="Enter student name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter student email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter student course"
          value={inputCourse}
          onChange={(e) => setInputCourse(e.target.value)}
        />

        <button onClick={addStudent}>Add Student</button>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
