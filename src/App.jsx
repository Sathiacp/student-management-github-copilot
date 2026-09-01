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

  // null means Add mode; otherwise this is the ID being edited
  const [editingStudentId, setEditingStudentId] = useState(null)

  // Clear the form and return to Add mode
  const resetForm = () => {
    setInputName('')
    setInputEmail('')
    setInputCourse('')
    setEditingStudentId(null)
  }

  // Function to add a new student
  const addStudent = () => {
    // Check that the student name is not empty
    if (inputName.trim() === '') {
      alert('Please enter a name')
      return
    }

    // Find the highest existing ID and add 1 to create a unique ID
    const nextId = students.reduce((maxId, student) => Math.max(maxId, student.id), 0) + 1

    // Create a new student
    const newStudent = {
      id: nextId,
      name: inputName.trim(),
      email: inputEmail.trim(),
      course: inputCourse.trim()
    }

    // Add the new student to the existing list
    setStudents([...students, newStudent])

    // Clear the input fields
    resetForm()
  }

  // Function to start editing a student
  const editStudent = (student) => {
    setEditingStudentId(student.id)
    setInputName(student.name)
    setInputEmail(student.email)
    setInputCourse(student.course)
  }

  // Function to save changes for the selected student
  const saveStudent = () => {
    if (inputName.trim() === '') {
      alert('Please enter a name')
      return
    }

    const updatedStudents = students.map((student) => {
      if (student.id === editingStudentId) {
        return {
          ...student,
          name: inputName.trim(),
          email: inputEmail.trim(),
          course: inputCourse.trim()
        }
      }

      return student
    })

    setStudents(updatedStudents)
    resetForm()
  }

  // Function to delete a student
  const deleteStudent = (id) => {
    const updatedStudents = students.filter((s) => s.id !== id)
    setStudents(updatedStudents)

    if (editingStudentId === id) {
      resetForm()
    }
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

        <button onClick={editingStudentId === null ? addStudent : saveStudent}>
          {editingStudentId === null ? 'Add Student' : 'Save Changes'}
        </button>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>
                <button onClick={() => editStudent(student)}>Edit</button>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
