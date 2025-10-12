"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Users,
  ShoppingCart,
  TrendingUp,
  Settings,
  FileText,
  Calendar,
  Euro,
  Lock,
  Rocket,
  Shield,
  Zap,
} from "lucide-react"
import Image from "next/image"

export default function ProposalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "schaap2025") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Onjuiste code. Probeer opnieuw.")
      setPassword("")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">Toegang Vereist</CardTitle>
            <p className="text-muted-foreground">Voer de toegangscode in om het voorstel te bekijken</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <Input
                  type="password"
                  placeholder="Toegangscode"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-center text-lg"
                />
              </div>
              {error && <p className="text-sm text-red-600 text-center">{error}</p>}
              <Button type="submit" className="w-full" size="lg">
                Toegang Verkrijgen
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header style={{ backgroundColor: "#fffbef" }} className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto">
              <Image
                src="/schapendokter-logo.png"
                alt="Schapendokter Logo"
                width={200}
                height={45}
                className="h-10 sm:h-12 w-auto"
              />
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <Image
                src="/zod-veterinary-logo.png"
                alt="ZOD Veterinary Center Logo"
                width={220}
                height={66}
                className="h-12 sm:h-14 w-auto"
              />
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              <Image
                src="/ecommerce-manager-new-logo.png"
                alt="Ecommerce Manager Logo"
                width={140}
                height={40}
                className="h-6 sm:h-8 w-auto opacity-80"
              />
            </div>
            <div className="text-center lg:text-right">
              <p className="text-base sm:text-lg mt-1 text-muted-foreground">Adviestraject 2025</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="advisory" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="advisory" className="text-base">
              Adviestraject
            </TabsTrigger>
            <TabsTrigger value="platform" className="text-base">
              Voorstel Nieuw Platform
            </TabsTrigger>
          </TabsList>

          {/* Advisory Proposal Tab */}
          <TabsContent value="advisory" className="space-y-16">
            {/* Context Section */}
            <section>
              <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <FileText className="h-6 w-6" />
                    Inleiding
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Jullie hoster / leverancier van de huidige webshop liet weten dat een migratie naar een nieuw
                    systeem noodzakelijk is. Margit Groeneveld heeft dit moment aangegrepen om breder te verkennen welke
                    oplossingen het beste aansluiten bij Schapendokter.nl en ZOD. In plaats van snel te beslissen, nam
                    zij contact met mij op om de mogelijkheden, aandachtspunten en vervolgstappen te bespreken.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Mijn advies was helder: maak een weloverwogen keuze en doe dat met iemand die de opties én de
                    valkuilen kent. Naar aanleiding van ons gesprek heeft Margit mij gevraagd een voorstel te doen voor
                    de begeleiding van het denk- en selectieproces.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Met dit adviestraject brengen we jullie wensen, eisen en randvoorwaarden gestructureerd in kaart. Zo
                    voorkomen we haastwerk en leggen we een toekomstbestendige basis die echt past bij jullie
                    organisatie.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 mt-6 border border-blue-200">
                    <p className="text-sm text-blue-800 font-medium mb-2">📋 In dit voorstel vindt u:</p>
                    <div className="text-sm text-blue-700 space-y-1">
                      <p>• Een analyse van de huidige situatie en marktpotentieel</p>
                      <p>• Een gedetailleerd stappenplan voor het adviestraject</p>
                      <p>• Concrete workshop onderwerpen en werkwijze</p>
                      <p>• Transparante investering en vervolgmogelijkheden</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Current Situation */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">Kerngegevens en Compacte Marktanalyse</h2>

              <Card className="border-border mb-8" style={{ backgroundColor: "#fffbef" }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Marktpotentieel Schapenhouderij Nederland</CardTitle>
                  <p className="text-sm text-muted-foreground italic">(Bron: AI en online platformen)</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">875.000</div>
                      <p className="text-sm text-muted-foreground">Schapen in Nederland (2025)</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">€200</div>
                      <p className="text-sm text-muted-foreground">Gem. uitgave per schaap/jaar</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">€175M</div>
                      <p className="text-sm text-muted-foreground">Totaal marktpotentieel</p>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">€50</div>
                      <p className="text-sm text-muted-foreground">Huidige gem. orderwaarde</p>
                    </div>
                  </div>
                  <div className="bg-slate-100 rounded-lg p-4 mt-4 border border-slate-200">
                    <p className="text-sm leading-relaxed text-slate-800">
                      <strong className="text-slate-900">B2B Focus:</strong> De 875.000 schapen worden voornamelijk
                      gehouden door commerciële bedrijven met verhoudingsgewijs veel meer schapen dan hobbyhouders. De
                      B2B-markt vormt hiermee de grootste en meest interessante doelgroep voor groei.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6 text-center">
                    <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-primary">±400</div>
                    <p className="text-secondary-foreground">Producten</p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-primary">±5.000</div>
                    <p className="text-secondary-foreground">Klanten in systeem</p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6 text-center">
                    <Euro className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-primary">€150k</div>
                    <p className="text-secondary-foreground">Jaaromzet webshop</p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold text-primary">3</div>
                    <p className="text-secondary-foreground">Klantgroepen (B2C/B2B)</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Key Challenges */}
            <section>
              <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Belangrijkste Uitdagingen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Vervanging van verouderde Magento-omgeving</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Geen koppeling met Exact (handmatige processen)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Twee merken via één backend beheren</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Geen WMS of voorraadbeheer systeem</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Geen vaste e-commerce manager</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p>Kennisbank/blogs belangrijk voor traffic</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Step-by-step Plan */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">Stappenplan Adviestraject</h2>
              <div className="grid gap-6">
                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        A
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Voorbereiding & Analyse</h3>
                        <p className="text-muted-foreground">
                          Bestuderen van de huidige situatie, processen en wensen.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        B
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Workshop op Locatie</h3>
                        <Badge variant="secondary" className="mb-2">
                          4 uur
                        </Badge>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• In kaart brengen van werkprocessen en klantgroepen</li>
                          <li>• Bespreken van contentstrategie en technische wensen</li>
                          <li>• Toekomstvisie, doelen en succesfactoren</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Workshop Onderwerpen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Tijdens de workshop gaan we samen aan de slag met de onderwerpen die echt belangrijk zijn voor
                      jullie toekomst. Ik begeleid jullie door elk onderdeel met praktische uitleg, concrete voorbeelden
                      uit andere projecten, en help jullie om realistische keuzes te maken die passen bij jullie wensen
                      en budget.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
                      <p className="text-sm text-blue-800 font-medium">
                        💡 Samen ontdekken we wat er mogelijk is en maken we een plan dat echt bij jullie past
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p>
                            <strong>Jullie visie en ambities</strong> - Waar willen jullie naartoe? Lokaal sterk of
                            landelijk groeien?
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p>
                            <strong>Klantervaring verbeteren</strong> - Welke knelpunten ervaren klanten en waar liggen
                            kansen?
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p>
                            <strong>Slimme productconcepten</strong> - Abonnementen, bundels en nieuwe verdienmodellen
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p>
                            <strong>Systemen laten samenwerken</strong> - Koppelingen die tijd en fouten besparen
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p>
                            <strong>Realistische planning</strong> - Wat kan wanneer en wat kost het echt?
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p>
                            <strong>Risico's voorkomen</strong> - Waar moeten we op letten en hoe pakken we dat aan?
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p>
                            <strong>Concrete vervolgstappen</strong> - Wat gaan we doen en hoe pakken we dat aan?
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        C
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Extra Digitaal Overleg</h3>
                        <Badge variant="secondary" className="mb-2">
                          2 uur
                        </Badge>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Bespreken en aanvullen van workshop resultaten</li>
                          <li>• Verdere aanscherping van wensen en prioriteiten</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                        D
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Uitwerking & Adviesrapport</h3>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Oplevering van plan en requirementsdocument</li>
                          <li>• Functionele en technische wensen</li>
                          <li>• Advies en aanbevelingen voor vervolgstappen</li>
                          <li>• Basis voor bouwende partij</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Investment */}
            <section>
              <Card className="bg-primary text-primary-foreground border-0">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold">Jullie Investering</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div className="text-6xl font-bold line-through opacity-50">€2.500</div>
                  <p className="text-xl text-primary-foreground/90">excl. btw</p>

                  <div className="bg-slate-100 rounded-lg p-6 text-left border border-slate-200">
                    <h4 className="font-semibold mb-4 text-lg text-slate-900">Dit is inclusief:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-slate-800">Workshop op locatie</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-slate-800">Digitaal overleg</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-slate-800">Uitwerking plan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="text-slate-800">Requirementsdocument</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-100 rounded-lg p-6 text-left border border-slate-200">
                    <h4 className="font-semibold mb-3 text-lg text-slate-900">Aanvullende begeleiding:</h4>
                    <p className="text-slate-800 leading-relaxed">
                      Actieve begeleiding van het selectieproces kan additioneel worden gedaan tegen een vast tarief van{" "}
                      <strong className="text-slate-900">€100 per uur excl. btw</strong>.
                    </p>
                  </div>

                  <p className="text-primary-foreground/90 leading-relaxed">
                    Tijdens het ontwikkeltraject ben ik beschikbaar voor ruggespraak en controle op het project, om te
                    bewaken dat de wensen goed zijn gedefinieerd en uitgevoerd.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Follow-up Services */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">Vervolgmogelijkheden</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">CRM Management</h3>
                    <p className="text-sm text-muted-foreground">Klantrelatiebeheer en -segmentatie optimaliseren</p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6 text-center">
                    <Settings className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Workflow Optimalisatie</h3>
                    <p className="text-sm text-muted-foreground">Bedrijfsprocessen stroomlijnen en automatiseren</p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6 text-center">
                    <Settings className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">E-mail Automation</h3>
                    <p className="text-sm text-muted-foreground">Nieuwsbrieven en klantgedrag-gestuurde flows</p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Betaalde Advertenties</h3>
                    <p className="text-sm text-muted-foreground">Facebook, Instagram, LinkedIn campagnes</p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6 text-center">
                    <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Webshop Management</h3>
                    <p className="text-sm text-muted-foreground">Optimalisatie, beheer en onderhoud</p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">Periodieke Evaluaties</h3>
                    <p className="text-sm text-muted-foreground">Maandelijks overleg en projectbegeleiding</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Expected Results */}
            <section>
              <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">Verwachte Resultaten</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">Concreet Requirementsdocument</h3>
                      <p className="text-sm text-muted-foreground">Waarmee offertes goed vergelijkbaar worden</p>
                    </div>
                    <div>
                      <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">Grip op Digitale Processen</h3>
                      <p className="text-sm text-muted-foreground">En duidelijke strategie voor de toekomst</p>
                    </div>
                    <div>
                      <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="font-semibold mb-2">Toekomstbestendige Basis</h3>
                      <p className="text-sm text-muted-foreground">Voor een nieuw platform voor de komende jaren</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-4 text-balance">Klaar om te Starten?</h2>
                  <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">
                    Laten we samen jullie e-commerce toekomst vormgeven met een solide fundament.
                  </p>
                  <div className="space-y-4">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
                      <a href="mailto:joost@ecommerce-manager.nl">Start het Adviestraject</a>
                    </Button>
                    <p className="text-primary-foreground/90">
                      Of bel direct: <span className="font-semibold">0610866412</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Company Details Footer */}
            <footer className="text-center py-8 border-t border-border">
              <div className="space-y-2 text-muted-foreground">
                <p className="font-semibold">Ecommerce-manager.nl</p>
                <p>KvK: 72086831 • BTW: NL001691496B80</p>
                <p>
                  <a
                    href="https://ecommerce-manager.nl"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.ecommerce-manager.nl
                  </a>
                </p>
              </div>
            </footer>
          </TabsContent>

          <TabsContent value="platform" className="space-y-16">
            {/* Introduction */}
            <section>
              <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Rocket className="h-6 w-6" />
                    Samen Bouwen aan een Toekomstbestendig Platform
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    De huidige partij stopt eind 2025 met het ondersteunen van Magento. Dat betekent dat jullie voor een
                    belangrijke keuze staan. Tijdens ons gesprek kwam de vraag of we de huidige omgeving zouden kunnen
                    migreren naar een nieuwe hosting. Ik ben eerlijk: ik ken geen enkele partij die graag een oude,
                    verouderde omgeving overneemt. En eerlijk gezegd zou ik dat ook niet adviseren.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Jullie hebben specifieke functies nodig en moeten voldoen aan strikte compliance-eisen. Of je nu
                    kiest voor migratie of voor iets nieuws bouwen—er zal hoe dan ook geïnvesteerd moeten worden. De
                    vraag is dus niet <em>of</em> je investeert, maar <em>waarin</em> je investeert.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6 my-6 border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3 text-lg">💡 Een Unieke Samenwerking</h3>
                    <p className="text-blue-800 leading-relaxed mb-3">
                      Na twee gesprekken met Margit en een grondige marktverkenning ben ik tot dit voorstel gekomen.
                      Niet zomaar een offerte, maar een <strong>samenwerkingsvoorstel</strong> waarbij we samen
                      investeren in iets nieuws.
                    </p>
                    <p className="text-blue-800 leading-relaxed mb-3">
                      Ik wil graag investeren in een platform dat niet alleen voor Schapendokter werkt, maar ook voor
                      andere partijen in de veterinaire markt. Door nu samen op te trekken, bouwen we iets dat
                      toekomstbestendig is én geschikt voor meerdere klanten. Jullie krijgen een{" "}
                      <strong>modern, compliant platform</strong> dat helemaal van deze tijd is—tegen een kostprijs die
                      normaal gesproken niet haalbaar zou zijn.
                    </p>
                    <p className="text-blue-800 leading-relaxed">
                      Dit voorstel is gebouwd op <strong>kennis en vertrouwen</strong>. Samen bouwen we aan iets nieuws
                      in de markt.
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 mt-6 border border-green-200">
                    <p className="text-sm text-green-800 font-medium mb-2">✓ Wat betekent dit voor jullie?</p>
                    <div className="text-sm text-green-700 space-y-1">
                      <p>• Een modern, compliant platform tegen een fractie van de normale kosten</p>
                      <p>• Meedenken en samen investeren in een oplossing die echt bij jullie past</p>
                      <p>• Toekomstbestendig: uitbreidbaar en koppelbaar met andere systemen</p>
                      <p>• Samen bouwen aan iets waardevols voor de hele veterinaire sector</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card className="border-2 border-primary" style={{ backgroundColor: "#fffbef" }}>
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Rocket className="h-6 w-6 text-primary" />
                    Wat is een MVP en Waarom Starten We Hiermee?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <p className="text-lg leading-relaxed">
                    <strong>MVP staat voor "Minimum Viable Product"</strong> – oftewel: de minimaal werkende versie van
                    jullie nieuwe platform. Het bevat alle essentiële functies die jullie nodig hebben om direct te
                    kunnen starten, zonder overbodige toeters en bellen.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3">🎯 Waarom een MVP?</h3>
                    <div className="space-y-2 text-blue-800">
                      <p>
                        <strong>1. Sneller live:</strong> In plaats van maanden wachten op een "perfect" systeem, kunnen
                        jullie binnen enkele weken al aan de slag
                      </p>
                      <p>
                        <strong>2. Lager risico:</strong> We bouwen eerst wat echt nodig is, en breiden daarna uit op
                        basis van jullie ervaringen
                      </p>
                      <p>
                        <strong>3. Slimmer investeren:</strong> Jullie betalen alleen voor functies die jullie echt
                        gebruiken, niet voor "nice to have" features
                      </p>
                      <p>
                        <strong>4. Leren en verbeteren:</strong> Door snel te starten kunnen we samen ontdekken wat
                        werkt en wat beter kan
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border-2 border-primary/20 mt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground rounded-full p-3 flex-shrink-0">
                        <Zap className="h-6 w-6" />
                      </div>
                      <div className="w-full">
                        <h3 className="font-bold text-xl mb-3 text-primary">Bekijk het Werkende Prototype!</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          We hebben al een klikbaar prototype gebouwd waarin je de MVP-functies én een deel van de
                          toekomstige mogelijkheden kunt verkennen. Zo krijg je een concreet beeld van hoe jullie nieuwe
                          platform eruit komt te zien en hoe het werkt.
                        </p>
                        <a
                          href="https://schapendokter-concept.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mb-4 rounded-lg overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg"
                        >
                          <Image
                            src="/schapendokter-demo-screenshot.png"
                            alt="Schapendokter Demo Screenshot"
                            width={1200}
                            height={800}
                            className="w-full h-auto"
                          />
                        </a>
                        <Button size="lg" className="text-lg w-full sm:w-auto" asChild>
                          <a href="https://schapendokter-concept.vercel.app/" target="_blank" rel="noopener noreferrer">
                            🚀 Open Demo Omgeving
                          </a>
                        </Button>
                        {/* </CHANGE> */}
                        <p className="text-sm text-muted-foreground mt-3 italic">
                          Tip: Klik rond, test de flows en krijg een gevoel voor de gebruikerservaring
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed pt-4">
                    De MVP bevat alle compliance-functies (URA-gate, EU-logo, receptbewaking), basis
                    B2C/B2B-functionaliteit, contactformulieren, kennisbank en een beheeromgeving. Alles wat jullie
                    nodig hebben om direct compliant en professioneel te kunnen starten.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* MVP Overview */}
            <section>
              <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Shield className="h-6 w-6" />
                    Bouw MVP "Schapendokter" Commerce-omgeving
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Schapendokter.nl krijgt een <strong>compliance-first commerce-omgeving</strong> die specifiek is
                    ontworpen voor de Nederlandse veterinaire markt. De MVP richt zich op het correct aanbieden van
                    VRIJ-producten, het veilig en wettelijk juist afhandelen van URA-middelen, en het
                    informeren/doorverwijzen bij UDA/UDD (zonder online verkoop).
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Daarnaast bevat de MVP een basis B2C/B2B-laag, Bel-mij en Afspraak-aanvraag, plus een Kennisbank,
                    Nieuws en Zoek—in een nieuw, consistent design met EU-logo/registratie geïntegreerd.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Functional Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">Functioneel Overzicht (MVP)</h2>

              <div className="grid gap-6">
                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">1. Productcategorieën & Kanaalisatie</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-semibold mb-1">VRIJ:</p>
                      <p className="text-muted-foreground">
                        Volledig bestelbaar (gastcheckout toegestaan), PDP toont EU-logo + Register-link.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">URA (op recept):</p>
                      <ul className="text-muted-foreground space-y-1 ml-4">
                        <li>• Publiek: neutrale info (geen prijs/mandje)</li>
                        <li>
                          • Na login: URA-gate met patiënt/UBN, recept-koppeling (consume-once), NL-adres-check, daarna
                          pas prijs en afrekenen
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">UDA:</p>
                      <p className="text-muted-foreground">
                        Niet online bestelbaar → PDP met info + "Afspraak/Contact"
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">UDD:</p>
                      <p className="text-muted-foreground">
                        Niet online bestelbaar → PDP met info + "Behandeling boeken" (zorgprestatie)
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">EU-logo + Register-link:</p>
                      <p className="text-muted-foreground">Automatisch zichtbaar op PDP's met middelen</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">2. B2C & B2B Zichtbaarheid</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-semibold mb-1">B2C:</p>
                      <p className="text-muted-foreground">
                        Ziet VRIJ (publiek) en kan URA bestellen via gate na login
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">B2B:</p>
                      <p className="text-muted-foreground">
                        Rol-gebaseerde toegang tot afgeschermde categorie(ën) en eigen prijslijst (één lijst in MVP)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">3. Checkout & Compliance-gates (URA)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      <strong>Volgorde:</strong> Login → Patiënt/UBN → Recept → NL-adres → Betalen
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Consume-once:</strong> Recept wordt niet hergebruikt na volledige uitlevering
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Audit-events:</strong> Op kritieke stappen (wie/wat/wanneer)
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">4. Bel-mij & Afspraak-aanvraag (Basic)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      <strong>Bel-mij formulier:</strong> Met reden/triage; queue in Admin: Nieuw / In behandeling /
                      Afgehandeld
                    </p>
                    <p className="text-muted-foreground">
                      <strong>Afspraak-aanvraag:</strong> Formulier met voorkeursmoment; bevestiging vanuit backoffice
                      (nog geen agenda-koppeling in MVP)
                    </p>
                    <p className="text-muted-foreground">Verzoeken worden opgeslagen bij het account/klant</p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">5. Content & Zoek</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Kennisbank (artikelen + categorieën), Nieuws (lijst/detail), Zoek over producten + artikelen
                      (titel/omschrijving)
                    </p>
                    <p className="text-muted-foreground">URA/UDA/UDD-pagina's: neutrale tekst (geen publieksreclame)</p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">6. Admin (Minimum om te Draaien)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Productbeheer met kanaalisatie per SKU</li>
                      <li>• Receptenlog (recept-ID, status, verbruiksteller)</li>
                      <li>• Bestellingen (overzicht + detail, NL-adres-status)</li>
                      <li>• Bel-mij/Afspraken queues met notities</li>
                      <li>• Basis-exports: Orders (CSV) + Vierkants-export basic (ontvangst/aflever/retour per SKU)</li>
                      <li>
                        • Compliance-widgets: EU-logo-link-test, URA-buiten-NL-counter (= 0), laatste DGR-check
                        (handmatig vastleggen)
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">7. Design & Techniek</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      <strong>Nieuw jasje:</strong> Modern, toegankelijk (WCAG), mobiel-vriendelijk; duidelijke
                      compliance-microcopy
                    </p>
                    <p className="text-muted-foreground">
                      <strong>API-first, modulair:</strong> Klaar voor toekomstige koppelingen (PMS, teleconsult,
                      fulfilment-pro)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Why Choose This Solution */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">Waarom Kiezen voor deze (Future-proof) Oplossing?</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6">
                    <Shield className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="font-semibold mb-2 text-lg">Compliance-first by Design</h3>
                    <p className="text-sm text-muted-foreground">
                      URA-gate, NL-adres-check, EU-logo/registratie en juiste PDP-logica voorkomen boetes en
                      reputatierisico
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6">
                    <Users className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="font-semibold mb-2 text-lg">Specifiek voor Veterinaire Praktijk</h3>
                    <p className="text-sm text-muted-foreground">
                      UDA/UDD correct afgehandeld (informatie/afspraak), URA-receptbewaking (consume-once),
                      patiënt/UBN-koppeling
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardContent className="p-6">
                    <Zap className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="font-semibold mb-2 text-lg">Modulair & Koppelbaar</h3>
                    <p className="text-sm text-muted-foreground">
                      Geen PMS-lock-in; later uit te breiden met teleconsult, PMS-koppelingen, Fulfilment Pro, B2B Pro,
                      abonnementen
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-border mt-6" style={{ backgroundColor: "#fffbef" }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Schaalbaar
                  </h3>
                  <p className="text-muted-foreground">
                    Dezelfde MVP-basis kan hergebruikt worden voor extra storefronts (zoals ZOD), met eigen branding/URL
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Cost Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-8 text-center">Kostenoverzicht</h2>

              {/* Main MVP Build */}
              <Card className="bg-primary text-primary-foreground border-0 mb-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold">1. Eenmalig – Bouw MVP Schapendokter.nl</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <div>
                    <div className="text-6xl font-bold">€17.500</div>
                    <p className="text-xl text-primary-foreground/90">excl. btw</p>
                    <Badge variant="secondary" className="mt-4">
                      Vaste Projectprijs
                    </Badge>
                  </div>

                  <div className="bg-slate-100 rounded-lg p-6 text-left border border-slate-200">
                    <h4 className="font-semibold mb-4 text-lg text-slate-900">Inclusief:</h4>
                    <div className="grid md:grid-cols-2 gap-3 text-slate-800">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Design (nieuw jasje) + implementatie MVP-functies</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>EU-logo/registratie-component + URA-gate + B2C/B2B-laag</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Bel-mij & Afspraak-aanvraag (basic)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Kennisbank, Nieuws, Zoek</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Admin (producten, bestellingen, receptlog, queues, basis-exports)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Basis performance, beveiliging (SSL), privacy-pagina's & microcopy</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Acceptatie-test + 1 ronde correcties</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-100 rounded-lg p-6 text-left border border-slate-200">
                    <h4 className="font-semibold mb-3 text-lg text-slate-900">
                      Niet inbegrepen (optioneel/latere fase):
                    </h4>
                    <p className="text-sm text-slate-800 leading-relaxed">
                      Teleconsult met opnames/transcriptie, PMS-koppeling, geavanceerd fulfilment (batch/lot-scan &
                      recall-flows), abonnementen, uitgebreide B2B-rechten, marketing-features (kortingsacties/bundels),
                      maatwerk beyond MVP.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Costs */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">2. Extra Storefront</CardTitle>
                    <p className="text-sm text-muted-foreground">(zelfde MVP-basis, eigen URL/branding)</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">€7.500 - €10.000</div>
                    <p className="text-sm text-muted-foreground mb-4">excl. btw per storefront (bijv. ZOD)</p>
                    <p className="text-sm text-muted-foreground">
                      Hergebruik MVP-componenten, eigen theming/instellingen. Exacte prijs na korte intake
                      (branding/wijzigingen).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">3. Vaste Maandkosten</CardTitle>
                    <p className="text-sm text-muted-foreground">per storefront (URL)</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">€249 / maand</div>
                    <p className="text-sm text-muted-foreground mb-4">excl. btw</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Security updates</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Beschikbaarheid & monitoring</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Klein technisch beheer & ondersteuning</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">4. Marketing & Content</CardTitle>
                    <p className="text-sm text-muted-foreground">(optioneel, strippenkaart)</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">€50 / uur</div>
                    <p className="text-sm text-muted-foreground mb-4">excl. btw</p>
                    <p className="text-sm text-muted-foreground">
                      Webshop manager: productmanagement, marketing/teksten, e-mail, desgewenst order/fulfilment
                      support. Uren worden verrekend via strippenkaart (maandelijks inzetbaar).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">5. Maatwerkontwikkeling</CardTitle>
                    <p className="text-sm text-muted-foreground">(optioneel)</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">€100 / uur</div>
                    <p className="text-sm text-muted-foreground mb-4">excl. btw</p>
                    <p className="text-sm text-muted-foreground">
                      Development op nacalculatie: nieuwe functies, integraties, speciale rapportages. Vooraf kleine
                      scope + schatting per change.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-border mt-6" style={{ backgroundColor: "#fffbef" }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">6. Toekomstige Uitbreidingen (Richtlijn)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                  <p>
                    • <strong>Teleconsult (opnames + transcriptie):</strong> Later te specificeren (prijs n.n.b.)
                  </p>
                  <p>
                    • <strong>PMS-koppeling (flexibele schil):</strong> Projectbasis offerte per PMS/vestiging
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Assumptions */}
            <section>
              <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Aannames & Randvoorwaarden</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>• Inhoud (teksten, productdata, beeld) wordt aangeleverd; wij leveren structuur en componenten</p>
                  <p>• Domein/hosting/DNS op jullie naam (wij kunnen technisch regelen)</p>
                  <p>
                    • Go-live criteria: MVP-features live, basis content gevuld, EU-logo-link werkend, URA-gate getest
                  </p>
                  <p>• Betaalprovider & logistiek: bestaande contracten of door jullie te kiezen; wij sluiten aan</p>
                  <p>• Doorlooptijd en planning in overleg op basis van beschikbaarheid van content en feedback</p>
                </CardContent>
              </Card>
            </section>

            {/* Summary */}
            <section>
              <Card className="bg-primary text-primary-foreground border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">Samenvatting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-center">
                    Voor <strong>€17.500 (ex btw)</strong> leveren we een NL-compliant, veterinaire MVP-webshop met
                    VRIJ/URA/UDA/UDD-flows, B2C/B2B, Bel-mij & Afspraak-aanvraag, Kennisbank/Nieuws/Zoek, en een compact
                    Admin met exports—klaar om later uit te breiden met teleconsult, PMS-koppelingen en extra
                    storefronts. Het onderhoud & SLA kost <strong>€249 p/m</strong> per storefront; marketing/content
                    kan flexibel via een strippenkaart (<strong>€50/u</strong>); extra ontwikkeling tegen{" "}
                    <strong>€100/u</strong>.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold mb-4 text-balance">Klaar om te Starten?</h2>
                  <p className="text-xl mb-8 text-primary-foreground/90 text-pretty">Laten we aan de slag gaan.</p>
                  <div className="space-y-4">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
                      <a href="mailto:joost@ecommerce-manager.nl">Start het Project</a>
                    </Button>
                    <p className="text-primary-foreground/90">
                      Of bel direct: <span className="font-semibold">0610866412</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Company Details Footer */}
            <footer className="text-center py-8 border-t border-border">
              <div className="space-y-2 text-muted-foreground">
                <p className="font-semibold">Ecommerce-manager.nl</p>
                <p>KvK: 72086831 • BTW: NL001691496B80</p>
                <p>
                  <a
                    href="https://ecommerce-manager.nl"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.ecommerce-manager.nl
                  </a>
                </p>
              </div>
            </footer>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
