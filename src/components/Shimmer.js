const Shimmer = () => {
  // return <h1>Shimmer UI Loading......</h1>
  return (
    <div data-testid="shimmer" className="restaurant-list">
      {Array(15)
        .fill("")
        .map((e,index) => (
          <div key={index} className="shimmer-card"> </div>
        ))}
    </div>
  );
};

export default Shimmer;
