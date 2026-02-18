import { useRouter } from "@tanstack/react-router";

export function useNavigateWithTransition() {
  const router = useRouter();

  const navigate = (to: string) => {
    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };

    if (doc.startViewTransition) {
      doc.startViewTransition(() => {
        router.navigate({ to });
      });
    } else {
      router.navigate({ to });
    }
  };

  return { navigate };
}
