import { findById } from '../../../api/category/category.hook';
import { Category } from '../../../api/category/category.interface';
import AuthGuard from '../../../auth/AuthGuard';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

function ViewCategory() {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, data, refetch } = useQuery<Category, Error>(
    ['fetchById', id],
    findById
  );
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
