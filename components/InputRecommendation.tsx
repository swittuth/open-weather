type RecommendationType = {
  name: string;
  code: string;
};

const InputRecommendation = ({
  recommendation,
  handleSearchValue,
  setRecommendation,
}) => {
  return (
    <>
      <ul className='absolute w-full rounded-md bg-slate-50'>
        {recommendation.map((obj: RecommendationType) => (
          <li
            className='p-1 rounded-md hover:bg-slate-300 hover:cursor-pointer transition-colors duration-75'
            key={crypto.randomUUID()}
            onClick={() => {
              handleSearchValue((name) => obj.name);
              setRecommendation((recommendation) => []);
            }}
          >
            {obj.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default InputRecommendation;
