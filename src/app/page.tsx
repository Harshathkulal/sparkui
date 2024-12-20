import React from "react"
import PageHeader from "@/components/Page-header"
import PageFooter from "@/components/Page-footer"
import PageHome from "@/components/page-home"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader/>
      <PageHome/>
      <PageFooter/>
    </div>
  )
}
