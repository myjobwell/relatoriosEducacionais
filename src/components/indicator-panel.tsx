"use client"

import { useState } from "react"
import { FiSettings } from "react-icons/fi"
import { toast } from "react-hot-toast" // Biblioteca para alertas amigáveis

interface IndicatorPanelProps {
  title: string
  iconName: string
  color: string
  items: string[]
}

export default function IndicatorPanel({ title, iconName, color }: IndicatorPanelProps) {
  const [, subcategory] = title.split(" DE ")
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
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const handleGenerate = () => {
    const newErrors: Record<string, boolean> = {}

    if (!municipio) newErrors.municipio = true
    if (!ano) newErrors.ano = true
    if (hasExtraFields && !dependencia) newErrors.dependencia = true
    if (hasExtraFields && !localizacao) newErrors.localizacao = true
    if (isGestao && !escolaridade) newErrors.escolaridade = true

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      toast.success("Relatório gerado com sucesso!")
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
          {/* Campos dinâmicos */}
          {renderSelect("Município", municipio, setMunicipio, errors.municipio, baseSelectClass, errorClass, [
            { value: "1200013", label: "Acrelândia" },
            { value: "1200054", label: "Assis Brasil" },
            { value: "1200104", label: "Brasiléia" },
            { value: "1200138", label: "Bujari" },
            { value: "1200179", label: "Capixaba" },
            { value: "1200203", label: "Cruzeiro do Sul" },
            { value: "1200252", label: "Epitaciolândia" },
            { value: "1200302", label: "Feijó" },
            { value: "1200328", label: "Jordão" },
            { value: "1200336", label: "Mâncio Lima" },
            { value: "1200344", label: "Manoel Urbano" },
            { value: "1200351", label: "Marechal Thaumaturgo" },
            { value: "1200385", label: "Plácido de Castro" },
            { value: "1200807", label: "Porto Acre" },
            { value: "1200393", label: "Porto Walter" },
            { value: "1200401", label: "Rio Branco" },
            { value: "1200427", label: "Rodrigues Alves" },
            { value: "1200435", label: "Santa Rosa do Purus" },
            { value: "1200500", label: "Sena Madureira" },
            { value: "1200450", label: "Senador Guiomard" },
            { value: "1200609", label: "Tarauacá" },
            { value: "1200708", label: "Xapuri" },
          ])}

          {renderSelect("Ano", ano, setAno, errors.ano, baseSelectClass, errorClass, [
            { value: "2024", label: "2024" },
            { value: "2023", label: "2023" },
            { value: "2022", label: "2022" },
          ])}

          {hasExtraFields && renderSelect("Dependência", dependencia, setDependencia, errors.dependencia, baseSelectClass, errorClass, [
            { value: "Municipal", label: "Municipal" },
            { value: "Estadual", label: "Estadual" },
          ])}

          {hasExtraFields && renderSelect("Localização", localizacao, setLocalizacao, errors.localizacao, baseSelectClass, errorClass, [
            { value: "Urbana", label: "Urbano" },
            { value: "Rural", label: "Rural" },
          ])}

          {isGestao && renderSelect("Escolaridade", escolaridade, setEscolaridade, errors.escolaridade, baseSelectClass, errorClass, [
            { value: "Creche", label: "Educação Infantil" },
            { value: "Pré-escola", label: "Pré-escola" },
            { value: "Anos Iniciais", label: "Anos Iniciais" },
            { value: "Anos Finais", label: "Anos Finais" },
            { value: "Ensino Médio", label: "Ensino Médio" },
          ])}

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

function renderSelect(
  label: string,
  value: string,
  onChange: (value: string) => void,
  hasError: boolean,
  baseClass: string,
  errorClass: string,
  options: { value: string; label: string }[]
) {
  return (
    <div className="flex flex-col w-full sm:w-auto">
      <select
        className={`w-full min-w-[160px] ${baseClass} ${
          hasError ? errorClass : "text-slate-700 focus:ring-sky-400"
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{label}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {hasError && <p className="text-red-500 text-xs mt-1">Campo obrigatório</p>}
    </div>
  )
}