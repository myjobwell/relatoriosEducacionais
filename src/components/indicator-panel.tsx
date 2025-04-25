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
    <div className="bg-white rounded-xl shadow-lg px-8 py-10 flex flex-col items-center hover:shadow-2xl transition space-y-6">
      {/* Ícone */}
      {iconSrc && (
        <img src={iconSrc} alt={`${iconName} icon`} className="h-20" />
      )}

      {/* Título */}
      <div className="text-center">
        <p className="text-gray-500 text-sm uppercase">Indicadores de</p>
        <h2 className="text-2xl font-bold" style={{ color }}>
          {subcategory}
        </h2>
      </div>

      {/* Campos de seleção */}
      <div className="flex flex-col gap-4 w-full">
        {/* Dropdown Município */}
        <select
          className="w-full py-3 px-4 rounded-lg text-slate-700 font-medium bg-slate-100 shadow focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <option value="">Selecione o Município</option>
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

        {/* Dropdown Ano */}
        <select
          className="w-full py-3 px-4 rounded-lg text-slate-700 font-medium bg-slate-100 shadow focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <option value="">Selecione o Ano</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>

        {/* Botão */}
        <button
  className="w-full py-3 px-4 rounded-lg shadow text-sm font-semibold text-white transition duration-200 flex items-center justify-center gap-2 hover:brightness-110"
  style={{ backgroundColor: color }}
>
  <FiSettings className="text-xl" />
  Gerar Relatório
</button>

      </div>
    </div>
  )
}
