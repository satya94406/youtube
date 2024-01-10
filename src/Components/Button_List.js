import React from 'react';
import Button from './Button';

const Button_List = () => {
  const names = ["live", "gaming", "cricket", "music", "video", "footfall", "news", "serial", "inovation", "metals","laptop", "mobile","pen","books","home","shoes","bags"];

  return (
    <div className='flex flex-wrap '>
      {names.map((name) => (
        <button className='p-2 m-2 bg-slate-200 rounded-md' key={name}>{name}</button>
      ))}
    </div>
  );
};

export default Button_List;

