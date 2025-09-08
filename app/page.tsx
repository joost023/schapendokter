import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, ShoppingCart, TrendingUp, Settings, FileText, Calendar, Euro } from "lucide-react"
import Image from "next/image"

export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header style={{ backgroundColor: "#fffbef" }} className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Image
                src="/schapendokter-logo.png"
                alt="Schapendokter Logo"
                width={200}
                height={45}
                className="h-12 w-auto"
              />
              <div className="w-px h-12 bg-gray-300"></div>
              <Image
                src="/zod-veterinary-logo.png"
                alt="ZOD Veterinary Center Logo"
                width={220}
                height={66}
                className="h-14 w-auto"
              />
              <div className="w-px h-12 bg-gray-300"></div>
              <Image
                src="/ecommerce-manager-new-logo.png"
                alt="Ecommerce Manager Logo"
                width={140}
                height={40}
                className="h-8 w-auto opacity-80"
              />
            </div>
            <div className="text-right">
              <p className="text-lg mt-1 text-muted-foreground">Adviestraject 2025</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* Context Section */}
        <section>
          <Card className="border-border" style={{ backgroundColor: "#fffbef" }}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <FileText className="h-6 w-6" />
                Context & Uitdaging
              </CardTitle>
              <p className="text-sm text-muted-foreground italic">Aanleiding: Gesprek met Margit Groeneveld</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                De huidige webshop draait op een <strong>verouderde Magento-omgeving</strong>. De huidige leverancier
                verplicht Schapendokter.nl om over te stappen naar een nieuw systeem.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dit adviestraject heeft als doel om de wensen en eisen zorgvuldig in kaart te brengen, zodat de
                organisatie niet overhaast een keuze maakt, maar een <strong>toekomstbestendig fundament</strong> legt.
              </p>
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
                  <strong className="text-slate-900">B2B Focus:</strong> De 875.000 schapen worden voornamelijk gehouden
                  door commerciële bedrijven met verhoudingsgewijs veel meer schapen dan hobbyhouders. De B2B-markt
                  vormt hiermee de grootste en meest interessante doelgroep voor groei.
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
                    <p className="text-muted-foreground">Bestuderen van de huidige situatie, processen en wensen.</p>
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
                  Tijdens de workshop gaan we samen aan de slag met de onderwerpen die echt belangrijk zijn voor jullie
                  toekomst. Ik begeleid jullie door elk onderdeel met praktische uitleg, concrete voorbeelden uit andere
                  projecten, en help jullie om realistische keuzes te maken die passen bij jullie wensen en budget.
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
              <div className="text-6xl font-bold">€2.500</div>
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
      </div>
    </div>
  )
}
