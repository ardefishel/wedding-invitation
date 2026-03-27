import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { getSession } from "@/lib/auth.functions";

export const Route = createFileRoute("/login")({
  beforeLoad: async () => {
    const session = await getSession();
    if (session) {
      throw redirect({ to: "/info" });
    }
  },
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      setError(error.message || error.statusText || "Login gagal");
      setLoading(false);
      return;
    }

    navigate({ to: "/info" });
  };

  return (
    <html lang="en">
      <body className="flex min-h-dvh items-center justify-center bg-[#1a1a1a]">
        <div className="w-full max-w-sm rounded-lg bg-[#2a2a2a] p-8 shadow-xl">
          <h1 className="mb-6 text-center text-xl font-semibold tracking-wide text-white">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-xs tracking-wide text-gray-400 uppercase">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded border border-gray-600 bg-[#1a1a1a] px-3 py-2 text-sm text-white outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs tracking-wide text-gray-400 uppercase">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded border border-gray-600 bg-[#1a1a1a] px-3 py-2 text-sm text-white outline-none focus:border-gray-400"
              />
            </div>
            {error && (
              <p className="text-center text-sm text-red-400">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded bg-white py-2 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-gray-200 disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </body>
    </html>
  );
}
