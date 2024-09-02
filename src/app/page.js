
import Link from 'next/link';
import Login from '../../pages/login';
import Register from '../../pages/register';
export default function Home() {
  return (
    <div>
      <h1>Welcome to My Full-Stack Next.js Application</h1>
      <p>This app features role-based authentication and product management.</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/register"><a style={{ marginRight: '20px' }}>Register</a></a>
        <a href="/login"><a style={{ marginRight: '20px' }}>Login</a></a>
        <a href="/dashboard"><a>Go to Dashboard</a></a>
      </div>
    </div>
  );
}
