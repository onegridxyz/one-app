import { useAuthContext } from '../../auth/useAuthContext';
import AuthGuard from '../../auth/AuthGuard';

export default function ListingFlashCardPage() {
  const { user } = useAuthContext();
  return (
    <AuthGuard>
      <div>Flash Card Listing Page {JSON.stringify(user)}</div>
    </AuthGuard>
  );
}
