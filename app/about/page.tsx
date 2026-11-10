export default function Home() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold">À propos</h1>
      <p className="mt-4 text-lg">
        Développeur Python de 26 ans avec 2 ans d'expérience en alternance, je me réoriente vers la Data
        Science et le Data Engineering. Maîtrise de Python (Django), des bases de données SQL, du déploiement
        Docker et des méthodes Agile. Curieux et rigoureux, je souhaite mettre mes compétences en
        développement au service de la collecte, du traitement et de l'analyse de données au sein d'une équipe
        data.
      </p>
      <h1 className="text-4xl font-bold mt-8">Compétences</h1>
      <table className="table shadow-2xl shadow-neutral-900 mt-8">
        <thead>
          <tr className="text-cyan-700">
            <th>Langages & Frameworks</th>
            <th>Bases de données</th>
            <th>Infrastructure & DevOps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Python (Django)</td>
            <td>SQL, NoSQL et gestion de bases de données</td>
            <td>Docker, Linux / Debian</td>
          </tr>
          <tr>
            <td>Python data : pandas, numpy, scikit-learn</td>
            <td>Bases de données relationnelles</td>
            <td>Serveurs Web (Nginx, Apache)</td>
          </tr>
          <tr>
            <td>PHP (Symfony)</td>
            <td>Visualisation de données</td>
            <td>DHCP, DNS</td>
          </tr>
          <tr>
            <td>JavaScript (React, VueJs, NextJs)</td>
            <td></td>
            <td>Notions Machine Learning</td>
          </tr>
          <tr>
            <td>Dart (Flutter)</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}