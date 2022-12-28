const InputRecommendation = ({ recommendation }) => {
  return (
    <>
      <ul className='absolute w-full rounded-md bg-slate-50'>
        {recommendation.map((obj: { name: string; code: string }) => (
          <li
            className='p-1 rounded-md hover:bg-slate-300 hover:cursor-pointer transition-colors duration-75'
            key={crypto.randomUUID()}
          >
            {obj.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default InputRecommendation;
