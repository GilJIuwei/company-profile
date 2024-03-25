import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-rows">
      <div
        className="opacity-80 w-screen h-screen relative"
        style={{ backgroundImage: "url(/main-bg.webp" }}
      >
        <div className="absolute top-11 justify-items-center right-80 z-[100]">
          <div>
            <Image src="/logo-ikon.webp" alt="logo" width={400} height={400} />
          </div>
          <div className="text-3xl font-bold pt-5 text-slate-200">
            <p className="pb-1">Ebenhaezer is a business that,</p>
            <p className="pb-1">Operates in the production of</p>
            <p className="pb-1">Clothes with a spiritual concept</p>
          </div>
        </div>
      </div>
      <div className="font-bold pt-20 bg-orange-200 pb-10">
        <p className="text-center text-4xl">Overview of the Busines</p>
        <div className="container px-24 mx-auto text-justify pt-20 text-3xl">
          <p className="mb-4">
            Ebenhaezer was created specifically for young people who are rarely
            or far from worship
          </p>
          <p className="mb-4">
            communities, this inspiration emerged to make products such as
            shirts, trousers and other,
          </p>
          <p>accessories. However, currently we are focusing on clothes</p>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-40 py-11">
        <p className="text-4xl text-center font-bold">Our Products :</p>
        <div className="flex gap-10">
          <Image src="/baju-04.webp" alt="product" width={500} height={400} />
          <Image
            src="/slide-01.webp"
            alt="product"
            width={400}
            height={400}
            className="pb-32 pt-32"
          />
          <Image src="/baju-02.webp" alt="product" width={500} height={400} />
        </div>
      </div>
      <div className="bg-orange-200">
        <p className="font-bold text-center text-4xl pb-10 pt-16">
          Testimonial
        </p>
        <div className="container mx-auto px-4 text-2xl font-bold grid grid-cols-2">
          <Image
            src="/fizi.webp"
            alt="logo"
            width={200}
            height={100}
            className=""
          />
          <p className="pt-24">Terbaik kainnya 🌠🌠🌠🌠🌠</p>
        </div>
        <div className="container mx-auto px-4 text-2xl font-bold grid grid-cols-2">
          <Image
            src="/upin.webp"
            alt="logo"
            width={200}
            height={100}
            className="pb-4"
          />
          <p className="pt-24">Gak bikin keringat🌠🌠🌠🌠🌠</p>
        </div>
      </div>
      <div>
        <p className="bg-slate-600 text-center text-4xl font-bold text-white pt-4">
          Footer
        </p>
        <div className="grid grid-cols-2 pb-7">
          <div className="text-center text-4xl font-bold pt-4 pb-10 bg-slate-600 pl-40 ">
            <Link href="https://www.instagram.com/hilfestein/">
              <Image
                src="/instagram.webp"
                alt=""
                width={50}
                height={50}
                className=""
              />
            </Link>
          </div>
          <div className="text-center text-4xl font-bold pt-4 pb-10 bg-slate-600 pl-40 ">
            <Link href="https://discord.gg/HVx4MNkj">
              <Image
                src="/discord.webp"
                alt=""
                width={50}
                height={50}
                className=""
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
