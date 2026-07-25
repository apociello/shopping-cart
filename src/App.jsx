import { Outlet } from 'react-router';
import Header from './components/Header';
import './styles/App.css';

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
