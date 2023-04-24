import { useAuthContext } from '../../auth/useAuthContext';
import AuthGuard from '../../auth/AuthGuard';
import { useGetCategories } from '../../api/category/category.service';
import Link from 'next/link';

function ListingCategory() {
  const { user } = useAuthContext();
  const { isLoading, isError, data, error } = useGetCategories();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    console.log({ error });
  }

  return (
    <>
      <div>Flash Card Listing Page {JSON.stringify(user)}</div>
      <div>
        <ul>
          {data?.map((category) => (
            <li key={category.id}>
              <Link href={`/category/view/${category.id}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
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
