import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import StatsCard from "./Components/StatsCard";
import Graph from "./Components/Graph";
import { SliderCard } from "./Components/SliderCard";
import GuageCard from "./Components/GuageCard";


const App = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState('overview');

  // const renderSection = () => {
  //   switch (currentSection) {
  //     case 'sidebar':
  //       return <Sidebar />;
  //   }
  // };


  return (
    <div className="flex min-h-screen w-full bg-[#0B0E0F] font-outfit text-white fixed p-4">
     
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} currentSection={currentSection} setCurrentSection={setCurrentSection}/>
      
      <main className="flex-1 ps-6">
        <Header onFilterChange={(e) => console.log(e.target.value)} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard title="Active Conversations" progressVal="5"  value="5" label="+5.00%" />
          <StatsCard title="Avg Response time" progressVal="20"  value="20s" label="+5.00%"/>
          <SliderCard title="Customer Satisfaction" progressVal="90"  value="90%" />
          <GuageCard title="Total Interactions" progressVal1="15" progressVal2="50" value1="Chats" value2="Calls" />
        </div>
        <div>
          <Graph/>
        </div>
      </main>

      {/* Rest of the dashboard content remains the same */}
    </div>
  );
};

export default App;