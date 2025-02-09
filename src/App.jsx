import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import StatsCard from "./Components/StatsCard";
import Graph from "./Components/Graph";
import { SliderCard } from "./Components/SliderCard";
import GuageCard from "./Components/GuageCard";
import Agents from "./Components/Agents/AgentCard";

const Overview = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Active Conversations" progressVal="5" value="5" label="+5.00%" />
        <StatsCard title="Avg Response time" progressVal="20" value="20s" label="+5.00%"/>
        <SliderCard title="Customer Satisfaction" progressVal="90" value="90%" />
        <GuageCard title="Total Interactions" progressVal1="15" progressVal2="50" value1="Chats" value2="Calls" />
      </div>
      <div>
        <Graph/>
      </div>
    </>
  );
};


const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState('overview');

  const renderSection = () => {
    switch (currentSection) {
      case 'overview':
        return <Overview />;
      case 'agents':
        return <Agents />;
      case 'billing':
        return <div>Billing Component</div>;
      case 'voice':
        return <div>Voice Library Component</div>;
      case 'report':
        return <div>Report Component</div>;
      case 'help':
        return <div>Help Component</div>;
      case 'setting':
        return <div>Settings Component</div>;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-[#0B0E0F] font-outfit text-white fixed p-4">
      <Sidebar 
        isOpen={isOpen} 
        toggleSidebar={() => setIsOpen(!isOpen)} 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection}
      />
      
      <main className="flex-1 ps-6">
        <Header 
          currentSection={currentSection}
          onFilterChange={(e) => console.log(e.target.value)} 
        />
        {renderSection()}
      </main>
    </div>
  );
};

export default App;