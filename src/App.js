import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProfilesPage from './pages/ProfilesPage';
import { PrivateRoute } from './pages/PrivateRoute';
import PageNotFound from './pages/PageNotFound';
import WelcomePage from './pages/WelcomePage';
import AddDevice from './Components/AddDevice';
import ManageDevice from './Components/ManageDevice';
import CreateProfilePage from './pages/CreateProfilePage';
import LoginProfilePage from './pages/LoginProfilePage';
import AdminPasswordPage from './pages/AdminPasswordPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={
          <WelcomePage />
        } />
        <Route path="/profiles" element={
          <PrivateRoute>
            <ProfilesPage />
          </PrivateRoute>
        } />
        {
          <Route path="/dashboard" exact element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute> } />
        }
        <Route path="/addDevice" exact element={
          <PrivateRoute>
            <AddDevice />
          </PrivateRoute> } />

        <Route path="/manageDevice" exact element={
          <PrivateRoute>
            <ManageDevice />
          </PrivateRoute> } />
        { <Route path="/" element={
          <PrivateRoute>
            <ProfilesPage />
          </PrivateRoute> } /> }
        <Route path="/profile_login" exact element={
          <PrivateRoute>
            <LoginProfilePage />
          </PrivateRoute> } />
        <Route path="/registration" element={ <RegisterPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="*" element={ <PageNotFound /> } />
        <Route path="/create_new_profile" exact element={
          <PrivateRoute>
            <CreateProfilePage />
          </PrivateRoute> } />
        <Route path="/admin_password" exact element={
          <PrivateRoute>
            <AdminPasswordPage />
          </PrivateRoute> } />
      </Routes >
    </BrowserRouter>
  );
}

export default App;
