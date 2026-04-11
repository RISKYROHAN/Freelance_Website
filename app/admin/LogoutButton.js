'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function LogoutButton() {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (error) {
      console.error('Logout failed', error);
      setIsLoggingOut(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setShowConfirm(true)}
        className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-200"
      >
        Logout
      </button>

      <AnimatePresence>
        {showConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-corporate-900/40 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-sm border border-corporate-100"
            >
              <h3 className="text-xl font-bold text-corporate-900 mb-2">Confirm Logout</h3>
              <p className="text-corporate-600 mb-6 text-sm">
                Are you sure you want to end your session? You will need to sign in again to access the dashboard.
              </p>
              
              <div className="flex gap-3 justify-end">
                <button 
                  onClick={() => setShowConfirm(false)}
                  disabled={isLoggingOut}
                  className="px-4 py-2 text-sm font-medium text-corporate-600 bg-corporate-50 hover:bg-corporate-100 rounded-lg transition-colors border border-corporate-200"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-70 flex items-center justify-center min-w-[80px]"
                >
                  {isLoggingOut ? '...' : 'Log Out'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
