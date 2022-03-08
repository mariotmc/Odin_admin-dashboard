const Trend = ({ username, fullName, img }) => {
  return (
    <article className="trend">
      <img src={img} alt="User Photo" />
      <div>
        <h3>{username}</h3>
        <p>{fullName}</p>
      </div>
    </article>
  );
};

export default Trend;
