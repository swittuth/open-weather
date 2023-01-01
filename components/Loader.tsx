const Loader = () => {
  return (
    <div className='flex gap-1 items-center justify-center absolute w-full p-2 bg-slate-50'>
      <span className='w-2 h-2 animate-appear_1st bg-slate-500 rounded-full'></span>
      <span className='w-2 h-2 animate-appear_2nd bg-slate-500 rounded-full'></span>
      <span className='w-2 h-2 animate-appear_3rd bg-slate-500 rounded-full'></span>
    </div>
  );
};

export default Loader;
