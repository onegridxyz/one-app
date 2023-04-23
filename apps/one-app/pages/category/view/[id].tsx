import AuthGuard from '../../../auth/AuthGuard';
import { useRouter } from 'next/router';

function ViewCategory() {
  const router = useRouter();
  const { id } = router.query;

  return <div>View Category {id}</div>;
}

export default function ViewCategoryPage() {
  return (
    <AuthGuard>
      <ViewCategory />
    </AuthGuard>
  );
}
