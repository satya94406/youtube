import React from 'react';

const Button_List = () => {
  const names = ["live", "gaming", "cricket", "music", "video", "footfall", "news", "serial", "inovation", "metals","laptop", "mobile","pen","books","home","shoes","bags","serial", "inovation", "metals","laptop", "mobile","pen","books","home","shoes","bags","gaming", "cricket", "music", "video", "footfall", "news", "serial", "inovation", "metals","laptop", "mobile","pen","books","home","shoes","bags","serial", "inovation", "metals","laptop", "mobile","pen","books"];

  return (
    <div className='flex overflow-x-auto no-scrollbar w-screen mr-10'>
      {names.map((name) => (
        <button className='p-2 m-2 bg-slate-200 rounded-md' key={name}>{name}</button>
      ))}
    </div>
  );
};

export default Button_List;

