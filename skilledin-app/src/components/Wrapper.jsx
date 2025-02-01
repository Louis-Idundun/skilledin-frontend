import React from 'react';
import clsx from 'clsx';

const Wrapper = ({ className = '', children }) => {
    return (
      <div className={clsx('mx-auto w-full px-2.5 md:px-20', className)}>
        {children}
      </div>
    );
  };

export default Wrapper;

