export function RatingStars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div
      className="flex items-center gap-1 text-subheading text-amber-500"
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < full ? "★" : i === full && half ? "☆" : "☆"}</span>
      ))}
      <span className="ml-1 text-gray-500">{rating.toFixed(1)}</span>
    </div>
  );
}

export function toCurrencyMAD(n: number) {
  return new Intl.NumberFormat("fr-MA", {
    style: "currency",
    currency: "MAD",
  }).format(n);
}
