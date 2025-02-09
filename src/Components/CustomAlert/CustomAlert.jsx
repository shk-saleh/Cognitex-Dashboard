import React from 'react';

const CustomAlert = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="bg-[#142124] rounded-lg p-6 shadow-xl w-full max-w-md relative z-10">
        <h3 className="text-xl font-medium text-neutral-200 mb-4">Confirm Logout</h3>
        <p className="text-neutral-300 mb-6">Are you sure you want to logout?</p>
        
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-slate-700 text-neutral-200 hover:bg-slate-600 transition-colors"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;