import Link from "next/link";

export default function Home() {
  return (
    <section className="py-20">
      <p className="text-sm text-neutral-500">Bonjour, je suis</p>
      <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Paul K Bidi</h1>
      <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
        Développeur en reconversion vers la data : je conçois des applications
        web et des pipelines de données fiables.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/projects" className="rounded-lg bg-neutral-900 px-5 py-2.5 text-white dark:bg-white dark:text-neutral-900">
          Voir mes projets
        </Link>
        <Link href="/contact" className="rounded-lg border px-5 py-2.5">Me contacter</Link>
      </div>
    </section>
  );
}