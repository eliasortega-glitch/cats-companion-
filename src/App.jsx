import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import NotificationBell from './components/layout/NotificationBell';
import Btn from './components/ui/Btn';
import SectionTitle from './components/ui/SectionTitle';
import StudentDashboard from './pages/StudentDashboard';
import StaffDashboard from './pages/StaffDashboard';

const PAGES = { student: StudentDashboard, staff: StaffDashboard };

export default function App() {
  const [mode, setMode] = useState('staff');
  const Current = PAGES[mode];

  return (
    <div style={{ fontFamily: 'DM Sans, system-ui, sans-serif', padding: 24 }}>
      <Sidebar />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SectionTitle>CATS Academic Companion</SectionTitle>
        <NotificationBell />
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <Btn onClick={() => setMode('student')}>Student View</Btn>
        <Btn onClick={() => setMode('staff')}>Staff View</Btn>
      </div>
      <Current />
    </div>
  );
}
