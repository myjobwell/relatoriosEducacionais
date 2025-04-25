import { FiSettings } from "react-icons/fi"

interface IndicatorPanelProps {
  title: string
  iconName: string
  color: string
  items: string[]
}

export default function IndicatorPanel({ title, iconName, color }: IndicatorPanelProps) {
  const [category, subcategory] = title.split(" DE ")
  const normalized = subcategory?.toUpperCase()
  const hasExtraFields = normalized === "RESULTADOS" || normalized === "GESTÃO"

  const iconSrc = {
    location: "/location.png",
    management: "/gestao.png",
    chart: "/chart.png",
  }[iconName]

  return (
    <div className="bg-white rounded-xl shadow-md px-4 py-6 w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto gap-6">
        
        {/* Ícone e Título */}
        <div className="flex items-center gap-4 flex-shrink-0 w-full lg:w-auto justify-center lg:justify-start">
          {iconSrc && (
            <img src={iconSrc} alt={`${iconName} icon`} className="h-14 w-14 object-contain" />
          )}
          <div className="text-center lg:text-left">
            <p className="text-gray-500 text-xs uppercase leading-none">Indicadores de</p>
            <h2 className="text-lg lg:text-xl font-bold" style={{ color }}>
              {subcategory}
            </h2>
          </div>
        </div>

        {/* Campos e Botão */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full items-center justify-center lg:justify-end">
          {/* Município */}
          <select className="w-full sm:w-auto min-w-[160px] py-2 px-3 rounded-md text-slate-700 text-sm bg-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400">
            <option value="">Município</option>
            <option value="1200013">Acrelândia</option>
            <option value="1200054">Assis Brasil</option>
            <option value="1200104">Brasiléia</option>
            <option value="1200138">Bujari</option>
            <option value="1200179">Capixaba</option>
            <option value="1200203">Cruzeiro do Sul</option>
            <option value="1200252">Epitaciolândia</option>
            <option value="1200302">Feijó</option>
            <option value="1200328">Jordão</option>
            <option value="1200336">Mâncio Lima</option>
            <option value="1200344">Manoel Urbano</option>
            <option value="1200351">Marechal Thaumaturgo</option>
            <option value="1200385">Plácido de Castro</option>
            <option value="1200807">Porto Acre</option>
            <option value="1200393">Porto Walter</option>
            <option value="1200401">Rio Branco</option>
            <option value="1200427">Rodrigues Alves</option>
            <option value="1200435">Santa Rosa do Purus</option>
            <option value="1200500">Sena Madureira</option>
            <option value="1200450">Senador Guiomard</option>
            <option value="1200609">Tarauacá</option>
            <option value="1200708">Xapuri</option>
          </select>

          {/* Ano */}
          <select className="w-full sm:w-auto min-w-[120px] py-2 px-3 rounded-md text-slate-700 text-sm bg-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400">
            <option value="">Ano</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>

          {/* Extra Select 1 */}
          {hasExtraFields && (
            <select className="w-full sm:w-auto min-w-[160px] py-2 px-3 rounded-md text-slate-700 text-sm bg-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400">
              <option value="">Dependência</option>
              <option value="Municipal">Municipal</option>
              <option value="Estadual">Estadual</option>
            </select>
          )}

          {/* Extra Select 2 */}
          {hasExtraFields && (
            <select className="w-full sm:w-auto min-w-[160px] py-2 px-3 rounded-md text-slate-700 text-sm bg-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400">
              <option value="">Localização</option>
              <option value="Urbana">Urbano</option>
              <option value="Rural">Rural</option>
            </select>
          )}

          {/* Botão */}
          <button
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-2 px-4 rounded-md shadow text-sm font-medium text-white transition hover:brightness-110 whitespace-nowrap"
            style={{ backgroundColor: color }}
          >
            <FiSettings className="text-base" />
            Gerar
          </button>
        </div>
      </div>
    </div>
  )
}
