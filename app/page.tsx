"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { constructionData } from "@/lib/construction-data"
import { CompanyLogo } from "@/components/company-logo"

export default function ConstructionGlossary() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const companyName = "S F Johnson Enterprises, LLC" // Replace with actual company name

  // Filter terms based on search query and active division
  const filteredTerms = constructionData.flatMap((division) => {
    const filteredDivisionTerms = division.terms.filter(
      (term) =>
        term.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    if (filteredDivisionTerms.length === 0) return []

    if (activeTab === "all" || activeTab === division.id) {
      return [
        {
          divisionId: division.id,
          divisionName: division.name,
          divisionNumber: division.number,
          terms: filteredDivisionTerms,
        },
      ]
    }

    return []
  })

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-company-600 text-white shadow-md">
        <div className="container flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <CompanyLogo />
            <h1 className="text-xl font-semibold">{companyName}</h1>
          </div>
          <div className="relative ml-auto flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-company-400" />
            <Input
              type="search"
              placeholder="Search terms..."
              className="pl-8 bg-white/10 border-company-400 text-white placeholder:text-company-100"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="container px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-company-800 mb-6">Construction Division Glossary</h2>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="border-b border-company-200">
            <div className="relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-white shadow-md text-company-700 hover:bg-company-50"
                  onClick={() => {
                    const tabsContainer = document.querySelector(".tabs-scroll-container")
                    if (tabsContainer) {
                      tabsContainer.scrollBy({ left: -200, behavior: "smooth" })
                    }
                  }}
                >
                  <span className="sr-only">Scroll left</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </Button>
              </div>

              <div
                className="overflow-x-auto tabs-scroll-container pb-2 hide-scrollbar"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <TabsList className="h-auto w-max bg-company-50 px-4">
                  <TabsTrigger
                    value="all"
                    className="text-sm data-[state=active]:bg-company-600 data-[state=active]:text-white"
                  >
                    All Divisions
                  </TabsTrigger>
                  {constructionData.map((division) => (
                    <TabsTrigger
                      key={division.id}
                      value={division.id}
                      className="text-sm data-[state=active]:bg-company-600 data-[state=active]:text-white"
                    >
                      {division.number}: {division.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-white shadow-md text-company-700 hover:bg-company-50"
                  onClick={() => {
                    const tabsContainer = document.querySelector(".tabs-scroll-container")
                    if (tabsContainer) {
                      tabsContainer.scrollBy({ left: 200, behavior: "smooth" })
                    }
                  }}
                >
                  <span className="sr-only">Scroll right</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <TabsContent value="all" className="mt-6">
            {searchQuery && filteredTerms.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-lg text-muted-foreground">No terms found matching "{searchQuery}"</p>
                <Button
                  variant="outline"
                  className="mt-4 border-company-300 text-company-700 hover:bg-company-50"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="grid gap-8">
                {filteredTerms.map((divisionData) => (
                  <div key={divisionData.divisionId} className="space-y-4">
                    <h2 className="text-xl font-semibold border-b pb-2 text-company-800 border-company-200">
                      Division {divisionData.divisionNumber}: {divisionData.divisionName}
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {divisionData.terms.map((term) => (
                        <div
                          key={`${divisionData.divisionId}-${term.name}`}
                          className="rounded-lg border border-company-200 p-4 hover:shadow-md transition-shadow bg-white"
                        >
                          <h3 className="font-medium text-company-700">{term.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{term.definition}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {constructionData.map((division) => (
            <TabsContent key={division.id} value={division.id} className="mt-6">
              <h2 className="text-xl font-semibold border-b pb-2 mb-4 text-company-800 border-company-200">
                Division {division.number}: {division.name}
              </h2>

              {searchQuery && filteredTerms.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No terms found matching "{searchQuery}" in this division
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-company-300 text-company-700 hover:bg-company-50"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredTerms
                    .filter((div) => div.divisionId === division.id)
                    .flatMap((div) => div.terms)
                    .map((term) => (
                      <div
                        key={term.name}
                        className="rounded-lg border border-company-200 p-4 hover:shadow-md transition-shadow bg-white"
                      >
                        <h3 className="font-medium text-company-700">{term.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{term.definition}</p>
                      </div>
                    ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <footer className="mt-auto py-6 bg-company-800 text-white">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 sm:mb-0">
              <CompanyLogo />
              <span className="font-medium">{companyName}</span>
            </div>
            <p className="text-sm text-company-100">Construction Division Glossary &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
