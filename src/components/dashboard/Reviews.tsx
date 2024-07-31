import Button from "../../ui/Button";
import ReviewsList from "../../ui/ReviewsList";

const RecentReviews = [
  {
    id: 1,
    customerId: 1,
    productId: 3,
    name: "Jonas",
    starRating: 4.5,
    review: "Best product superb experience product to buy dsdsdsdsdsddsd",
  },
  {
    id: 2,
    customerId: 2,
    productId: 4,
    name: "Sarah",
    starRating: 4.5,
    review: "Best product superb experience product to buy dsdsdsdsdsddsd",
  },
  {
    id: 3,
    customerId: 7,
    productId: 5,
    name: "Steven",
    starRating: 4.5,
    review: "Best product superb experience product to buy dsdsdsdsdsddsd",
  },
];
export default function Reviews() {
  return (
    <div className="bg-stone-50 p-4">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-xl">Latest Reviews</h5>
        <Button>View All</Button>
      </div>

      <ul className="m-2 divide-y-2 divide-green-400">
        {RecentReviews.map((review) => (
          <ReviewsList review={review} key={review.id} />
        ))}
      </ul>
    </div>
  );
}
