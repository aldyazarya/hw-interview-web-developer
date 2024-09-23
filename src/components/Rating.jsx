function Rating({ rating }) {
  const stars = Array(5).fill(0);
  return (
    <div className="rating flex space-x-1">
      {stars.map((_, index) => (
        <span
          key={index}
          className={index < rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
