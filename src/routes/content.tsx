import { createFileRoute, Link } from "@tanstack/react-router";

import "./content.css";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { motion } from "motion/react";

export const Route = createFileRoute("/content")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-dvh overflow-y-scroll no-scrollbar py-8 mx-auto"
      style={{
        backgroundImage: "url(/assets/bg-texture.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
    >
      {/* wrapper */}
      <div className="max-w-md mx-4 md:mx-auto">
        <PaperSection className=" px-2">
          <h3 className="font-noto-serif text-center uppercase text-[4cqi] mt-4">
            The Wedding of
          </h3>
          <div className="font-parisienne text-[10cqi] flex justify-center -rotate-2 items-center mb-8">
            <span>Thalita</span>
            <img
              src="/assets/doves-black.webp"
              className="w-[24cqi] mx-[-2cqi] object-contain translate-y-[2cqi] rotate-2"
            />
            <span>Rama</span>
          </div>

          <div className="flex justify-center gap-26 px-4 mx-auto items-center uppercase -rotate-[0.5deg] text-[#5a5a5a]">
            <span className="font-noto-serif text-[3cqi] text-base tracking-normal -translate-x-[4cqi]">
              24 Mei 2026
            </span>
            <span className="font-noto-serif text-[3cqi] text-center translate-x-[8cqi] text-base tracking-normal leading-none ">
              Dammara Space <br /> Bogor
            </span>
          </div>
          <img
            className="max-w-[70cqi] mx-auto -translate-y-[2cqi] "
            src="/assets/hero-1.webp"
          />
          <p
            className="font-kalam font-bold text-[5cqi] text-center sm:text-3xl -mt-3 mb-4 text-[#3a3a3a]"
            dir="rtl"
          >
            بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ
          </p>
          <p className="font-kalam text-[3.6cqi] leading-snug text-center text-[#4a4a4a] max-w-sm mx-auto mb-10 ">
            Dengan hati yang penuh bahagia, kami ingin mengajak
            Bapak/Ibu/Saudara/i untuk menjadi bagian dari momen spesial kami.
            Hari itu akan menjadi awal perjalanan kami bersama, dan doa serta
            kehadiran Anda akan melengkapi kebahagiaan kami.
          </p>
          <div className="flex items-center justify-center gap-4 px-4 pb-8">
            <div className="flex-1 text-center">
              <h3 className="mb-2 font-noto-serif text-sm sm:text-base font-bold uppercase tracking-wide text-fuchsia-plum leading-snug">
                Thalita Shafa
                <br />
                Aqilla
              </h3>
              <p className="font-kalam text-xs mt-1 text-fuchsia-plum leading-snug">
                Putri dari
                <br />
                Budy Sulistriono &<br />
                Diana Mutiara
              </p>
            </div>
            <img
              src="/assets/divider-vertical.webp"
              className="w-4 max-h-20 object-contain mx-2 rotate-18 scale-150"
              alt=""
            />
            <div className="flex-1 text-center">
              <h3 className="mb-2 font-noto-serif text-sm sm:text-base font-bold uppercase tracking-wide text-fuchsia-plum leading-snug">
                Rama
                <br />
                Ariandi
              </h3>
              <p className="font-kalam text-xs mt-1 text-fuchsia-plum leading-snug">
                Putra dari
                <br />
                Mudi Handoko &<br />
                Suparti
              </p>
            </div>
          </div>
        </PaperSection>

        <PaperSection className="-mt-[4cqi] w-full text-center px-4">
          <h2 className="font-noto-serif uppercase text-lg sm:text-xl tracking-widest mb-6 text-[#3a3a3a]">
            Awal kami bertemu...
          </h2>

          {/* Love Story Paragraphs */}
          <div className="font-kalam text-sm leading-relaxed text-[#4a4a4a] max-w-sm mx-auto space-y-4 mb-12">
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
          <h2 className="font-noto-serif uppercase text-lg sm:text-xl tracking-widest mb-6 text-[#3a3a3a]">
            Agenda Acara
          </h2>

          {/* Agenda Details */}
          <div className="flex flex-col items-center gap-2 ">
            <span className="font-noto-serif uppercase text-sm tracking-widest text-fuchsia-plum">
              Akad
            </span>
            <span className="font-noto-serif text-base font-bold text-fuchsia-plum">
              8.00 - 11.00 WIB
            </span>

            <img
              src="/assets/ornament-ring.webp"
              alt=""
              className="w-16 sm:w-20 my-2 object-contain"
            />

            <span className="font-kalam font-bold text-sm text-fuchsia-plum uppercase">
              Dammara Space Bogor
            </span>
            <span className="font-kalam italic text-sm  text-fuchsia-plum">
              Katulampa, Bogor Timur, Bogor City, West Java 16144
            </span>

            <div className="mt-4">
              <Link to="/content">
                <motion.button
                  className="uppercase  text-[#2b2b2b]  w-full inline-block text-[4cqi] px-[8cqi] py-[4cqi]"
                  style={{
                    backgroundImage: "url(/assets/border-btn.webp)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                >
                  Google Maps
                </motion.button>
              </Link>
            </div>
          </div>
        </PaperSection>

        <PaperSection className="text-center -mt-4 pb-12">
          <h2 className="font-parisienne text-2xl sm:text-3xl text-fuchsia-plum">
            Be part of our story...
          </h2>

          {/* Gallery: three oval photos */}
          <div className="flex justify-center items-end gap-3">
            <img className="max-w-[70cqi] mx-auto" src="/assets/hero-1.webp" />
          </div>

          <p className="font-parisienne text-xl sm:text-2xl text-fuchsia-plum">
            To celebrate love, laughter, and our forever.
          </p>
        </PaperSection>

        <FormSection />
        <WishesSection />
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
  return (
    <PaperSection className="text-center px-4 pt-10 pb-18 -mt-4">
      {/* RSVP Heading */}
      <h2 className="font-noto-serif text-2xl sm:text-3xl tracking-[0.3em] mb-8 text-[#3a3a3a]">
        RSVP
      </h2>

      {/* Form */}
      <form
        className="mx-auto text-left space-y-4"
        style={{ maxWidth: "420px" }}
      >
        {/* NAMA */}
        <div className="flex items-center gap-4">
          <label
            className="font-noto-serif text-xs font-bold uppercase tracking-widest text-fuchsia-plum"
            style={{ minWidth: "120px" }}
          >
            Nama:
          </label>
          <input
            type="text"
            className="flex-1 bg-[#e8b4be] border border-black h-9 px-3 outline-none font-kalam text-sm text-[#3a3a3a]"
          />
        </div>

        {/* NO WHATSAPP */}
        <div className="flex items-center gap-4">
          <label
            className="font-noto-serif text-xs font-bold uppercase tracking-widest text-fuchsia-plum"
            style={{ minWidth: "120px" }}
          >
            No WhatsApp:
          </label>
          <input
            type="tel"
            className="flex-1 bg-[#e8b4be] border border-black h-9 px-3 outline-none font-kalam text-sm text-[#3a3a3a]"
          />
        </div>

        {/* STATUS */}
        <div className="flex items-center gap-4">
          <label
            className="font-noto-serif text-xs font-bold uppercase tracking-widest text-fuchsia-plum"
            style={{ minWidth: "120px" }}
          >
            Status:
          </label>
          <div className="flex items-center gap-5">
            <label className="flex items-center gap-2 cursor-pointer font-noto-serif text-xs text-[#3a3a3a]">
              <input
                type="radio"
                name="status"
                value="hadir"
                className="appearance-none w-6 h-6 rounded-full border-2 border-black bg-[#e8b4be] checked:bg-fuchsia-plum checked:border-black transition-colors shrink-0"
              />
              Akan Hadir
            </label>
            <label className="flex items-center gap-2 cursor-pointer font-noto-serif text-xs text-[#3a3a3a]">
              <input
                type="radio"
                name="status"
                value="tidak-hadir"
                className="appearance-none w-6 h-6 rounded-full border-2 border-black bg-[#e8b4be] checked:bg-fuchsia-plum checked:border-black transition-colors shrink-0"
              />
              Tidak Bisa Hadir
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button
            type="submit"
            className="bg-[#2a2a2a] text-white font-noto-serif text-xs tracking-[0.2em] uppercase py-4 rounded-full w-full hover:bg-[#1a1a1a] transition-colors"
          >
            Kirim RSVP
          </button>
        </div>
      </form>

      {/* Ornament Divider */}
      <div className="mt-10">
        <img
          src="/assets/ornament-divider.webp"
          alt=""
          className="mx-auto w-64 sm:w-72"
        />
      </div>
    </PaperSection>
  );
};

const WishesSection = () => {
  return (
    <PaperSection className="text-center px-4 pt-10 pb-10 -mt-4">
      <div className="ucapan-border-frame">
        <div className="ucapan-comments-list">
          {[
            {
              name: "stevina",
              date: "27/01/26",
              message: "Semoga lancar dan bahagia selaluu",
            },
            {
              name: "stevina",
              date: "27/01/26",
              message: "Semoga lancar dan bahagia selaluu",
            },
            {
              name: "stevina",
              date: "27/01/26",
              message: "Semoga lancar dan bahagia selaluu",
            },
          ].map((item, idx) => (
            <div key={idx} className="ucapan-comment-item">
              <p className="font-noto-serif text-sm font-bold text-[#3a3a3a]">
                {item.name}{" "}
                <span className="font-normal text-[#7a7a7a]">
                  - {item.date}
                </span>
              </p>
              <p className="font-kalam text-sm text-[#4a4a4a]">
                {item.message}
              </p>
            </div>
          ))}
        </div>

        {/* Ucapan Form */}
        <form className="ucapan-form">
          <div className="flex items-center gap-4">
            <label
              className="font-noto-serif text-xs font-bold uppercase tracking-widest text-fuchsia-plum"
              style={{ minWidth: "90px" }}
            >
              Nama:
            </label>
            <input
              type="text"
              className="flex-1 bg-[#e8b4be] border border-black h-9 px-3 outline-none font-kalam text-sm text-[#3a3a3a]"
            />
          </div>

          <div className="flex items-start gap-4">
            <label
              className="font-noto-serif text-xs font-bold uppercase tracking-widest text-fuchsia-plum mt-2"
              style={{ minWidth: "90px" }}
            >
              Ucapan:
            </label>
            <textarea
              rows={3}
              className="flex-1 bg-[#e8b4be] border border-black px-3 py-2 outline-none font-kalam text-sm text-[#3a3a3a] resize-none"
            />
          </div>

          <div className="pt-3 flex justify-center">
            <button
              type="submit"
              className="bg-[#2a2a2a] text-white font-noto-serif text-xs tracking-[0.2em] uppercase py-3 px-10 rounded-full hover:bg-[#1a1a1a] transition-colors"
            >
              Kirim Ucapan
            </button>
          </div>
        </form>
      </div>

      {/* Footer Credit */}
      <p className="font-kalam text-xs text-[#7a7a7a] mt-8 leading-relaxed">
        This website is designed by
        <br />
        Wira Putra & Stevina Peni | 2026
      </p>
    </PaperSection>
  );
};
