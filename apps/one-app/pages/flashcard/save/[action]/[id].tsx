import { useRouter } from 'next/router';

export default function SaveFlashCardPage() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <div>
      Save Flash Card Page: action={action} id={id}
    </div>
  );
}
