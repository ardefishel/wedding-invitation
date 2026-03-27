import { createFileRoute, redirect } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { getSession } from "@/lib/auth.functions";
import { getInfoData } from "@/server/info";

export const Route = createFileRoute("/info")({
  beforeLoad: async () => {
    const session = await getSession();
    if (!session) {
      throw redirect({ to: "/login" });
    }
    return { user: session.user };
  },
  component: InfoPage,
});

function InfoPage() {
  const { user } = Route.useRouteContext();
  const getInfoDataFn = useServerFn(getInfoData);

  const [data, setData] = useState<{
    reservations: {
      id: number;
      name: string;
      whatsapp: string;
      status: string;
      createdAt: Date;
    }[];
    wishes: {
      id: number;
      name: string;
      message: string;
      createdAt: Date;
    }[];
  } | null>(null);

  useEffect(() => {
    getInfoDataFn().then(setData).catch(console.error);
  }, []);

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/login";
  };

  const downloadCsv = (filename: string, headers: string[], rows: string[][]) => {
    const escape = (val: string) =>
      val.includes(",") || val.includes('"') || val.includes("\n")
        ? `"${val.replace(/"/g, '""')}"`
        : val;
    const csv = [headers, ...rows].map((r) => r.map(escape).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportReservations = () => {
    if (!data) return;
    const rows = data.reservations.map((r) => [
      r.name,
      r.whatsapp,
      r.status === "hadir" ? "Hadir" : "Tidak Hadir",
      formatDate(r.createdAt),
    ]);
    downloadCsv("reservations.csv", ["Nama", "WhatsApp", "Status", "Tanggal"], rows);
  };

  const exportWishes = () => {
    if (!data) return;
    const rows = data.wishes.map((w) => [
      w.name,
      w.message,
      formatDate(w.createdAt),
    ]);
    downloadCsv("wishes.csv", ["Nama", "Ucapan", "Tanggal"], rows);
  };

  const formatDate = (date: Date) => {
    const d = new Date(date);
    return d.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <html lang="en">
      <body className="min-h-dvh bg-[#111] text-white">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">{user.email}</span>
              <button
                onClick={handleLogout}
                className="rounded bg-[#2a2a2a] px-4 py-1.5 text-sm text-gray-300 transition-colors hover:bg-[#3a3a3a]"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Reservations */}
          <section className="mb-10">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Reservations{" "}
                <span className="text-sm font-normal text-gray-500">
                  ({data?.reservations.length ?? 0})
                </span>
              </h2>
              <button
                onClick={exportReservations}
                disabled={!data?.reservations.length}
                className="rounded bg-[#2a2a2a] px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-[#3a3a3a] disabled:opacity-30"
              >
                Export CSV
              </button>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-800">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-gray-800 bg-[#1a1a1a]">
                  <tr>
                    <th className="px-4 py-3 font-medium text-gray-400">#</th>
                    <th className="px-4 py-3 font-medium text-gray-400">
                      Nama
                    </th>
                    <th className="px-4 py-3 font-medium text-gray-400">
                      WhatsApp
                    </th>
                    <th className="px-4 py-3 font-medium text-gray-400">
                      Status
                    </th>
                    <th className="px-4 py-3 font-medium text-gray-400">
                      Tanggal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.reservations.map((r, i) => (
                    <tr
                      key={r.id}
                      className="border-b border-gray-800/50 hover:bg-[#1a1a1a]"
                    >
                      <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                      <td className="px-4 py-3">{r.name}</td>
                      <td className="px-4 py-3 text-gray-300">{r.whatsapp}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            r.status === "hadir"
                              ? "bg-green-900/50 text-green-400"
                              : "bg-red-900/50 text-red-400"
                          }`}
                        >
                          {r.status === "hadir" ? "Hadir" : "Tidak Hadir"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-400">
                        {formatDate(r.createdAt)}
                      </td>
                    </tr>
                  ))}
                  {data?.reservations.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-4 py-6 text-center text-gray-500"
                      >
                        Belum ada reservasi.
                      </td>
                    </tr>
                  )}
                  {!data && (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-4 py-6 text-center text-gray-500"
                      >
                        Loading...
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Wishes */}
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Wishes{" "}
                <span className="text-sm font-normal text-gray-500">
                  ({data?.wishes.length ?? 0})
                </span>
              </h2>
              <button
                onClick={exportWishes}
                disabled={!data?.wishes.length}
                className="rounded bg-[#2a2a2a] px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-[#3a3a3a] disabled:opacity-30"
              >
                Export CSV
              </button>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-800">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-gray-800 bg-[#1a1a1a]">
                  <tr>
                    <th className="px-4 py-3 font-medium text-gray-400">#</th>
                    <th className="px-4 py-3 font-medium text-gray-400">
                      Nama
                    </th>
                    <th className="px-4 py-3 font-medium text-gray-400">
                      Ucapan
                    </th>
                    <th className="px-4 py-3 font-medium text-gray-400">
                      Tanggal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.wishes.map((w, i) => (
                    <tr
                      key={w.id}
                      className="border-b border-gray-800/50 hover:bg-[#1a1a1a]"
                    >
                      <td className="px-4 py-3 text-gray-500">{i + 1}</td>
                      <td className="px-4 py-3">{w.name}</td>
                      <td className="max-w-md px-4 py-3 text-gray-300">
                        {w.message}
                      </td>
                      <td className="px-4 py-3 text-gray-400">
                        {formatDate(w.createdAt)}
                      </td>
                    </tr>
                  ))}
                  {data?.wishes.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-4 py-6 text-center text-gray-500"
                      >
                        Belum ada ucapan.
                      </td>
                    </tr>
                  )}
                  {!data && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-4 py-6 text-center text-gray-500"
                      >
                        Loading...
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
