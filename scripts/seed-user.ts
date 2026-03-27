import { config } from "dotenv";
config({ path: ".env.local" });

const email = process.argv[2];
const password = process.argv[3];
const name = process.argv[4] || "Admin";

if (!email || !password) {
  console.error("Usage: npx tsx scripts/seed-user.ts <email> <password> [name]");
  process.exit(1);
}

async function main() {
  const { auth } = await import("../src/lib/auth");
  const user = await auth.api.signUpEmail({
    body: { email, password, name },
  });
  console.log("User created:", user.user.email);
}

main().catch(console.error);
