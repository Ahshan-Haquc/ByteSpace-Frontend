import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Create an Account | ByteSpace",
};

export default function RegisterPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#0038E0] px-4 py-8 sm:px-8 lg:px-[8vw] lg:py-14"
      style={{
        // subtle grid background
        backgroundImage:
          "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
        {/* LEFT SIDE */}
        <section className="flex flex-col gap-6 text-white lg:min-h-[calc(100vh-7rem)] lg:justify-center" data-aos="fade-right">
          <div className="space-y-8 lg:space-y-10">
            {/* TOP BAR IMAGE (logo) -> replace src */}
            <Link href="/" aria-label="ByteSpace home" className="inline-block">
              <Image
                src="/brandIcon.png"
                alt="ByteSpace logo"
                width={56}
                height={56}
                priority
                className="h-10 w-auto sm:h-12"
              />
            </Link>

            <div className="max-w-xl space-y-3">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Sign up and come in
              </h2>
              <p className="text-base leading-relaxed text-white/90 sm:text-lg">
                The registration process is straightforward, uncomplicated, and
                efficient, allowing users to sign up quickly, easily, and at no
                cost
              </p>
            </div>
          </div>

          {/* BOTTOM IMAGE (course cards illustration) -> replace src.
              Hidden on small screens, shown from lg up */}
          <div className="relative hidden aspect-[4/3] w-full max-w-[640px] lg:block">
            <Image
              src="/loginImg.png"
              alt="Featured courses and happy students"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain object-left-bottom"
            />
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="rounded-[2rem] bg-white p-6 shadow-xl sm:p-10 lg:rounded-[2.5rem] lg:p-14" data-aos="fade-left">
          <RegisterForm />
        </section>
      </div>
    </main>
  );
}