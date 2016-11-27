import React from 'react';

import Navbar from './Navbar';

const propTypes = {
  children: React.PropTypes.node.isRequired,
};

function ApiPage({ children }) {
  return (
    <div>
      <Navbar />
      <main className='pg-content'>
        {children}
      </main>
    </div>
  );
}

ApiPage.propTypes = propTypes;

export default ApiPage;