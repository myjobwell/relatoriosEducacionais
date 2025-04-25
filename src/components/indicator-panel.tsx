"use client"

import { useState } from "react"
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
  const isGestao = normalized === "GESTÃO"
  const hasExtraFields = isGestao || normalized === "RESULTADOS"

  const iconSrc = {
    location: "/location.png",
    management: "/gestao.png",
    chart: "/chart.png",
  }[iconName]

  // States
  const [municipio, setMunicipio] = useState("")
  const [ano, setAno] = useState("")
  const [dependencia, setDependencia] = useState("")
  const [localizacao, setLocalizacao] = useState("")
  const [escolaridade, setEscolaridade] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({})

  const handleGenerate = () => {
    const newErrors: { [key: string]: boolean } = {}

    if (!municipio) newErrors.municipio = true
    if (!ano) newErrors.ano = true
    if (hasExtraFields && !dependencia) newErrors.dependencia = true
    if (hasExtraFields && !localizacao) newErrors.localizacao = true
    if (isGestao && !escolaridade) newErrors.escolaridade = true

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      alert("Relatório gerado com sucesso!")
    }
  }

  const baseSelectClass =
    "py-2 px-3 rounded-md text-sm bg-slate-100 shadow-sm focus:outline-none focus:ring-2"
  const errorClass = "border border-red-500 ring-red-500"

  return (
    <div className="bg-white rounded-xl shadow-md px-4 py-6 w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-[1200px] mx-auto gap-6">
        {/* Título */}
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

        {/* Formulário */}
        <div className="w-full flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-end items-stretch">
          {/* Município */}
          <div className="flex flex-col w-full sm:w-auto">
            <select
              className={`w-full min-w-[160px] ${baseSelectClass} ${
                errors.municipio ? errorClass : "text-slate-700 focus:ring-sky-400"
              }`}
              value={municipio}
              onChange={(e) => setMunicipio(e.target.value)}
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
            {errors.municipio && <p className="text-red-500 text-xs mt-1">Campo obrigatório</p>}
          </div>

          {/* Ano */}
          <div className="flex flex-col w-full sm:w-auto">
            <select
              className={`w-full min-w-[120px] ${baseSelectClass} ${
                errors.ano ? errorClass : "text-slate-700 focus:ring-sky-400"
              }`}
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            >
              <option value="">Ano</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
            {errors.ano && <p className="text-red-500 text-xs mt-1">Campo obrigatório</p>}
          </div>

          {/* Dependência */}
          {hasExtraFields && (
            <div className="flex flex-col w-full sm:w-auto">
              <select
                className={`w-full min-w-[160px] ${baseSelectClass} ${
                  errors.dependencia ? errorClass : "text-slate-700 focus:ring-sky-400"
                }`}
                value={dependencia}
                onChange={(e) => setDependencia(e.target.value)}
              >
                <option value="">Dependência</option>
                <option value="Municipal">Municipal</option>
                <option value="Estadual">Estadual</option>
              </select>
              {errors.dependencia && (
                <p className="text-red-500 text-xs mt-1">Campo obrigatório</p>
              )}
            </div>
          )}

          {/* Localização */}
          {hasExtraFields && (
            <div className="flex flex-col w-full sm:w-auto">
              <select
                className={`w-full min-w-[160px] ${baseSelectClass} ${
                  errors.localizacao ? errorClass : "text-slate-700 focus:ring-sky-400"
                }`}
                value={localizacao}
                onChange={(e) => setLocalizacao(e.target.value)}
              >
                <option value="">Localização</option>
                <option value="Urbana">Urbano</option>
                <option value="Rural">Rural</option>
              </select>
              {errors.localizacao && (
                <p className="text-red-500 text-xs mt-1">Campo obrigatório</p>
              )}
            </div>
          )}

          {/* Escolaridade (SOMENTE para GESTÃO) */}
          {isGestao && (
            <div className="flex flex-col w-full sm:w-auto">
              <select
                className={`w-full min-w-[160px] ${baseSelectClass} ${
                  errors.escolaridade ? errorClass : "text-slate-700 focus:ring-sky-400"
                }`}
                value={escolaridade}
                onChange={(e) => setEscolaridade(e.target.value)}
              >
                <option value="">Escolaridade</option>
                <option value="Creche">Educação Infantil</option>
                <option value="Pré-escola">Pré-escola</option>
                <option value="Anos Iniciais">Anos Iniciais</option>
                <option value="Anos Finais">Anos Finais</option>
                <option value="Ensino Médio">Ensino Médio</option>
              </select>
              {errors.escolaridade && (
                <p className="text-red-500 text-xs mt-1">Campo obrigatório</p>
              )}
            </div>
          )}

          {/* Botão */}
          <button
            onClick={handleGenerate}
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
