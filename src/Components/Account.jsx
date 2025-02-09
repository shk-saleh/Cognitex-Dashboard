import { useState } from 'react';
import { Settings, ChevronDown, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from './LoginPage/AuthProvider';
import ConfirmationModal from './CustomAlert/CustomAlert';

const Account = ({ isOpen, toggleDropdown, sidebar }) => {
  const { logout, userEmail } = useAuth();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
    toggleDropdown();
  };

  const handleConfirmLogout = () => {
    logout();
    setShowLogoutConfirmation(false);
  };

  const handleCancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  return (
    <>
      <div className="relative">
        <button onClick={toggleDropdown} className="flex items-center gap-2 w-full bg-slate-800/50 p-2 rounded-lg hover:bg-slate-700/50 transition-colors">
          <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
            <UserCircle className="text-teal-500" size={20} />
          </div>

          {sidebar ? 
            <>        
              <div className="flex-1 text-left overflow-hidden">
                <p className="text-sm font-medium truncate">{userEmail}</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
              <ChevronDown size={16} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </>
          : ""}
        </button>

        {isOpen && (
          <div className="absolute bottom-full left-0 w-full mb-2 bg-slate-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-2 space-y-1">
              <button className="flex items-center gap-2 w-full p-2 rounded hover:bg-slate-700/50 transition-colors">
                <UserCircle size={16} />
                <span>Profile</span>
              </button>
              <button className="flex items-center gap-2 w-full p-2 rounded hover:bg-slate-700/50 transition-colors">
                <Settings size={16} />
                <span>Settings</span>
              </button>
              <button 
                onClick={handleLogoutClick}
                className="flex items-center gap-2 w-full p-2 rounded hover:bg-slate-700/50 text-red-400 transition-colors"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <ConfirmationModal 
        isOpen={showLogoutConfirmation}
        onClose={handleCancelLogout}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
};

export default Account;