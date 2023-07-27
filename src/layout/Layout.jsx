import { NavLink } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div>
      <div className="navbar bg-sky-500 text-black">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            Expense Manager
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/income">Incomes</NavLink>
            </li>
            <li>
              <NavLink to="/expense">Expenses</NavLink>
            </li>
          </ul>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
