import React from 'react';

function Button({ data, link }) {
  return (
    <div >
      <div className="button inline-block text-lg px-5 py-1 mr-5 shadow-blue-200 border-sky-700 border-[1px] rounded-full">
        <span className="button-text">{data}</span>
      </div>
    </div>
  );
}

export default Button;
