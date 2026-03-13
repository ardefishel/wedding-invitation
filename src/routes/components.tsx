import { Envelope } from "@/components/Envelope";
import { InvitationLetter } from "@/components/InvitationLetter";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/components")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col justify-center items-center bg-grey-olive min-h-dvh overflow-hidden">
      <Envelope />
      <InvitationLetter />
    </div>
  );
}
