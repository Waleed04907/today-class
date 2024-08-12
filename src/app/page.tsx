import Image from "next/image";

export default function Home() {
  return (
    <figure className="md:flex bg-red-200 rounded-xl p-8 md:p-100 dark\:bg-white-100">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/Waleed-pic.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-left md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font">
        “This is my first project in next js ,i am trying to make fine.In Shaa ALLAH one day i will be a good generative AI Engineer .”
      </p>
    </blockquote>
    <figcaption className="font-larg">
      <div className="text-blue-500 dark:text-sky-400">
        Waleed Saddique
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Generative AI Engineer
      </div>
    </figcaption>
  </div>
</figure>
  )
}