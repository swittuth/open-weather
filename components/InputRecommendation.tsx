const InputRecommendation = ({ recommendation }) => {
  return (
    <>
      <ul>
        {recommendation.map((obj: { name: string; code: string }) => (
          <li key={crypto.randomUUID()}>{obj.name}</li>
        ))}
      </ul>
    </>
  );
};

export default InputRecommendation;
