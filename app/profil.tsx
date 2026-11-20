"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import GridMotion from "@/components/GridMotion"
import Lanyard from "@/components/Lanyard"

const FOTO_ITEMS = [
  "/Image/ID CARD FOTO/BPH Ketua_Jesslyn.JPG",
  "/Image/ID CARD FOTO/BPH Wakil Ketua_Pipin.JPG",
  "/Image/ID CARD FOTO/BPH Bendahara_Zeva.JPG",
  "/Image/ID CARD FOTO/BPH Sekretaris_Birru.JPG",
  "/Image/ID CARD FOTO/Humas_Ian.jpg",
  "/Image/ID CARD FOTO/Humas_Athaya.JPEG",
  "/Image/ID CARD FOTO/PSDM_Abiem.JPG",
  "/Image/ID CARD FOTO/Surya psdm.jpg",
  "/Image/ID CARD FOTO/Psdm arum.jpg",
  "/Image/ID CARD FOTO/PSDM_Yuwan.jpg",
  "/Image/ID CARD FOTO/PSDM_Mara.JPG",
  "/Image/ID CARD FOTO/Fakhri psdm.jpg",
  "/Image/ID CARD FOTO/Medinfo_Athallah Rafid Palamarta_.jpg",
  "/Image/ID CARD FOTO/Sheyla Medinfo.jpg",
  "/Image/ID CARD FOTO/Medinfo_Revie.JPG",
  "/Image/ID CARD FOTO/Medinfo_Putri.JPG",
  "/Image/ID CARD FOTO/Medinfo_Rainval.JPG",
  "/Image/ID CARD FOTO/Medinfo_Amor.JPG",
]

interface Member {
  name: string
  role: string
  division: string
  period: string
  image: string
  detailImage?: string
  fullTitle?: string
  description?: string
  skills?: string[]
}

const KETUA_WAKIL: Member[] = [
  {
    name: "Jesslyn",
    role: "Ketua",
    division: "Ketua & Wakil Ketua",
    period: "2026/2027",
    image: "/Image/ID CARD/1 9.png",
    detailImage: "/Image/DETAIL KETUA.png",
    fullTitle: "Ketua Umum Komunitas Akar Tuli Malang",
    description:
      "Bertanggung jawab memimpin arah gerak Komunitas Akar Tuli Malang dan Bahasa Isyarat Malang (BISYAMA), mengoordinasikan seluruh divisi, serta menjalin kolaborasi inklusif.",
    skills: ["Leadership", "BISINDO", "Public Relations"],
  },
  {
    name: "Pipin",
    role: "Wakil Ketua",
    division: "Ketua & Wakil Ketua",
    period: "2026/2027",
    image: "/Image/ID CARD/2 1.png",
  },
]

const BENDAHARA_SEKRETARIS: Member[] = [
  {
    name: "Zeva",
    role: "Bendahara",
    division: "Bendahara & Sekretaris",
    period: "2026/2027",
    image: "/Image/ID CARD/3 1.png",
  },
  {
    name: "Birru",
    role: "Sekretaris",
    division: "Bendahara & Sekretaris",
    period: "2026/2027",
    image: "/Image/ID CARD/4 1.png",
  },
]

const HUMAS: Member[] = [
  {
    name: "Ian",
    role: "Humas",
    division: "Hubungan Masyarakat",
    period: "2026/2027",
    image: "/Image/ID CARD/5 1.png",
  },
  {
    name: "Athaya",
    role: "Humas",
    division: "Hubungan Masyarakat",
    period: "2026/2027",
    image: "/Image/ID CARD/6 1.png",
  },
]

const PSDM = {
  lead: {
    name: "Abiem",
    role: "PSDM",
    division: "Pengembangan Sumber Daya Manusia",
    period: "2026/2027",
    image: "/Image/ID CARD/10 1.png",
  },
  row1: [
    {
      name: "Surya",
      role: "PSDM",
      division: "Pengembangan Sumber Daya Manusia",
      period: "2026/2027",
      image: "/Image/ID CARD/9 1.png",
    },
    {
      name: "Arum",
      role: "PSDM",
      division: "Pengembangan Sumber Daya Manusia",
      period: "2026/2027",
      image: "/Image/ID CARD/8 1.png",
    },
  ],
  row2: [
    {
      name: "Yuman",
      role: "PSDM",
      division: "Pengembangan Sumber Daya Manusia",
      period: "2026/2027",
      image: "/Image/ID CARD/13 1.png",
    },
    {
      name: "Mara",
      role: "PSDM",
      division: "Pengembangan Sumber Daya Manusia",
      period: "2026/2027",
      image: "/Image/ID CARD/12 1.png",
    },
  ],
  bottom: {
    name: "Fakhri",
    role: "PSDM",
    division: "Pengembangan Sumber Daya Manusia",
    period: "2026/2027",
    image: "/Image/ID CARD/7 1.png",
  },
}

const MEDINFO = {
  lead: {
    name: "Rafid",
    role: "Medinfo",
    division: "Media & Informasi",
    period: "2026/2027",
    image: "/Image/ID CARD/11 1.png",
  },
  row1: [
    {
      name: "Sheyla",
      role: "Medinfo",
      division: "Media & Informasi",
      period: "2026/2027",
      image: "/Image/ID CARD/14 1.png",
    },
    {
      name: "Revie",
      role: "Medinfo",
      division: "Media & Informasi",
      period: "2026/2027",
      image: "/Image/ID CARD/18 1.png",
    },
  ],
  row2: [
    {
      name: "Putri",
      role: "Medinfo",
      division: "Media & Informasi",
      period: "2026/2027",
      image: "/Image/ID CARD/16 1.png",
    },
    {
      name: "Rainval",
      role: "Medinfo",
      division: "Media & Informasi",
      period: "2026/2027",
      image: "/Image/ID CARD/17 1.png",
    },
  ],
  bottom: {
    name: "Amor",
    role: "Medinfo",
    division: "Media & Informasi",
    period: "2026/2027",
    image: "/Image/ID CARD/15 1.png",
  },
}

function SectionDivider({ title }: { title: string }) {
  return (
    <div className="my-8 flex w-full items-center justify-center gap-2.5 sm:my-12 sm:gap-6 md:my-16 md:gap-12 lg:gap-16">
      <div className="h-[2px] min-w-4 flex-1 bg-[#6B462E]/70" />
      <div className="max-w-[78%] rounded-full bg-[#6B462E] px-4 py-2 text-center text-xs font-semibold tracking-wide text-white shadow-sm sm:max-w-none sm:shrink-0 sm:px-8 sm:py-2.5 sm:text-sm md:min-w-[360px] md:px-12 md:py-3 md:text-lg">
        {title}
      </div>
      <div className="h-[2px] min-w-4 flex-1 bg-[#6B462E]/70" />
    </div>
  )
}

function IdCardItem({
  member,
  onSelect,
}: {
  member: Member
  onSelect: (m: Member) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(member)}
      className="group relative w-[43vw] max-w-[175px] shrink-0 overflow-hidden rounded-xl bg-[#FBF9F6] shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none sm:w-56 sm:max-w-none sm:rounded-2xl md:w-64 lg:w-72"
    >
      <div className="relative aspect-[516/885] w-full">
        <Image
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          fill
          sizes="(max-width: 640px) 44vw, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
          className="scale-[1.02] object-cover object-bottom transition-transform duration-300 group-hover:scale-[1.05]"
        />
      </div>
    </button>
  )
}

export default function ProfilPage() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

  return (
    <div className="flex min-h-svh w-full flex-col overflow-x-hidden bg-[#E8E6EC] text-slate-900">
      {/* Top Diagonal Photo Collage Banner menggunakan GridMotion */}
      <div className="relative flex h-[70svh] min-h-[420px] w-full items-center justify-center overflow-hidden bg-[#2D1E14] sm:h-[85svh] md:h-svh">
        <div className="absolute inset-0">
          <GridMotion
            items={FOTO_ITEMS}
            rows={4}
            aspectRatio={1.33}
            gap={16}
            radius={14}
            angle={-12}
            tilt={0}
            speed={24}
            direction="alternate"
            parallax={0.5}
            spotlight={0.6}
            dim={0.35}
            fade={0.5}
            grayscale={false}
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[5]"
          style={{
            background:
              "linear-gradient(180deg, rgba(45, 30, 20, 0.45) 0%, rgba(45, 30, 20, 0.55) 100%)",
          }}
        />

        {/* Banner Center Content: Logo & STRUKTUR PENGURUS */}
        <div className="pointer-events-none relative z-10 flex flex-col items-center gap-4 px-4 sm:flex-row sm:gap-7 sm:px-6 md:gap-10">
          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full shadow-xl sm:h-40 sm:w-40 md:h-56 md:w-56 lg:h-68 lg:w-68">
            <Image
              src="/Image/LOGO 1.png"
              alt="Logo Komunitas Akar Tuli Malang"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h1 className="text-2xl font-semibold leading-[1.08] tracking-wide text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl lg:text-[4rem]">
              STRUKTUR
              <br />
              PENGURUS
            </h1>

            <span className="mt-2 inline-block rounded-full bg-[#38527D] px-4 py-1 text-xs font-bold tracking-wide text-white shadow-md sm:mt-3 sm:px-6 sm:py-1.5 sm:text-base md:text-xl lg:text-2xl">
              Periode 2026/2027
            </span>

            <span className="mt-1.5 inline-block rounded-full bg-[#7B5233] px-4 py-1 text-xs font-semibold tracking-wide text-white shadow-md sm:mt-2.5 sm:px-6 sm:py-1.5 sm:text-base md:text-xl lg:text-2xl">
              Komunitas Akar Tuli Malang
            </span>
          </div>
        </div>
      </div>

      {/* Main Organigram Content */}
      <main className="mx-auto flex w-full flex-1 flex-col items-center py-4 sm:py-6 md:py-10">
        {/* 1. Ketua & Wakil Ketua */}
        <SectionDivider title="Ketua & Wakil Ketua" />
        <div className="flex w-full max-w-5xl items-center justify-center gap-4 px-3 sm:gap-12 sm:px-6 md:gap-24 lg:gap-36">
          {KETUA_WAKIL.map((m) => (
            <IdCardItem key={m.name} member={m} onSelect={setSelectedMember} />
          ))}
        </div>

        {/* 2. Bendahara & Sekretaris */}
        <SectionDivider title="Bendahara & Sekretaris" />
        <div className="flex w-full max-w-5xl items-center justify-center gap-4 px-3 sm:gap-12 sm:px-6 md:gap-24 lg:gap-36">
          {BENDAHARA_SEKRETARIS.map((m) => (
            <IdCardItem key={m.name} member={m} onSelect={setSelectedMember} />
          ))}
        </div>

        {/* 3. Hubungan Masyarakat */}
        <SectionDivider title="Hubungan Masyarakat" />
        <div className="flex w-full max-w-5xl items-center justify-center gap-4 px-3 sm:gap-12 sm:px-6 md:gap-24 lg:gap-36">
          {HUMAS.map((m) => (
            <IdCardItem key={m.name} member={m} onSelect={setSelectedMember} />
          ))}
        </div>

        {/* 4. Pengembangan Sumber Daya Manusia */}
        <SectionDivider title="Pengembangan Sumber Daya Manusia" />
        <div className="flex w-full max-w-5xl flex-col items-center gap-6 px-3 sm:gap-10 sm:px-6 md:gap-14">
          {/* Top Single Card: Abiem */}
          <div className="flex justify-center">
            <IdCardItem member={PSDM.lead} onSelect={setSelectedMember} />
          </div>

          {/* Pair 1: Surya & Arum */}
          <div className="flex w-full items-center justify-center gap-4 sm:gap-12 md:gap-24 lg:gap-36">
            {PSDM.row1.map((m) => (
              <IdCardItem
                key={m.name}
                member={m}
                onSelect={setSelectedMember}
              />
            ))}
          </div>

          {/* Pair 2: Yuman & Mara */}
          <div className="flex w-full items-center justify-center gap-4 sm:gap-12 md:gap-24 lg:gap-36">
            {PSDM.row2.map((m) => (
              <IdCardItem
                key={m.name}
                member={m}
                onSelect={setSelectedMember}
              />
            ))}
          </div>

          {/* Bottom Single Card: Fakhri */}
          <div className="flex justify-center">
            <IdCardItem member={PSDM.bottom} onSelect={setSelectedMember} />
          </div>
        </div>

        {/* 5. Media & Informasi */}
        <SectionDivider title="Media & Informasi" />
        <div className="flex w-full max-w-5xl flex-col items-center gap-6 px-3 sm:gap-10 sm:px-6 md:gap-14">
          {/* Top Single Card: Rafid */}
          <div className="flex justify-center">
            <IdCardItem member={MEDINFO.lead} onSelect={setSelectedMember} />
          </div>

          {/* Pair 1: Sheyla & Revie */}
          <div className="flex w-full items-center justify-center gap-4 sm:gap-12 md:gap-24 lg:gap-36">
            {MEDINFO.row1.map((m) => (
              <IdCardItem
                key={m.name}
                member={m}
                onSelect={setSelectedMember}
              />
            ))}
          </div>

          {/* Pair 2: Putri & Rainval */}
          <div className="flex w-full items-center justify-center gap-4 sm:gap-12 md:gap-24 lg:gap-36">
            {MEDINFO.row2.map((m) => (
              <IdCardItem
                key={m.name}
                member={m}
                onSelect={setSelectedMember}
              />
            ))}
          </div>

          {/* Bottom Single Card: Amor */}
          <div className="flex justify-center">
            <IdCardItem member={MEDINFO.bottom} onSelect={setSelectedMember} />
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-12 mb-5 text-center sm:mt-16 sm:mb-6">
          <p className="text-xl font-extrabold tracking-tight text-[#3D2516] sm:text-2xl md:text-3xl">
            Thank you
          </p>
        </div>
      </main>

      {/* Bottom Footer Strip */}
      <footer className="h-12 w-full bg-[#C7B7A7] sm:h-14" />

      {/* Modal Preview Detail Pengurus dengan 3D Lanyard */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 backdrop-blur-xs sm:p-5"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative flex max-h-[92svh] w-full max-w-4xl flex-col overflow-y-auto rounded-2xl bg-[#D5C8BD] shadow-2xl sm:rounded-[28px] md:min-h-[480px] md:flex-row md:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button X (Selalu di pojok kanan atas modal baik di Mobile maupun Desktop) */}
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-[#D5CFC8] text-lg font-bold text-[#6B462E] shadow-sm transition-transform hover:scale-105 hover:bg-[#c8c0b7] sm:top-4 sm:right-4 sm:h-10 sm:w-10"
              aria-label="Tutup"
            >
              <X className="h-5 w-5 stroke-[2.5]" />
            </button>

            {/* Left Column: Informasi Detail Pengurus */}
            <div className="flex flex-1 flex-col justify-center p-5 pr-12 sm:p-8 md:p-12">
              <div>
                <span className="inline-block rounded-full bg-[#6B462E] px-6 py-1 text-xs font-bold text-white shadow-xs sm:px-8 sm:py-1.5 sm:text-base">
                  {selectedMember.role}
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-[#3E2718] sm:mt-4 sm:text-4xl md:text-[2.75rem]">
                {selectedMember.name}
              </h3>

              <p className="mt-1.5 text-sm font-bold text-[#3D465A] sm:mt-2 sm:text-lg">
                {selectedMember.fullTitle ??
                  `${selectedMember.role} ${selectedMember.division} Komunitas Akar Tuli Malang`}
              </p>

              <p className="mt-3 text-xs leading-relaxed font-semibold text-[#6B462E] sm:mt-4 sm:text-base">
                {selectedMember.description ??
                  `Bertanggung jawab dalam menjalankan program kerja divisi ${selectedMember.division} di Komunitas Akar Tuli Malang periode ${selectedMember.period} secara kolaboratif dan inklusif.`}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
                {(
                  selectedMember.skills ?? [
                    selectedMember.role,
                    "BISINDO",
                    "Teamwork",
                  ]
                ).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#F7F3EE] px-4 py-1.5 text-[11px] font-extrabold text-[#3E2718] shadow-xs sm:px-6 sm:py-2 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive 3D Lanyard ID Card */}
            <div className="relative flex h-[320px] w-full shrink-0 items-center justify-center rounded-t-2xl bg-[#E8E6EE] sm:h-[380px] sm:rounded-t-[28px] md:h-auto md:w-[340px] md:rounded-t-none md:rounded-l-[28px] lg:w-[370px]">
              <div className="h-full w-full">
                <Lanyard
                  frontImage={selectedMember.image}
                  backImage="/Image/akar-tuli-malang-logo-removebg-preview 2.png"
                  strapImage="/Image/LANDYARD TALI ID CARD.png"
                  imageFit="cover"
                  cardColor="#FAF6F2"
                  orientation="portrait"
                  finish="glossy"
                  cornerRadius={0.3}
                  size={0.62}
                  anchor="center"
                  strapLength={0.48}
                  strapColor="#FAF6F2"
                  strapWidth={0.65}
                  metal="silver"
                  gravity={1}
                  damping={0.5}
                  elasticity={0.5}
                  breeze={0.5}
                  interactive
                  intro
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
