// components/Drawer.js

import React from 'react';

const DashboardNavPhone = () => {
  return (
    <div className="drawer flex">
      <input id="my-drawer" type="checkbox" className="drawer-toggle hidden" />
      
      <div className="drawer-content flex flex-col flex-1 min-h-screen">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button md:hidden">Open drawer</label>
        
        <main className="flex-1 p-4">
          {/* Your page content goes here */}
        </main>
      </div>
      
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        
        <nav className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <ul>
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DashboardNavPhone;
