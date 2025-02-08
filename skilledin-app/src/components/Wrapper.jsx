import React from 'react';
import clsx from 'clsx';

const Wrapper = ({ className = '', children }) => {
  return (
    <div className={clsx('mx-auto w-screen px-2.5 md:px-10', className)}>
      {children}
    </div>
  );
};

export default Wrapper;

