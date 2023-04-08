import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { FromikComponents } from '../03-forms/pages/FromikComponents';
import { FromikBasicPage } from '../03-forms/pages/FromikPage';
import { FromikYupPage } from '../03-forms/pages/FromikYupPage';
import { RegisterPage } from '../03-forms/pages/RegisterPage';

import logo from '../logo.svg'

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/formik-basic" element={ <FromikBasicPage/> } />
                    <Route path="/formik-yup" element={ <FromikYupPage/> } />
                    <Route path="/formik-components" element={ <FromikComponents/> } />
                    <Route path="home" element={ <h1>Home Page</h1> } />
                    
                    <Route path="/*" element={ <Navigate to="/home" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
