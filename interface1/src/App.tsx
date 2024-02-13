import { Calendar, Search, UserRound } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen text-zinc-900">
      <header className="top-0 flex flex-col bg-[var(--dark-bg)] md:h-36">
        <h1 className="mt-6 text-center text-4xl font-bold">LOGO</h1>
        <nav className="mt-4 flex flex-col gap-2 pb-6 text-center text-zinc-900 md:mt-6 md:flex-row md:justify-center md:gap-16 [&>*]:text-zinc-900 [&>*]:hover:text-zinc-900">
          <a href="/">Accueil</a>
          <a href="/">Blogue</a>
          <a href="/">À propos</a>
          <a href="/">Nous joindre</a>
        </nav>
      </header>

      <main>
        <div className="flex flex-col md:flex-row-reverse md:gap-8 md:px-8">
          <section className="flex flex-col md:w-1/3 md:gap-8 ">
            <div className="flex w-full items-center justify-center bg-[var(--light-bg)] p-8 md:mt-8">
              <input
                className="h-10 w-full bg-white pl-2 outline-none placeholder:text-zinc-200"
                type="text"
                placeholder="Recherche"
              />
              <div className="flex h-10 w-10 items-center bg-white">
                <Search className="w-5" />
              </div>
            </div>
            <div className="hidden bg-[var(--light-bg)] p-4 font-medium md:flex md:flex-col">
              <h3 className="p-4">Catégories:</h3>
              <ul className="flex list-disc flex-col gap-2 pb-4 pl-8 marker:text-sm">
                <li>Lien vers catégorie A</li>
                <li>Lien vers catégorie B</li>
                <li>Lien vers catégorie C</li>
                <li>Lien vers catégorie D</li>
                <li>Lien vers catégorie E</li>
                <li>Lien vers catégorie F</li>
              </ul>
            </div>
          </section>
          <section className="mt-8 flex flex-col md:w-2/3">
            <article className="mb-8 h-96 flex-1 bg-[var(--light-bg)] px-8 py-6 text-sm font-medium md:pb-4">
              <h2 className="text-center text-2xl font-bold md:text-left">
                Titre de l'article
              </h2>
              <div>
                <p className="mt-4 h-56 overflow-hidden overflow-ellipsis whitespace-break-spaces text-justify leading-4 md:h-full ">
                  Donec sit amet tempus sem, et accumsan lorem. Nam ac nisl leo.
                  Maecenas gravida porttitor lacus et blandit. Vivamus magna
                  augue, tempor sit amet leo a, pellentesque aliquam massa.
                  Maecenas gravida porttitor lacus et blandit. Vivamus magna
                  augue, tempor sit amet leo a, pellentesque aliquam massa.
                  <br />
                  <br />
                  Maecenas gravida porttitor lacus et blandit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Phasellus diam lectus,
                  vulputate ut ultrices quis, semper quis urna. Sed aliquam quis
                  nunc nec ornare. Maecenas gravida porttitor lacus et blandit.
                  Vivamus magna augue, tempor sit amet leo a, pellentesque
                  aliquam massa.{" "}
                </p>
              </div>
              <div className="flex flex-col justify-between md:flex-row ">
                <div className="mt-4 flex justify-between md:mb-[-16px]">
                  <div className="flex items-center justify-between gap-2 md:mr-12">
                    <Calendar className="h-6 w-6" />
                    <span>12/12/2021</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <UserRound className="h-6 w-6" />
                    <span>Nom de l'auteur</span>
                  </div>
                </div>
                <span className="mb-[-24px] mr-[-32px] text-right md:mb-[-16px]">
                  <button className="mt-8 rounded-none bg-[var(--dark-bg)] px-6 py-3">
                    Lire la suite
                  </button>
                </span>
              </div>
            </article>
            <article className="mb-8 h-96 flex-1 bg-[var(--light-bg)] px-8 py-6 text-sm font-medium md:pb-4">
              <h2 className="text-center text-2xl font-bold md:text-left">
                Titre de l'article
              </h2>
              <div>
                <p className="mt-4 h-56 overflow-hidden overflow-ellipsis whitespace-break-spaces text-justify leading-4 md:h-full ">
                  Donec sit amet tempus sem, et accumsan lorem. Nam ac nisl leo.
                  Maecenas gravida porttitor lacus et blandit. Vivamus magna
                  augue, tempor sit amet leo a, pellentesque aliquam massa.
                  Maecenas gravida porttitor lacus et blandit. Vivamus magna
                  augue, tempor sit amet leo a, pellentesque aliquam massa.
                  <br />
                  <br />
                  Maecenas gravida porttitor lacus et blandit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Phasellus diam lectus,
                  vulputate ut ultrices quis, semper quis urna. Sed aliquam quis
                  nunc nec ornare. Maecenas gravida porttitor lacus et blandit.
                  Vivamus magna augue, tempor sit amet leo a, pellentesque
                  aliquam massa.{" "}
                </p>
              </div>
              <div className="flex flex-col justify-between md:flex-row ">
                <div className="mt-4 flex justify-between md:mb-[-16px]">
                  <div className="flex items-center justify-between gap-2 md:mr-12">
                    <Calendar className="h-6 w-6" />
                    <span>12/12/2021</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <UserRound className="h-6 w-6" />
                    <span>Nom de l'auteur</span>
                  </div>
                </div>
                <span className="mb-[-24px] mr-[-32px] text-right md:mb-[-16px]">
                  <button className="mt-8 rounded-none bg-[var(--dark-bg)] px-6 py-3">
                    Lire la suite
                  </button>
                </span>
              </div>
            </article>
          </section>
        </div>
      </main>
      <footer className="absolute bottom-0 flex h-28 w-full flex-col items-center justify-between bg-[var(--dark-bg)] px-8 text-sm font-medium md:h-20 md:flex-row">
        <span className="mt-6 text-center md:mt-0">
          © Nom du blogue - Tout droits réservés.
        </span>
        <span className="mt-6 pb-6 text-center">Crédit agence web</span>
      </footer>
    </div>
  );
}

export default App;
