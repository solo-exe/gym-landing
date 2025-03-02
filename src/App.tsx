import NavBar from '@/scenes/navbar';
import { useState } from 'react';
import { SelectedPage } from './shared/types';

export default function App() {
  const [selectedPage, setSelectedPage] = useState<string>(SelectedPage.Home);
  return (
    <div className="app bg-gray-20">
      <NavBar
        selectedPage={selectedPage as SelectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}
