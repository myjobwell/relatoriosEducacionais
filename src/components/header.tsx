export default function Header() {
    return (
      <header className="flex justify-center md:justify-center items-center w-full h-[120px]">
        <div className="flex items-center">
          <div className="flex items-center">
            {/* Logo simplificado do Tribunal de Contas */}
            <div className="w-[180px] h-[120px] relative flex items-center">
              <img
                src="/logo_principal.png"
                alt="Logo do TCE"
                className="absolute top-0 left-0 w-full h-full object-contain"
              />

            </div>
          </div>
        </div>
      </header>
    )
  }
  