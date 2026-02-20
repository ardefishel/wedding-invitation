import { createFileRoute } from '@tanstack/react-router'
import { useNavigateWithTransition } from '../utils/transitions'
import { LoadingImage, ThemeButton } from '.'
import { useState, useCallback } from 'react'

import './content.css'

export const Route = createFileRoute('/content')({
  component: RouteComponent,
})

function RouteComponent() {
  const { navigate } = useNavigateWithTransition()

  const totalImages = 5;
  const [loadedImages, setLoadedImages] = useState(0);

  const handleImageLoaded = useCallback(() => {
    setLoadedImages((value) => (value < totalImages ? value + 1 : value));
  }, [totalImages]);

  const allImagesLoaded = loadedImages >= totalImages;

  return (
    <div className='bg-[#D7C5B9] py-8 sm:py-16 min-h-screen'>
      <div className='max-w-xl mx-auto'>

        {/* ─── Section 1: Hero / Bismillah / Couple Names ─── */}
        <section className='bg-[#E9E4D9] text-center px-6 pt-12 pb-12 overflow-hidden'>

          {/* Title */}
          <div className='mb-2'>
            <h3 className="font-noto-serif uppercase text-lg sm:text-xl tracking-[0.4em] text-[#5a5a5a] mb-2">The Wedding of</h3>
            <div className="font-parisienne text-6xl sm:text-7xl flex justify-center items-center text-[#3a3a3a]">
              <span className="flex-1 text-right">Thalita</span>
              <LoadingImage
                src="/assets/black-doves.png"
                className="w-[28%] -mx-1 object-contain translate-y-3"
                onImageLoad={handleImageLoaded}
              />
              <span className="flex-1 text-left">Rama</span>
            </div>
          </div>

          {/* Date & Venue Row */}
          <div className='flex justify-between items-center uppercase tracking-[0.15em] text-[#5a5a5a] mt-1 mb-1'>
            <span className='font-noto-serif text-base tracking-[0.2em]'>24 Mei 2026</span>
            <span className='font-noto-serif text-center text-base tracking-[0.2em]'>Dammara Space <br /> Bogor</span>
          </div>

          {/* Couple Photo + Ornament */}
          <div className='flex flex-col items-center -mt-4 -mx-4'>
            <div className='relative w-full translate-x-4'>
              <LoadingImage
                className='mx-auto w-full'
                src='/assets/main-frame-couples.png'
                onImageLoad={handleImageLoaded}
              />
            </div>
          </div>

          {/* Bismillah */}
          <p className='font-kalam font-bold text-2xl sm:text-3xl mt-4 mb-4 text-[#3a3a3a]' dir='rtl'>
            بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْمِ
          </p>

          {/* Invitation Text */}
          <p className='font-kalam text-base leading-relaxed text-[#4a4a4a] max-w-sm mx-auto mb-10 px-2'>
            Dengan hati yang penuh bahagia, kami ingin mengajak Bapak/Ibu/Saudara/i untuk menjadi bagian dari momen spesial kami. Hari itu akan menjadi awal perjalanan kami bersama, dan doa serta kehadiran Anda akan melengkapi kebahagiaan kami.
          </p>

          {/* Bride & Groom Names */}
          <div className='flex items-center justify-center gap-4 px-4'>
            <div className='flex-1 text-center'>
              <h3 className='font-noto-serif text-sm sm:text-base font-bold uppercase tracking-wide text-fuchsia-plum leading-snug'>
                Thalita Shafa<br />Aqilla
              </h3>
              <p className='font-kalam text-xs mt-1 text-[#5a5a5a] leading-snug'>
                Putri dari<br />Budy Sulistriono &<br />Diana Mutiara
              </p>
            </div>
            <img
              src='/assets/divider-rough.png'
              className='w-4 max-h-20 object-contain opacity-40 mx-2'
              alt=''
            />
            <div className='flex-1 text-center'>
              <h3 className='font-noto-serif text-sm sm:text-base font-bold uppercase tracking-wide text-fuchsia-plum leading-snug'>
                Rama<br />Ariandi
              </h3>
              <p className='font-kalam text-xs mt-1 text-[#5a5a5a] leading-snug'>
                Putra dari<br />Mudi Handoko &<br />Suparti
              </p>
            </div>
          </div>

        </section>

        {/* ─── Section 2: Love Story + Agenda ─── */}
        <section className='bg-[#E9E4D9] text-center px-6 py-12 mt-[2px]'>

          {/* Love Story Heading */}
          <h2 className='font-noto-serif uppercase text-lg sm:text-xl tracking-widest mb-6 text-[#3a3a3a]'>
            Awal kami bertemu...
          </h2>

          {/* Love Story Paragraphs */}
          <div className='font-kalam text-sm leading-relaxed text-[#4a4a4a] max-w-sm mx-auto space-y-4 mb-12'>
            <p>Kisah ini bermula di SDIT Aliya. Dua hati kecil yang mengenal suka dengan cara paling sederhana. Lalu kami tumbuh, berpisah, dan menjalani hidup masing-masing.</p>
            <p>Tak disangka, kami kembali berada di kampus yang sama. Hanya senyum dan sapa tanpa menyadari bahwa Sang Maha Cinta sedang menyiapkan kelanjutan cerita.</p>
            <p>September 2025 jadi titik awal cerita kami berlanjut. Kami kembali dekat, kembali yakin, ternyata pulang memang selalu pada orang yang sama. Dalam waktu yang singkat namun penuh keyakinan, kami pun memilih untuk melangkah bersama menuju satu tujuan yang sama: pernikahan.</p>
          </div>

          {/* Agenda Heading */}
          <h2 className='font-noto-serif uppercase text-lg sm:text-xl tracking-widest mb-6 text-[#3a3a3a]'>
            Agenda Acara
          </h2>

          {/* Agenda Details */}
          <div className='flex flex-col items-center gap-2'>
            <span className='font-noto-serif uppercase text-sm tracking-widest text-[#5a5a5a]'>Akad</span>
            <span className='font-noto-serif text-base font-bold text-[#3a3a3a]'>8.00 - 11.00 WIB</span>

            <LoadingImage
              src="/assets/wedding-ring-picture.png"
              alt=""
              className='w-16 sm:w-20 my-2 object-contain'
              onImageLoad={handleImageLoaded}
            />

            <span className='font-kalam font-bold text-sm text-[#3a3a3a] uppercase'>Dammara Space Bogor</span>
            <span className='font-kalam italic text-sm text-[#5a5a5a]'>Katulampa, Bogor Timur, Bogor City, West Java 16144</span>

            <div className='mt-4'>
              <ThemeButton text='Google Maps' />
            </div>
          </div>

        </section>

        {/* ─── Section 3: Gallery / Closing ─── */}
        <section className='text-center text-fuchsia-plum px-6 py-14 mt-[2px] bg-[#E9E4D9] '>

          <h2 className='font-parisienne text-2xl sm:text-3xl mb-8'>
            Be part of our story...
          </h2>

          {/* Gallery: three oval photos */}
          <div className='flex justify-center items-end gap-3 mb-8'>
            <LoadingImage
              src='/assets/couples-2.png'
              onImageLoad={handleImageLoaded}
            />
          </div>

          <p className='font-parisienne text-xl sm:text-2xl text-fuchsia-plum'>
            To celebrate love, laughter, and our forever.
          </p>

        </section>
        <section className='bg-[#E9E4D9] text-center px-8 pt-10 pb-10 mt-[2px]'>
          {/* RSVP Heading */}
          <h2 className='font-noto-serif text-2xl sm:text-3xl tracking-[0.3em] mb-8 text-[#3a3a3a]'>
            RSVP
          </h2>

          {/* Form */}
          <form className='mx-auto text-left space-y-4' style={{ maxWidth: '420px' }}>

            {/* NAMA */}
            <div className='flex items-center gap-4'>
              <label className='font-noto-serif text-xs font-bold uppercase tracking-widest text-fuchsia-plum' style={{ minWidth: '120px' }}>
                Nama:
              </label>
              <input
                type='text'
                className='flex-1 bg-[#e8b4be] border border-black h-9 px-3 outline-none font-kalam text-sm text-[#3a3a3a]'
              />
            </div>

            {/* NO WHATSAPP */}
            <div className='flex items-center gap-4'>
              <label className='font-noto-serif text-xs font-bold uppercase tracking-widest text-fuchsia-plum' style={{ minWidth: '120px' }}>
                No WhatsApp:
              </label>
              <input
                type='tel'
                className='flex-1 bg-[#e8b4be] border border-black h-9 px-3 outline-none font-kalam text-sm text-[#3a3a3a]'
              />
            </div>

            {/* STATUS */}
            <div className='flex items-center gap-4'>
              <label className='font-noto-serif text-xs font-bold uppercase tracking-widest text-fuchsia-plum' style={{ minWidth: '120px' }}>
                Status:
              </label>
              <div className='flex items-center gap-5'>
                <label className='flex items-center gap-2 cursor-pointer font-noto-serif text-sm text-[#3a3a3a]'>
                  <input
                    type='radio'
                    name='status'
                    value='hadir'
                    className='appearance-none w-7 h-7 rounded-full border-2 border-black bg-[#e8b4be] checked:bg-fuchsia-plum checked:border-black transition-colors shrink-0'
                  />
                  Akan Hadir
                </label>
                <label className='flex items-center gap-2 cursor-pointer font-noto-serif text-sm text-[#3a3a3a]'>
                  <input
                    type='radio'
                    name='status'
                    value='tidak-hadir'
                    className='appearance-none w-7 h-7 rounded-full border-2 border-black bg-[#e8b4be] checked:bg-fuchsia-plum checked:border-black transition-colors shrink-0'
                  />
                  Tidak Bisa Hadir
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className='pt-3'>
              <button
                type='submit'
                className='bg-[#2a2a2a] text-white font-noto-serif text-xs tracking-[0.2em] uppercase py-4 rounded-full w-full hover:bg-[#1a1a1a] transition-colors'
              >
                Kirim RSVP
              </button>
            </div>

          </form>

          {/* Ornament Divider */}
          <div className='mt-10'>
            <img
              src='/assets/ornament-divider.png'
              alt=''
              className='mx-auto w-64 sm:w-72'
            />
          </div>

        </section>

        {/* ─── Section 5: Ucapan (Wishes / Comments) ─── */}
        <section className='bg-[#E9E4D9] text-center px-4 pt-10 pb-10 mt-[2px]'>
          <div className='ucapan-border-frame'>

            {/* Comments List */}
            <div className='ucapan-comments-list'>
              {[
                { name: 'stevina', date: '27/01/26', message: 'Semoga lancar dan bahagia selaluu' },
                { name: 'stevina', date: '27/01/26', message: 'Semoga lancar dan bahagia selaluu' },
                { name: 'stevina', date: '27/01/26', message: 'Semoga lancar dan bahagia selaluu' },
              ].map((item, idx) => (
                <div key={idx} className='ucapan-comment-item'>
                  <p className='font-noto-serif text-sm font-bold text-[#3a3a3a]'>
                    {item.name} <span className='font-normal text-[#7a7a7a]'>- {item.date}</span>
                  </p>
                  <p className='font-kalam text-sm text-[#4a4a4a]'>{item.message}</p>
                </div>
              ))}
            </div>

            {/* Ucapan Form */}
            <form className='ucapan-form'>
              <div className='flex items-center gap-4'>
                <label className='font-noto-serif text-xs font-bold uppercase tracking-widest text-fuchsia-plum' style={{ minWidth: '90px' }}>
                  Nama:
                </label>
                <input
                  type='text'
                  className='flex-1 bg-[#e8b4be] border border-black h-9 px-3 outline-none font-kalam text-sm text-[#3a3a3a]'
                />
              </div>

              <div className='flex items-start gap-4'>
                <label className='font-noto-serif text-xs font-bold uppercase tracking-widest text-fuchsia-plum mt-2' style={{ minWidth: '90px' }}>
                  Ucapan:
                </label>
                <textarea
                  rows={3}
                  className='flex-1 bg-[#e8b4be] border border-black px-3 py-2 outline-none font-kalam text-sm text-[#3a3a3a] resize-none'
                />
              </div>

              <div className='pt-3 flex justify-center'>
                <button
                  type='submit'
                  className='bg-[#2a2a2a] text-white font-noto-serif text-xs tracking-[0.2em] uppercase py-3 px-10 rounded-full hover:bg-[#1a1a1a] transition-colors'
                >
                  Kirim Ucapan
                </button>
              </div>
            </form>

          </div>

          {/* Footer Credit */}
          <p className='font-kalam text-xs text-[#7a7a7a] mt-8 leading-relaxed'>
            This website is designed by<br />
            Wira Putra & Stevina Peni | 2026
          </p>
        </section>

      </div>
    </div>
  )
}
