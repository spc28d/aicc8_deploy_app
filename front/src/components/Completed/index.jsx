import React from 'react';
import NavBar from '../Common/NavBar';
import ItemPanel from '../Common/ItemPanel';

const index = () => {
  return (
    <div className="page_section">
      <NavBar />
      <ItemPanel pageTitle="Completed Items" filteredCompleted={true} />
    </div>
  );
};

export default index;
