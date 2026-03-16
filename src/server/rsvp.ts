import { createServerFn } from "@tanstack/react-start";
import { db } from "@/db";
import { reservations } from "@/db/schema";

export const submitRsvp = createServerFn({ method: "POST" })
  .inputValidator(
    (data: unknown) => {
      const d = data as { name: string; whatsapp: string; status: string };
      if (!d.name || !d.whatsapp || !d.status) {
        throw new Error("Semua field harus diisi");
      }
      if (!["hadir", "tidak-hadir"].includes(d.status)) {
        throw new Error("Status tidak valid");
      }
      return d;
    },
  )
  .handler(async ({ data }) => {
    await db.insert(reservations).values({
      name: data.name,
      whatsapp: data.whatsapp,
      status: data.status,
    });

    return { success: true };
  });
