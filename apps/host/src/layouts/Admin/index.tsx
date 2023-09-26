import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          width: '100%',
        }}
      >
        <header style={{ background: '#eee' }}>
          <nav style={{ maxWidth: '768px', display: 'flex', margin: '0 auto' }}>
            <ul
              style={{
                display: 'inline-flex',
                gap: '10px',
                listStyleType: 'none',
              }}
            >
              <li>
                <Link to="/admin">Home</Link>
              </li>
              <li>
                <Link to="/admin/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/admin/details">Detalhes</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
