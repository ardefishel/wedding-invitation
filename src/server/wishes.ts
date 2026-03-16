import { createServerFn } from "@tanstack/react-start";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { wishes } from "@/db/schema";

export const getWishes = createServerFn({ method: "GET" }).handler(async () => {
  const result = await db
    .select()
    .from(wishes)
    .orderBy(desc(wishes.createdAt));

  return result;
});

export const submitWish = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => {
    const d = data as { name: string; message: string };
    if (!d.name || !d.message) {
      throw new Error("Nama dan ucapan harus diisi");
    }
    return d;
  })
  .handler(async ({ data }) => {
    const [result] = await db
      .insert(wishes)
      .values({
        name: data.name,
        message: data.message,
      })
      .returning();

    return { success: true, id: result.id };
  });
