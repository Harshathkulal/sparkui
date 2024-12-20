import React from "react"
import PageHeader from "@/components/Page-header"
import PageFooter from "@/components/Page-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader/>
      <PageFooter/>
    </div>
  )
}
