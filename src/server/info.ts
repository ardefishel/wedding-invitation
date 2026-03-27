import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { desc } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { reservations, wishes } from "@/db/schema";

export const getInfoData = createServerFn({ method: "GET" }).handler(
  async () => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session) {
      throw new Error("Unauthorized");
    }

    const [reservationsList, wishesList] = await Promise.all([
      db.select().from(reservations).orderBy(desc(reservations.createdAt)),
      db.select().from(wishes).orderBy(desc(wishes.createdAt)),
    ]);

    return { reservations: reservationsList, wishes: wishesList };
  },
);
