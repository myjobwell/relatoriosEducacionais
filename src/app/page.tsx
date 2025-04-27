
import Header from "@/components/header"
import IndicatorPanel from "@/components/indicator-panel"
import Footer from "@/components/footer"

export default function Home() {
  const indicatorSections = [
    {
      id: "contexto",
      title: "INDICADORES DE CONTEXTO",
      iconName: "location",
      color: "#006E90",
      items: ["Relatório de Contexto"],
    },
    {
      id: "gestao",
      title: "INDICADORES DE GESTÃO",
      iconName: "management",
      color: "#C49102",
      items: ["Relatório de Gestão"],
    },
    {
      id: "resultados",
      title: "INDICADORES DE RESULTADOS",
      iconName: "chart",
      color: "#008751",
      items: ["Relatório de Resultados"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-sky-100">
      {/* Header com padding top */}
      <div className="pt-6">
        <Header />
      </div>

      {/* Conteúdo principal */}
      <main className="flex-grow container mx-auto px-4 py-10">
        <h1 className="text-center text-4xl md:text-5xl font-bold text-slate-700 mb-10">
          RELATÓRIOS EDUCACIONAIS
        </h1>

        <div className="h-1 bg-sky-200 mb-12 rounded-full"></div>

        {/* Painéis em linha com rolagem horizontal em telas pequenas */}
        <div className="flex flex-col md:flex gap-8 overflow-x-auto pb-4">
          {indicatorSections.map((section) => (
            <div key={section.id} className="flex-shrink-0 w-full md:w-auto">
              <IndicatorPanel
                title={section.title}
                iconName={section.iconName}
                color={section.color}
                items={section.items}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer com padding bottom */}
      <footer className="pb-6">
        <Footer />
      </footer>
    </div>
  )
}

