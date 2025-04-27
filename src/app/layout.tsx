import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Relatórios Educacionais | TCE Acre",
  description: "Painel de Indicadores Educacionais do Tribunal de Contas do Estado do Acre",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}