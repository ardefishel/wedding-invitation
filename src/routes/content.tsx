import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";

import "./content.css";
import { PropsWithChildren, useActionState, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import { motion } from "motion/react";
import { submitRsvp } from "@/server/rsvp";
import { getWishes, submitWish } from "@/server/wishes";

export const Route = createFileRoute("/content")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="no-scrollbar mx-auto h-dvh w-full overflow-y-scroll py-8"
      style={{
        backgroundImage: "url(/assets/bg-texture.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
    >
      {/* wrapper */}
      <div className="mx-4 md:mx-auto md:max-w-lg lg:max-w-xl">
        <PaperSection className="w-full px-2">
          <h3 className="font-noto-serif mt-4 text-center text-[4cqi] uppercase">
            The Wedding of
          </h3>
          <div className="font-parisienne mb-8 flex -rotate-2 items-center justify-center text-[10cqi]">
            <span>Thalita</span>
            <img
              src="/assets/doves-black.webp"
              className="mx-[-2cqi] w-[24cqi] translate-y-[2cqi] rotate-2 object-contain"
            />
            <span>Rama</span>
          </div>

          <div className="mx-auto flex -rotate-[0.5deg] items-center justify-center gap-26 px-4 text-[#5a5a5a] uppercase">
            <span className="font-noto-serif -translate-x-[4cqi] text-base text-[3cqi] tracking-normal">
              24 Mei 2026
            </span>
            <span className="font-noto-serif translate-x-[8cqi] text-center text-base text-[3cqi] leading-none tracking-normal">
              Dammara Space <br /> Bogor
            </span>
          </div>
          <img
            className="mx-auto my-4 max-w-[90cqi] -translate-y-[2cqi]"
            src="/assets/hero-3.webp"
          />
          <p
            className="font-kalam my-4 text-center text-[5cqi] font-bold text-[#3a3a3a] sm:text-3xl"
            dir="rtl"
          >
            بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ
          </p>
          <p className="font-kalam mx-auto mb-10 max-w-sm text-center text-sm leading-snug text-[#4a4a4a]">
            Dengan hati yang penuh bahagia, kami ingin mengajak
            Bapak/Ibu/Saudara/i untuk menjadi bagian dari momen spesial kami.
            Hari itu akan menjadi awal perjalanan kami bersama, dan doa serta
            kehadiran Anda akan melengkapi kebahagiaan kami.
          </p>
          <div className="flex items-center justify-center gap-4 px-4 pb-8">
            <div className="flex-1 text-center">
              <h3 className="font-noto-serif text-fuchsia-plum mb-2 text-sm leading-snug font-bold tracking-wide uppercase sm:text-base">
                Thalita Shafa
                <br />
                Aqilla
              </h3>
              <p className="font-kalam text-fuchsia-plum mt-1 text-xs leading-snug font-semibold">
                Putri dari
                <br />
                Budy Sulistriono &<br />
                Diana Mutiara
              </p>
            </div>
            <img
              src="/assets/divider-vertical.webp"
              className="mx-2 max-h-20 w-4 scale-150 rotate-18 object-contain"
              alt=""
            />
            <div className="flex-1 text-center">
              <h3 className="font-noto-serif text-fuchsia-plum mb-2 text-sm leading-snug font-bold tracking-wide uppercase sm:text-base">
                Rama
                <br />
                Ariandi
              </h3>
              <p className="font-kalam text-fuchsia-plum mt-1 text-xs leading-snug font-semibold">
                Putra dari
                <br />
                Mudihandono &<br />
                Suparti
              </p>
            </div>
          </div>
        </PaperSection>

        <PaperSection className="-mt-[4cqi] w-full px-4 text-center lg:-mt-4">
          <h2 className="font-noto-serif mb-6 text-lg tracking-widest text-[#3a3a3a] uppercase sm:text-xl">
            Awal kami bertemu...
          </h2>

          {/* Love Story Paragraphs */}
          <div className="font-kalam mx-auto mb-12 max-w-sm space-y-4 text-sm leading-relaxed text-[#4a4a4a]">
            <p>
              Kisah ini bermula di SDIT Aliya. Dua hati kecil yang mengenal suka
              dengan cara paling sederhana. Lalu kami tumbuh, berpisah, dan
              menjalani hidup masing-masing.
            </p>
            <p>
              Tak disangka, kami kembali berada di kampus yang sama. Hanya
              senyum dan sapa tanpa menyadari bahwa Sang Maha Cinta sedang
              menyiapkan kelanjutan cerita.
            </p>
            <p>
              September 2025 jadi titik awal cerita kami berlanjut. Kami kembali
              dekat, kembali yakin, ternyata pulang memang selalu pada orang
              yang sama. Dalam waktu yang singkat namun penuh keyakinan, kami
              pun memilih untuk melangkah bersama menuju satu tujuan yang sama:
              pernikahan.
            </p>
          </div>

          {/* Agenda Heading */}
          <h2 className="font-noto-serif mb-6 text-lg tracking-widest text-[#3a3a3a] uppercase sm:text-xl">
            Agenda Acara
          </h2>

          {/* Agenda Details */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center">
              <p className="font-kalam text-sm font-bold uppercase">
                Akad - Resepsi
              </p>
              <p className="font-noto-serif text-base uppercase">
                Minggu, 24 Mei 2026
              </p>
              <p className="font-noto-serif text-base">8.00 - 11.00 WIB</p>
            </div>

            <img
              src="/assets/ornament-ring.webp"
              alt=""
              className="my-2 w-16 object-contain sm:w-20"
            />
            <div className="flex flex-col items-center">
              <p className="font-kalam uppercase">Dammara Space Bogor</p>
              <p className="font-kalam">
                Katulampa, Bogor Timur, Bogor City, West Java 16144
              </p>
            </div>

            <div className="mt-4">
              <a
                href="https://maps.app.goo.gl/ry3ceDzuXcPN8VAJ9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="inline-block w-full px-[8cqi] py-[4cqi] text-[4cqi] text-[#2b2b2b] uppercase"
                  style={{
                    backgroundImage: "url(/assets/border-btn.webp)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                >
                  Google Maps
                </motion.button>
              </a>
            </div>
          </div>
        </PaperSection>

        <PaperSection className="-mt-4 pb-12 text-center">
          <h2 className="font-parisienne text-fuchsia-plum text-2xl sm:text-3xl">
            Be part of our story...
          </h2>

          {/* Gallery: three oval photos */}
          <div className="flex items-end justify-center gap-3">
            <img className="mx-auto max-w-[70cqi]" src="/assets/hero-1.webp" />
          </div>

          <p className="font-parisienne text-fuchsia-plum text-xl sm:text-2xl">
            To celebrate love, laughter, and our forever.
          </p>
        </PaperSection>

        <PaperSection className="-mt-4">
          <FormSection />
          <WishesSection />
        </PaperSection>
      </div>
    </motion.div>
  );
}

const PaperSection = ({
  className,
  children,
}: { className?: string } & PropsWithChildren) => {
  return (
    <section
      className={twMerge("py-8", className)}
      style={{
        backgroundImage: "url(/assets/bg-letter-vertical-2.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        containerType: "inline-size",
        backgroundPositionX: "center",
      }}
    >
      {children}
    </section>
  );
};

const FormSection = () => {
  const submitRsvpFn = useServerFn(submitRsvp);
  const [rsvpStatus, setRsvpStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");

  const handleRsvpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setRsvpStatus("pending");

    try {
      await submitRsvpFn({
        data: {
          name: formData.get("name") as string,
          whatsapp: formData.get("whatsapp") as string,
          status: formData.get("status") as string,
        },
      });
      setRsvpStatus("success");
      form.reset();
    } catch {
      setRsvpStatus("error");
    }
  };

  return (
    <section className="-mt-4 px-4 pt-10 pb-8 text-center">
      {/* RSVP Heading */}
      <h2 className="font-noto-serif mb-8 text-2xl tracking-[0.3em] text-[#3a3a3a] sm:text-3xl">
        RSVP
      </h2>

      {/* Form */}
      <form
        onSubmit={handleRsvpSubmit}
        className="mx-auto space-y-4 text-left"
        style={{ maxWidth: "420px" }}
      >
        {/* NAMA */}
        <div className="flex items-center gap-4">
          <label
            className="font-noto-serif text-fuchsia-plum text-xs font-bold tracking-widest uppercase"
            style={{ minWidth: "120px" }}
          >
            Nama:
          </label>
          <input
            type="text"
            name="name"
            required
            className="font-kalam h-9 flex-1 border border-black bg-[#e8b4be] px-3 text-sm text-[#3a3a3a] outline-none"
          />
        </div>

        {/* NO WHATSAPP */}
        <div className="flex items-center gap-4">
          <label
            className="font-noto-serif text-fuchsia-plum text-xs font-bold tracking-widest uppercase"
            style={{ minWidth: "120px" }}
          >
            No WhatsApp:
          </label>
          <input
            type="tel"
            name="whatsapp"
            required
            className="font-kalam h-9 flex-1 border border-black bg-[#e8b4be] px-3 text-sm text-[#3a3a3a] outline-none"
          />
        </div>

        {/* STATUS */}
        <div className="flex items-center gap-4">
          <label
            className="font-noto-serif text-fuchsia-plum text-xs font-bold tracking-widest uppercase"
            style={{ minWidth: "120px" }}
          >
            Status:
          </label>
          <div className="flex items-center gap-5">
            <label className="font-noto-serif flex cursor-pointer items-center gap-2 text-xs text-[#3a3a3a]">
              <input
                type="radio"
                name="status"
                value="hadir"
                required
                className="h-6 w-6 shrink-0 appearance-none rounded-full border-2 border-black bg-[#e8b4be] transition-colors checked:border-black checked:bg-[#832251]"
              />
              Akan Hadir
            </label>
            <label className="font-noto-serif flex cursor-pointer items-center gap-2 text-xs text-[#3a3a3a]">
              <input
                type="radio"
                name="status"
                value="tidak-hadir"
                className="h-6 w-6 shrink-0 appearance-none rounded-full border-2 border-black bg-[#e8b4be] transition-colors checked:border-black checked:bg-[#832251]"
              />
              Tidak Bisa Hadir
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button
            type="submit"
            disabled={rsvpStatus === "pending"}
            className="font-noto-serif w-full rounded-full bg-[#2a2a2a] py-4 text-xs tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#1a1a1a] disabled:opacity-50"
          >
            {rsvpStatus === "pending" ? "Mengirim..." : "Kirim RSVP"}
          </button>
        </div>

        {rsvpStatus === "success" && (
          <p className="font-kalam text-center text-sm text-green-700">
            Terima kasih! RSVP Anda telah terkirim.
          </p>
        )}
        {rsvpStatus === "error" && (
          <p className="font-kalam text-center text-sm text-red-700">
            Gagal mengirim. Silakan coba lagi.
          </p>
        )}
      </form>
    </section>
  );
};

const WishesSection = () => {
  const submitWishFn = useServerFn(submitWish);
  const getWishesFn = useServerFn(getWishes);

  const [wishesList, setWishesList] = useState<
    { id: number; name: string; message: string; createdAt: Date }[]
  >([]);
  const [wishStatus, setWishStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");

  useEffect(() => {
    getWishesFn().then(setWishesList).catch(console.error);
  }, []);

  const handleWishSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setWishStatus("pending");

    try {
      await submitWishFn({
        data: {
          name: formData.get("name") as string,
          message: formData.get("message") as string,
        },
      });
      setWishStatus("success");
      form.reset();
      const updated = await getWishesFn();
      setWishesList(updated);
    } catch {
      setWishStatus("error");
    }
  };

  const formatDate = (date: Date) => {
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear().toString().slice(-2)}`;
  };

  return (
    <section className="-mt-4 px-4  pb-10 text-center">
      {/* Ornament Divider */}
      <div className="mt-10">
        <img
          src="/assets/ornament-divider.webp"
          alt=""
          className="mx-auto w-64 sm:w-72"
        />
      </div>
      <h3 className="text-center uppercase font-noto-serif tracking-wide text-2xl mt-8">Sudut Ucapan</h3>
      <div className="ucapan-border-frame">
        <div className="ucapan-comments-list">
          {wishesList.map((item) => (
            <div key={item.id} className="ucapan-comment-item">
              <p className="font-noto-serif text-sm font-bold text-[#3a3a3a]">
                {item.name}{" "}
                <span className="font-normal text-[#7a7a7a]">
                  - {formatDate(item.createdAt)}
                </span>
              </p>
              <p className="font-kalam text-sm text-[#4a4a4a]">
                {item.message}
              </p>
            </div>
          ))}
          {wishesList.length === 0 && (
            <p className="font-kalam py-4 text-sm text-[#7a7a7a]">
              Belum ada ucapan. Jadilah yang pertama!
            </p>
          )}
        </div>

        {/* Ucapan Form */}
        <form onSubmit={handleWishSubmit} className="ucapan-form">
          <div className="flex items-center gap-4">
            <label
              className="font-noto-serif text-fuchsia-plum text-xs font-bold tracking-widest uppercase"
              style={{ minWidth: "90px" }}
            >
              Nama:
            </label>
            <input
              type="text"
              name="name"
              required
              className="font-kalam h-9 flex-1 border border-black bg-[#e8b4be] px-3 text-sm text-[#3a3a3a] outline-none"
            />
          </div>

          <div className="flex items-start gap-4">
            <label
              className="font-noto-serif text-fuchsia-plum mt-2 text-xs font-bold tracking-widest uppercase"
              style={{ minWidth: "90px" }}
            >
              Ucapan:
            </label>
            <textarea
              rows={3}
              name="message"
              required
              className="font-kalam flex-1 resize-none border border-black bg-[#e8b4be] px-3 py-2 text-sm text-[#3a3a3a] outline-none"
            />
          </div>

          <div className="flex justify-center pt-3">
            <button
              type="submit"
              disabled={wishStatus === "pending"}
              className="font-noto-serif rounded-full bg-[#2a2a2a] px-10 py-3 text-xs tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#1a1a1a] disabled:opacity-50"
            >
              {wishStatus === "pending" ? "Mengirim..." : "Kirim Ucapan"}
            </button>
          </div>

          {wishStatus === "success" && (
            <p className="font-kalam text-center text-sm text-green-700">
              Ucapan Anda telah terkirim!
            </p>
          )}
          {wishStatus === "error" && (
            <p className="font-kalam text-center text-sm text-red-700">
              Gagal mengirim. Silakan coba lagi.
            </p>
          )}
        </form>
      </div>

      <div className="font-kalam md:max-w-md max-w-sm mx-auto px-6 text-center text-sm leading-relaxed">
        <p>
          Dengan tidak mengurangi rasa hormat, kami dengan tulus memohon agar
          Bapak/Ibu/Saudara/i tidak perlu memberikan amplop, souvenir, hadiah,
          atau tanda kasih lainnya.
        </p>
        <p className="mt-4 ">
          Bagi kami, kehadiran serta doa dan restu yang tulus adalah anugerah
          terindah yang sangat kami harapkan.
        </p>
      </div>

      {/* Footer Credit */}
      {/* <p className="font-kalam mt-8 text-xs leading-relaxed text-[#7a7a7a]">
        This website is designed by
        <br />
        Wira Putra & Stevina Peni | 2026
      </p> */}
    </section>
  );
};
