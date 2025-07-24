import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, User, Music } from 'lucide-react';

const Historia = () => {
  const timelineEvents = [
    {
      year: "1450-1600",
      title: "Orígenes Europeos del Trombón",
      description: "Desarrollo del trombón en Europa como evolución del sacabuche. Uso principal en música sacra y cortesana.",
      category: "Origen",
      region: "Europa"
    },
    {
      year: "1700-1800", 
      title: "Llegada a las Américas",
      description: "El trombón llega al continente americano a través de las expediciones coloniales españolas y las misiones religiosas.",
      category: "Colonización",
      region: "América"
    },
    {
      year: "1810-1860",
      title: "Bandas Militares en Colombia",
      description: "Establecimiento de las primeras bandas militares en territorio colombiano. El trombón se integra en marchas y música ceremonial.",
      category: "Militar",
      region: "Colombia"
    },
    {
      year: "1880-1920",
      title: "Bandas Municipales",
      description: "Proliferación de bandas municipales en pueblos colombianos. Primera integración del trombón en géneros folclóricos.",
      category: "Folclórico",
      region: "Regiones"
    },
    {
      year: "1950-1980",
      title: "Integración en el Folclor",
      description: "Consolidación del trombón en la cumbia, currulao, pasillo y joropo. Desarrollo de técnicas interpretativas específicas.",
      category: "Modernización",
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
    <div className="min-h-screen">
      <Navigation />
      
      <main className="md:ml-72">
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
                  La historia del trombón en Colombia es un fascinante relato de adaptación cultural 
                  que se extiende desde los orígenes europeos del instrumento hasta su profunda 
                  integración en las tradiciones musicales autóctonas. Este proceso, que abarca 
                  más de cinco siglos, refleja la capacidad de transformación y apropiación 
                  cultural que caracteriza la identidad musical colombiana.
                </p>
                <p>
                  Desde su llegada durante la época colonial hasta su consolidación como voz 
                  fundamental en géneros como la cumbia, el currulao, el pasillo y el joropo, 
                  el trombón ha demostrado una versatilidad excepcional para adaptarse a 
                  contextos musicales diversos, manteniendo su esencia tímbrica mientras 
                  abraza nuevas funciones expresivas y sociales.
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
                          {event.year}
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

            {/* Multimedia Section */}
            <section>
              <h2 className="font-playfair text-3xl font-bold text-center mb-12">
                Archivo Multimedia Histórico
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-lg flex items-center gap-2">
                      <Music className="h-5 w-5 text-primary" />
                      Grabaciones Históricas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/30 rounded">
                        <p className="font-medium text-sm">Banda Nacional - 1940</p>
                        <p className="text-xs text-muted-foreground">Primera grabación de cumbia con trombón</p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded">
                        <p className="font-medium text-sm">Lucho Bermúdez - 1950</p>
                        <p className="text-xs text-muted-foreground">Colombia tierra querida</p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded">
                        <p className="font-medium text-sm">Los Gaiteros de San Jacinto - 1970</p>
                        <p className="text-xs text-muted-foreground">Integración moderna del trombón</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 italic">
                      * Los archivos de audio serán incorporados en la versión final
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-lg">Partituras Históricas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/30 rounded">
                        <p className="font-medium text-sm">Manuscritos S. XIX</p>
                        <p className="text-xs text-muted-foreground">Primeros arreglos para trombón</p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded">
                        <p className="font-medium text-sm">Colección Biblioteca Nacional</p>
                        <p className="text-xs text-muted-foreground">Partituras de bandas municipales</p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded">
                        <p className="font-medium text-sm">Archivo Personal Atehortúa</p>
                        <p className="text-xs text-muted-foreground">Composiciones contemporáneas</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 italic">
                      * Las imágenes de partituras serán añadidas posteriormente
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-lg">Fotografías Documentales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/30 rounded">
                        <p className="font-medium text-sm">Bandas Militares 1900</p>
                        <p className="text-xs text-muted-foreground">Primeros trombonistas en Colombia</p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded">
                        <p className="font-medium text-sm">Festivales Folclóricos</p>
                        <p className="text-xs text-muted-foreground">Integración en celebraciones</p>
                      </div>
                      <div className="p-3 bg-muted/30 rounded">
                        <p className="font-medium text-sm">Conservatorios S. XX</p>
                        <p className="text-xs text-muted-foreground">Educación formal del trombón</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 italic">
                      * Las fotografías históricas serán incorporadas gradualmente
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Historia;