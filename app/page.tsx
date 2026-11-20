import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full flex-col overflow-x-hidden bg-white text-slate-900">
      {/* Top Navbar */}
      <header className="relative z-20 flex h-16 w-full items-center justify-center bg-[#6B462E] px-4 shadow-sm sm:h-20 md:h-24">
        <div className="relative h-11 w-11 overflow-hidden rounded-full sm:h-14 sm:w-14 md:h-16 md:w-16">
          <Image
            src="/Image/LOGO 1.png"
            alt="Logo Komunitas Akar Tuli Malang"
            fill
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-10 sm:px-6 sm:py-12">
        {/* Background Image Pengurus */}
        <Image
          src="/Image/Pengurus.jpeg"
          alt="Pengurus Komunitas Akar Tuli Malang"
          fill
          priority
          className="pointer-events-none object-cover object-center"
        />

        {/* Dark Gradient Overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(45, 30, 20, 0.45) 0%, rgba(45, 30, 20, 0.45) 100%)",
          }}
        />

        {/* Center Content */}
        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center">
          {/* Main Logo */}
          <div className="relative h-48 w-48 shrink-0 sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <Image
              src="/Image/LOGO 1.png"
              alt="Komunitas Akar Tuli Malang"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="relative z-10 mt-6 sm:mt-8">
          <Link
            href="/profil"
            className="inline-flex items-center gap-2 rounded-full bg-[#6B462E] px-7 py-3 text-sm font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-[#583823] active:scale-95 sm:gap-2.5 sm:px-9 sm:py-3.5 sm:text-base md:px-10 md:text-lg"
          >
            <span>Kenali Profil</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5] sm:h-5 sm:w-5" />
          </Link>
        </div>
      </main>
    </div>
  )
}
