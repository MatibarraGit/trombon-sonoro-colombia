import { Clock, MapPin, User, Music } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Historia = () => {
  const timelineEvents = [
    {
      year: "XV",
      title: "Orígenes Europeos del Trombón",
      description: "Surge el trombón (trompeta de vara evolucionada). Se le conoce como “sackbut” (Inglaterra), “sacabuche” (España), entre otros. Es el único instrumento de viento-metal capaz de producir glisados naturales.",
      category: "Origen",
      region: "Europa"
    },
    {
      year: "XV - XVI", 
      title: "Época precolombina",
      description: "Los pueblos indígenas de Colombia ya utilizan la música con funciones sociales y religiosas.",
      category: "Cultura indígena",
      region: "Colombia"
    },
    {
      year: "XVI", 
      title: "Llegada a las Américas",
      description: "El trombón llega al continente americano a través de las expediciones coloniales españolas y las misiones religiosas. Comienza el mestizaje cultural entre indígenas, africanos y europeos. El folclor colombiano empieza a formarse a partir de esta mezcla.",
      category: "Colonización",
      region: "América"
    },
    {
      year: "XVII - XVIII",
      title: "Incorporación del Trombón",
      description: "El trombón se usa en música religiosa y pequeños ensambles durante el Barroco. Se convierte en parte de la orquesta teatral durante el Clasicismo, hacia fines del siglo XVIII.",
      category: "Adaptación",
      region: "Colombia"
    },
    {
      year: "XIX",
      title: "Los ritmos tradicionales colombianos",
      description: "Empiezan a proliferar los ritmos como la cumbia y currulao en la costa atlántica y pacífica, el bambuco y pasillo en la región andina, y el joropo en la Orinoquía.",
      category: "Desarrollo",
      region: "Regiones"
    },
    {
      year: "XIX - XX",
      title: "Dificultades con el Trombón",
      description: "A pesar de facilitar los pasajes rápidos, los trombones de válvulas caen en desuso por problemas de afinación. Se retoma el uso del trombón de vara, consolidándose en la orquesta como instrumento de referencia (2 tenores y 1 bajo).",
      category: "Retorno",
      region: "Nacional"
    },
    {
      year: "1990-2024",
      title: "Era Contemporánea",
      description: "Compositores colombianos crean obras específicas para trombón y folclor. Investigación académica y preservación cultural.",
      category: "Contemporáneo",
      region: "Academia"
    }
  ];

  const culturalAreas = [
    {
      region: "Costa Atlántica",
      description: "El trombón se integró en la cumbia y el porro a través de las bandas pelayeras. Su sonoridad grave complementa las gaitas y el acordeón.",
      characteristics: ["Bandas pelayeras", "Porro sabanero", "Cumbia moderna", "Mapalé urbano"],
      period: "1920-presente"
    },
    {
      region: "Costa Pacífica", 
      description: "Adopción del trombón en el currulao y la chirimía chocoana. Fusión única entre ancestralidad africana y modernidad instrumental.",
      characteristics: ["Currulao contemporáneo", "Chirimía moderna", "Abozao urbano", "Bundes actuales"],
      period: "1960-presente"
    },
    {
      region: "Región Andina",
      description: "El trombón encontró su lugar en pasillos y bambucos a través de estudiantinas y conservatorios. Expresión melancólica y festiva.",
      characteristics: ["Pasillo nostálgico", "Bambuco festivo", "Torbellino moderno", "Guabina actual"],
      period: "1890-presente"
    },
    {
      region: "Orinoquía",
      description: "Integración reciente del trombón en el joropo. Adaptación técnica para igualar la velocidad tradicional del cuatro y la bandola.",
      characteristics: ["Joropo recio", "Joropo lento", "Golpe llanero", "Pasaje moderno"],
      period: "1980-presente"
    }
  ];

  const notableFigures = [
    {
      name: "Lucho Bermúdez",
      role: "Compositor y Director",
      contribution: "Pionero en la incorporación del trombón en la cumbia y el porro. Sus arreglos establecieron patrones que perduran hasta hoy.",
      period: "1912-1994",
      region: "Costa Atlántica"
    },
    {
      name: "Pacho Galán",
      role: "Compositor",
      contribution: "Creador del merecumbé, género que utilizó el trombón como instrumento melódico principal en composiciones folclóricas.",
      period: "1906-1988", 
      region: "Costa Atlántica"
    },
    {
      name: "Blas Emilio Atehortúa",
      role: "Compositor Académico",
      contribution: "Compositor antioqueño que escribió obras para trombón basadas en ritmos colombianos, especialmente bambucos y pasillos.",
      period: "1933-2020",
      region: "Región Andina"
    },
    {
      name: "Francisco Zumaqué",
      role: "Compositor Popular",
      contribution: "Sus composiciones para trombón en cumbias y porros influyeron en generaciones de trombonistas folclóricos.",
      period: "1920-1990",
      region: "Costa Atlántica"
    }
  ];

  return (
    <main className="min-h-screen md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Historia del Trombón en Colombia
            </h1>
            <p className="text-xl opacity-90">
              Un viaje desde Europa hasta el corazón del folclor colombiano
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Introducción y Contexto</CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed space-y-4">
              <p>
                El trombón es un instrumento de la familia viento-metal que surgió a finales del
                siglo XV a partir de la forma de la trompeta de vara. Es el único instrumento de dicha
                familia que puede producir todo el rango de la serie armónica y el efecto natural
                glisado.
              </p>

              <p>
                Durante el Barroco el trombón fue utilizado en el contexto de la música religiosa y en
                pequeños ensambles. Su incorporación a la orquesta se dio en el Clasicismo,  hacia
                finales del siglo XVIII, inicialmente en la orquesta de teatro.
              </p>

              <p>

              </p>
            </CardContent>
          </Card>

          {/* Timeline */}
          <section>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">
              Línea de Tiempo Detallada
            </h2>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <Card key={index} className="relative">
                  <div className="absolute left-0 top-6 w-1 h-16 bg-primary rounded-full" />
                  <CardHeader className="pl-8">
                    <div className="flex items-center gap-4 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        Siglo {event.year}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {event.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground text-xs">
                        <MapPin className="h-3 w-3" />
                        {event.region}
                      </div>
                    </div>
                    <CardTitle className="font-playfair text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-8">
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Cultural Areas */}
          <section>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">
              Áreas Culturales y Adopción Regional
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {culturalAreas.map((area, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {area.region}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {area.period}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="leading-relaxed">{area.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Géneros Representativos:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.characteristics.map((char, charIndex) => (
                          <Badge key={charIndex} variant="outline" className="text-xs">
                            {char}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Notable Figures */}
          <section>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12">
              Figuras Destacadas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {notableFigures.map((figure, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      {figure.name}
                    </CardTitle>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <span>{figure.role}</span>
                      <span>{figure.period}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {figure.region}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed">{figure.contribution}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Historia;