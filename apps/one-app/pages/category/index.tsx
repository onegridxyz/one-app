import { useAuthContext } from '../../auth/useAuthContext';
import AuthGuard from '../../auth/AuthGuard';
import { useGetCategories } from '../../api/category/category.hook';

function ListingCategory() {
  const { user } = useAuthContext();
  const { isLoading, isError, data, error } = useGetCategories();
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    console.log({ data });
  }
  return (
    <>
      <div>Flash Card Listing Page {JSON.stringify(user)}</div>
      <div>
        {data?.map((category) => (
          <div key={category.id}>{category.name}</div>
        ))}
      </div>
    </>
  );
}

export default function ListingCategoryPage() {
  return (
    <AuthGuard>
      <ListingCategory />
    </AuthGuard>
  );
}
