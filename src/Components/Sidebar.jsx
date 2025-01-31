import Account from "./Account";
import React, { useState } from 'react';
import { PanelRightOpen, ChartPie, Bot, DollarSign, AudioLines, ChartNoAxesCombined, CircleHelp, Settings } from 'lucide-react';
import logo  from '../images/logo.png'


const Sidebar = ({ isOpen, toggleSidebar, currentSection, setCurrentSection }) => {
   
    const [isDark, setIsDark] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
  
    const menuItems = [
      { icon: <ChartPie size={20} />, label: 'Overview', id: 'overview' },
      { icon: <Bot size={20} />, label: 'Agents', id: 'agents' },
      { icon: <DollarSign size={20} />, label: 'Billing', id: 'billing' },
      { icon: <AudioLines size={20} />, label: 'Voice Library', id: 'voice' },
      { icon: <ChartNoAxesCombined size={20} />, label: 'Report', id: 'report' },
      { icon: <CircleHelp size={20} />, label: 'Help', id: 'help' },
      { icon: <Settings size={20} />, label: 'Setting', id: 'setting' },
    ];
  
    return (

        <div className={`h-[96vh] bg-[#000000] transition-all duration-300 rounded-xl px-3 py-6 flex flex-col ${isOpen ? 'w-64' : 'w-16'}`}>
        
            <div className="flex items-center justify-between border-b border-[#1c3033b2] pb-3">
                <img src={logo} alt="Logo" className="h-5" style={{ display: !isOpen ? "none" : "block" }} />
                <button onClick={toggleSidebar} className="text-gray-400 hover:text-white cursor-pointer">
                    <PanelRightOpen size={20} />
                </button>
            </div>
        
            <nav className="mt-8 flex-1">
            {menuItems.map((item) => (
                <button key={item.id} onClick={() => setCurrentSection(item.id)}
                className={`w-full flex items-center px-2 py-2 my-2 rounded-lg ${
                    currentSection === item.id ? 'bg-[#396268] text-[#D9D9D9]' : 'text-[#D9D9D9]'
                } hover:bg-[#396268] hover:text-[#D9D9D9] transition-colors cursor-pointer`}
                >
                {item.icon}
                {isOpen && <span className="ml-4">{item.label}</span>}
                </button>
            ))}
            </nav>
  

            <div className="space-y-4">

                {isOpen? 
                <div className="flex items-center justify-between bg-slate-800/50 p-2 rounded-lg">
                    <span className="text-gray-400">Light Mode</span>
                    <button onClick={() => setIsDark(!isDark)} className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ${isDark ? 'bg-teal-600' : 'bg-gray-600'}`}>
                    <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 ${isDark ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                </div>
                : ""}
            
                <Account sidebar= {isOpen} isOpen={isAccountOpen} toggleDropdown={() => setIsAccountOpen(!isAccountOpen)}/>

            </div>

        </div>
    )

}

export default Sidebar