import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import { AuthProvider } from "./context/AuthContext";
import TaskFormPage from "./pages/TaskFormPage";
import TasksPage from "./pages/TasksPage";
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route element= {<ProtectedRoute/>} >
            <Route path='/tasks' element={<TasksPage/>} />
            <Route path='/add-task' element={<TaskFormPage/>} />
            <Route path='/tasks/:id' element={<TaskFormPage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App