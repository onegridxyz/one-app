import AuthGuard from '../../auth/AuthGuard';

export default function ListingFlashCardPage() {
  return (
    <AuthGuard>
      <div>Flash Card Listing Page</div>
    </AuthGuard>
  );
}
