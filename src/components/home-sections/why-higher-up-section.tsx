export const WhyHigherUpSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
            POR QUE A HIGHER-UP?
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          <div className="flex gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-white">1</span>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-primary">Mentoria</h3>
              <p className="text-gray-700">
                Não somos uma escola de inglês. Não há aulas, nem provas, nem
                livro didático.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-white">2</span>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-primary">
                Resultados
              </h3>
              <p className="text-gray-700">
                Os programas entregam resultados rápidos e focados na sua
                necessidade de comunicação atual.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-white">3</span>
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold text-primary">
                Competência intercultural
              </h3>
              <p className="text-gray-700">
                Além do idioma, trabalhamos questões culturais que podem
                comprometer sua comunicação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
