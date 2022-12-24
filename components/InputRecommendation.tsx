const InputRecommendation = ({ recommendation }) => {
  return (
    <>
      <ul className='bg-slate-400 absolute w-full right-0'>
        {recommendation.map((obj: { name: string; code: string }) => (
          <li key={crypto.randomUUID()}>{obj.name}</li>
        ))}
      </ul>
    </>
  );
};

export default InputRecommendation;
