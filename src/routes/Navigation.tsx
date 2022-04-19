import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import logo from "../logo.svg";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";
import {
  Register,
  RegisterFormik,
  FormikBasic,
  FormikYup,
  FormikComponents,
  FormikAbstractation,
} from "../03-forms/pages";
import { DynamicForm } from "../03-forms/pages/DynamicForm";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" activeClassName="nav-active" exact>
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-active" exact>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/dynamicform" activeClassName="nav-active" exact>
                Dynamic Form
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName="nav-active" exact>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/registerformik" activeClassName="nav-active" exact>
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink to="/formikbasic" activeClassName="nav-active" exact>
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/formikyup" activeClassName="nav-active" exact>
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikcomponents"
                activeClassName="nav-active"
                exact
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formikabstractation"
                activeClassName="nav-active"
                exact
              >
                Formik Abstractation
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" exact>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/dynamicform">
            <DynamicForm />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/registerformik">
            <RegisterFormik />
          </Route>
          <Route path="/formikbasic">
            <FormikBasic />
          </Route>
          <Route path="/formikyup">
            <FormikYup />
          </Route>
          <Route path="/formikcomponents">
            <FormikComponents />
          </Route>
          <Route path="/formikabstractation">
            <FormikAbstractation />
          </Route>
          <Route path="/">
            <ShoppingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
