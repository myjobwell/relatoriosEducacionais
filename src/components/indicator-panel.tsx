import { FiSettings } from "react-icons/fi"

interface IndicatorPanelProps {
  title: string
  iconName: string
  color: string
  items: string[]
}

export default function IndicatorPanel({ title, iconName, color }: IndicatorPanelProps) {
  const [category, subcategory] = title.split(" DE ")

  const iconSrc = {
    location: "/location.png",
    management: "/gestao.png",
    chart: "/chart.png",
  }[iconName]

  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full overflow-hidden">
      {/* Ícone e Título */}
      <div className="flex items-center gap-4 flex-shrink-0 w-full md:w-auto">
        {iconSrc && (
          <img src={iconSrc} alt={`${iconName} icon`} className="h-14 w-14 object-contain" />
        )}
        <div>
          <p className="text-gray-500 text-xs uppercase leading-none">Indicadores de</p>
          <h2 className="text-lg md:text-xl font-bold" style={{ color }}>
            {subcategory}
          </h2>
        </div>
      </div>

      {/* Campos e Botão */}
      <div className="flex flex-wrap gap-3 justify-center md:justify-end w-full">
        {/* Município */}
        <select
          className="w-[180px] py-2 px-3 rounded-md text-slate-700 text-sm bg-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
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
        <select
          className="w-[140px] py-2 px-3 rounded-md text-slate-700 text-sm bg-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <option value="">Ano</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>

        {/* Botão */}
        <button
          className="flex items-center gap-2 py-2 px-4 rounded-md shadow text-sm font-medium text-white transition hover:brightness-110"
          style={{ backgroundColor: color }}
        >
          <FiSettings className="text-base" />
          Gerar Relatório
        </button>
      </div>
    </div>
  )
}
