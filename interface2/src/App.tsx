function App() {
  return (
    <div className="h-screen text-zinc-900">
      <header className="top-0 flex flex-col font-medium md:mb-28">
        <div className="h-[300px] w-full bg-[var(--dark-bg)]">
          <h1 className="mt-12 text-center text-4xl ">Lorem ipsum</h1>
          <p className="text-md mx-auto mt-4 w-2/3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>
        <div className="mt-[-75px] flex flex-col gap-8 px-4 md:flex-row md:gap-16 md:px-16">
          <div className="flex w-full flex-col md:w-1/3">
            <div className="rounded-lg border-2 border-zinc-400 bg-[var(--dark-bg)] py-8 shadow-xl ">
              <h2 className="mt-4 text-center text-2xl ">Lorem ipsum</h2>
              <p className="mx-auto mt-4 px-2 pb-4 text-center text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col md:w-1/3">
            <div className="rounded-lg border-2 border-zinc-400 bg-[var(--dark-bg)] py-8 shadow-xl ">
              <h2 className="mt-4 text-center text-2xl ">Lorem ipsum</h2>
              <p className="mx-auto mt-4 px-2 pb-4 text-center text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col md:w-1/3">
            <div className="rounded-lg border-2 border-zinc-400 bg-[var(--dark-bg)] py-8 shadow-xl ">
              <h2 className="mt-4 text-center text-2xl ">Lorem ipsum</h2>
              <p className="mx-auto mt-4 px-2 pb-4 text-center text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="px-4 md:px-16 w-full flex flex-col md:flex-row md:justify-center md:gap-16">
          <section className="mt-16 flex flex-col md:mt-[-40px]">
            <article className="mb-12 flex flex-col gap-8 md:flex-row">
              <div className="h-48 w-full bg-[var(--light-bg)]"></div>
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-3xl font-medium">Lorem ipsum</h2>
                <p className="text-lg leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </article>
            <article className="mb-12 flex flex-col gap-8 md:flex-row-reverse">
              <div className="h-48 w-full bg-[var(--light-bg)]"></div>
              <div className="flex flex-col justify-center">
                <h2 className="mb-4 text-3xl font-medium">Lorem ipsum</h2>
                <p className="text-lg leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
