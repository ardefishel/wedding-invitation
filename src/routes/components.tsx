import { Envelope } from "@/components/Envelope";
import { InvitationLetter } from "@/components/InvitationLetter";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/components")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-grey-olive flex min-h-dvh flex-col items-center justify-center overflow-hidden">
      <Envelope />
      <InvitationLetter />
    </div>
  );
}
