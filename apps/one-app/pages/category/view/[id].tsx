import { useGetCategory } from '../../../api/category/category.service';
import AuthGuard from '../../../auth/AuthGuard';
import { useRouter } from 'next/router';

function ViewCategory() {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, data } = useGetCategory(id);
  if (isLoading) {
    return <div>Loading</div>;
  }
  return <div>View Category {JSON.stringify(data)}</div>;
}

export default function ViewCategoryPage() {
  return (
    <AuthGuard>
      <ViewCategory />
    </AuthGuard>
  );
}
