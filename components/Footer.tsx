import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-ink text-center">
      <div className="flex justify-center mb-3">
        <Image
          src="/escargot-logo.png"
          alt="escargot"
          width={120}
          height={40}
          className="invert opacity-90"
        />
      </div>
      <p className="text-[0.8rem] text-cream/50">
        A project by Escargot — cards for people with something to say.
      </p>
    </footer>
  )
}
