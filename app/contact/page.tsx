export default function Home() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold">Contact</h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Vous pouvez me contacter par email à l'adresse{" "}
            <a href="mailto:kbidi.paul.pro@gmail.com" className="text-cyan-700 hover:underline">
                kbidi.paul.pro@gmail.com
            </a>
        </p>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            Ou par téléphone au {" "}
            <a href="tel:+262693310458" className="text-cyan-700 hover:underline">
                +262 693 31 04 58
            </a>
        </p>
    </section>
  );
}