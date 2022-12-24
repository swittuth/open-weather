const InputRecommendation = ({ recommendation }) => {
  return (
    <>
      <ul className='bg-slate-400 absolute'>
        {recommendation.map((obj: { name: string; code: string }) => (
          <li key={crypto.randomUUID()}>{obj.name}</li>
        ))}
      </ul>
    </>
  );
};

export default InputRecommendation;
