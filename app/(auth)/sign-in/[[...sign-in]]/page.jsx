import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Bagian Gambar Latar */}
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://raw.githubusercontent.com/fiqgant/kosfunds/main/public/back.png"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
        </section>

        {/* Bagian Formulir Masuk */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            {/* Logo dan Judul untuk Tampilan Mobile */}
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Beranda</span>
                {/* Ikon Logo */}
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="..." // Path dipersingkat
                    fill="currentColor"
                  />
                </svg>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Selamat Datang di Kosfunds 🦑
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Kelola pengeluaran kos kamu dengan mudah, efisien, dan transparan. 
                Kosfunds membantu kamu mengatur keuangan harian tanpa ribet!
              </p>
            </div>

            {/* Komponen Masuk dari Clerk */}
            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
