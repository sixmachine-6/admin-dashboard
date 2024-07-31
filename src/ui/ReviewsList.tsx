interface Review {
  review: {
    id: number;
    customerId: number;
    productId: number;
    name: string;
    review: string;
    starRating: number;
  };
}

export default function ReviewsList({ review }: Review) {
  return (
    <li className="flex items-center justify-between gap-6 hover:bg-slate-100 p-2 hover:transition-all">
      <img
        src="./../vite.svg"
        alt="user"
        className="bg-slate-200 p-2 rounded-md"
      />
      <div className="grow max-w-72">
        <h2 className="font-semibold">{review.name}</h2>
        <p>⭐{review.starRating}</p>
        <p>{review.review}</p>
      </div>
    </li>
  );
}
