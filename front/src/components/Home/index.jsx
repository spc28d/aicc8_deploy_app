import React from 'react';
import NavBar from '../Common/NavBar';
import ItemPanel from '../Common/ItemPanel';

const index = () => {
  return (
    <div className="page_section">
      <NavBar />
      <ItemPanel pageTitle="All items" filteredCompleted="all" />
    </div>
  );
};

export default index;
