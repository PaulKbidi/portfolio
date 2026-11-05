export default function Home() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold">À propos</h1>
      <p className="mt-4 text-lg">
        Je suis un développeur web passionné par la création d'expériences numériques innovantes et fonctionnelles. 
        Avec une solide expérience en développement front-end et back-end, je m'efforce de transformer les idées en solutions concrètes.
        Je suis constamment à la recherche de nouvelles technologies et de défis stimulants pour améliorer mes compétences et contribuer à des projets significatifs.
      </p>
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
            <td>Python orientée data : pandas, numpy, scikit-learn</td>
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