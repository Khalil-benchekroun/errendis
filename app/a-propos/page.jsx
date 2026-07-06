import Link from 'next/link';

export const metadata = {
  title: 'À propos',
  description:
    'Errendis est un éditeur marocain de logiciels métiers fondé par Khalil Benchekroun. Notre conviction : chaque secteur mérite un logiciel conçu pour lui.',
  alternates: { canonical: '/a-propos' },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Chaque métier mérite un logiciel conçu pour lui.</h1>
          <p>
            Errendis est né d&apos;un constat simple : les entreprises marocaines
            font tourner des activités exigeantes avec des outils qui ne
            connaissent rien à leur métier.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <p>
            Un laboratoire d&apos;analyses médicales, une agence de location de
            voitures et un transitaire n&apos;ont presque rien en commun — sauf
            une chose : tous les trois jonglent aujourd&apos;hui entre des
            registres papier, des fichiers Excel fragiles et des conversations
            WhatsApp pour piloter leur activité. Les logiciels génériques leur
            demandent de s&apos;adapter à l&apos;outil. <strong>Nous faisons
            l&apos;inverse.</strong>
          </p>
          <p>
            Chaque logiciel Errendis est conçu pour un seul secteur, avec son
            vocabulaire, ses documents officiels, ses organismes de prise en
            charge et ses habitudes réelles de travail. C&apos;est ce qui rend
            nos outils immédiatement familiers pour vos équipes — et
            immédiatement utiles.
          </p>
          <p>
            Errendis est fondé par <strong>Khalil Benchekroun</strong> :
            douze ans d&apos;expérience en marketing digital, enseignant
            universitaire en analyse de données et gestion, et créateur de
            plateformes logicielles pour des entreprises au Maroc et en
            Europe. Cette double culture — le terrain des entreprises et la
            rigueur de l&apos;ingénierie — est dans l&apos;ADN de chaque produit.
          </p>
          <p>
            Nous construisons nos logiciels aux standards internationaux :
            hébergement cloud sécurisé, sauvegardes automatiques, accès
            multi-appareils — avec un support basé au Maroc, qui répond en
            français, en darija et en anglais.
          </p>
          <p>
            <Link href="/contact" className="btn btn--primary">
              Discuter de votre projet
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
