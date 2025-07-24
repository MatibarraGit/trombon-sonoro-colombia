import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Search, BarChart3, Calendar, CheckCircle, Circle } from 'lucide-react';

const Metodologia = () => {
  const researchPhases = [
    {
      phase: "Fase 1",
      title: "Investigación Preliminar",
      duration: "2 meses",
      status: "completed",
      activities: [
        "Revisión bibliográfica especializada",
        "Identificación de fuentes primarias",
        "Contacto con informantes clave",
        "Diseño de instrumentos de recolección"
      ]
    },
    {
      phase: "Fase 2", 
      title: "Trabajo de Campo",
      duration: "4 meses",
      status: "completed",
      activities: [
        "Entrevistas a músicos tradicionales",
        "Grabación de sesiones musicales",
        "Análisis de partituras históricas",
        "Documentación fotográfica y audiovisual"
      ]
    },
    {
      phase: "Fase 3",
      title: "Análisis y Composición",
      duration: "3 meses", 
      status: "in-progress",
      activities: [
        "Análisis armónico y rítmico",
        "Composición de la suite",
        "Pruebas interpretativas",
        "Refinamiento de la obra"
      ]
    },
    {
      phase: "Fase 4",
      title: "Documentación Final",
      duration: "2 meses",
      status: "pending",
      activities: [
        "Redacción del documento final",
        "Preparación de la presentación",
        "Grabación de la obra completa",
        "Socialización de resultados"
      ]
    }
  ];

  const analysisComponents = [
    {
      title: "Análisis Rítmico",
      description: "Estudio de patrones rítmicos característicos de cada género folclórico y su adaptación al trombón",
      methods: ["Transcripción métrica", "Análisis de acentuación", "Estudio de polirritmia", "Adaptación instrumental"]
    },
    {
      title: "Análisis Armónico", 
      description: "Examen de estructuras armónicas tradicionales y su reinterpretación en la suite para trombón",
      methods: ["Análisis funcional", "Progresiones modales", "Armonización contemporánea", "Contrapunto melódico"]
    },
    {
      title: "Análisis Melódico",
      description: "Investigación de melodías características y su desarrollo temático en la composición",
      methods: ["Análisis motívico", "Desarrollo temático", "Ornamentación", "Fraseo interpretativo"]
    },
    {
      title: "Análisis Cultural",
      description: "Contextualización social y cultural de cada género musical en la obra compositiva",
      methods: ["Etnomusicología", "Historia social", "Significado cultural", "Función ritual"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="md:ml-72">
        {/* Hero Section */}
        <section className="relative h-64 bg-gradient-accent text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 h-full flex items-center px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                Metodología de Investigación
              </h1>
              <p className="text-xl opacity-90">
                Diseño y enfoque del estudio sobre el trombón en el folclor colombiano
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="py-16 px-6">
          <div className="max-w-6xl mx-auto space-y-16">
            
            {/* Research Objectives */}
            <section>
              <h2 className="font-playfair text-3xl font-bold text-center mb-12">
                Objetivos del Estudio
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Objetivo General
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed">
                      Destacar el aporte del trombón al repertorio del folclor colombiano 
                      mediante la creación de una suite que integre elementos musicales 
                      representativos de las cuatro regiones principales del país, 
                      demostrando la versatilidad y capacidad expresiva del instrumento 
                      en contextos musicales autóctonos.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl flex items-center gap-2">
                      <Target className="h-5 w-5 text-accent" />
                      Objetivos Específicos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>Analizar la integración histórica del trombón en géneros como cumbia, currulao, pasillo y joropo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>Componer una suite en tres movimientos que represente la evolución musical del trombón en Colombia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>Documentar técnicas interpretativas específicas para la ejecución del trombón en contextos folclóricos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>Contribuir al repertorio académico del trombón con obras basadas en tradiciones colombianas</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Research Design */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl flex items-center gap-2">
                  <Search className="h-6 w-6 text-primary" />
                  Diseño de la Investigación
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Enfoque</h3>
                    <Badge variant="secondary" className="mb-2">Cualitativo-Cuantitativo</Badge>
                    <p className="text-sm text-muted-foreground">
                      Metodología mixta que combina análisis musical cuantitativo con investigación etnomusicológica cualitativa
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Tipo de Estudio</h3>
                    <Badge variant="secondary" className="mb-2">Descriptivo-Creativo</Badge>
                    <p className="text-sm text-muted-foreground">
                      Investigación descriptiva con componente creativo-compositivo que resulta en una obra musical original
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Alcance</h3>
                    <Badge variant="secondary" className="mb-2">Nacional-Regional</Badge>
                    <p className="text-sm text-muted-foreground">
                      Cobertura de las cuatro regiones musicales principales de Colombia con énfasis en géneros representativos
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Métodos de Recolección de Datos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Entrevistas Semiestructuradas</h4>
                      <p className="text-sm text-muted-foreground">
                        Conversaciones con músicos tradicionales, compositores y académicos especializados en folclor colombiano
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Análisis Documental</h4>
                      <p className="text-sm text-muted-foreground">
                        Revisión de partituras históricas, grabaciones y material bibliográfico especializado
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Observación Participante</h4>
                      <p className="text-sm text-muted-foreground">
                        Participación en ensayos y presentaciones de grupos folclóricos que incluyen trombón
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Análisis Musical</h4>
                      <p className="text-sm text-muted-foreground">
                        Transcripción y análisis armónico, rítmico y melódico de obras representativas
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suite Structure Diagram */}
            <section>
              <h2 className="font-playfair text-3xl font-bold text-center mb-12">
                Estructura de la Suite: Tres Movimientos
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">I</span>
                    </div>
                    <CardTitle className="font-playfair text-xl">Confusión</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      La búsqueda de identidad musical en un contexto globalizado
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Elementos Musicales:</h4>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Disonancias armónicas</li>
                        <li>• Ritmos entremezclados</li>
                        <li>• Búsqueda tímbrica</li>
                        <li>• Tensión expresiva</li>
                      </ul>
                    </div>
                    <Badge variant="outline">Tempo: Andante misterioso</Badge>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-secondary">II</span>
                    </div>
                    <CardTitle className="font-playfair text-xl">Conciencia</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      El descubrimiento de las raíces y tradiciones propias
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Elementos Musicales:</h4>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Melodías folclóricas</li>
                        <li>• Ritmos tradicionales</li>
                        <li>• Armonías modales</li>
                        <li>• Claridad formal</li>
                      </ul>
                    </div>
                    <Badge variant="outline">Tempo: Moderato expresivo</Badge>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-accent">III</span>
                    </div>
                    <CardTitle className="font-playfair text-xl">Renacer</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      La síntesis creativa entre tradición y modernidad
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Elementos Musicales:</h4>
                      <ul className="text-xs space-y-1 text-muted-foreground">
                        <li>• Fusión estilística</li>
                        <li>• Virtuosismo técnico</li>
                        <li>• Síntesis armónica</li>
                        <li>• Celebración cultural</li>
                      </ul>
                    </div>
                    <Badge variant="outline">Tempo: Allegro festivo</Badge>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Analysis Methods */}
            <section>
              <h2 className="font-playfair text-3xl font-bold text-center mb-12">
                Metodología de Análisis Musical
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {analysisComponents.map((component, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="font-playfair text-lg flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-primary" />
                        {component.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{component.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Métodos Aplicados:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {component.methods.map((method, methodIndex) => (
                            <Badge key={methodIndex} variant="outline" className="text-xs justify-center">
                              {method}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Work Timeline */}
            <section>
              <h2 className="font-playfair text-3xl font-bold text-center mb-12">
                Cronograma de Trabajo
              </h2>
              
              <div className="space-y-6">
                {researchPhases.map((phase, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-playfair text-lg flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-primary" />
                          {phase.phase}: {phase.title}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{phase.duration}</Badge>
                          {phase.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-500" />}
                          {phase.status === 'in-progress' && <Circle className="h-5 w-5 text-yellow-500 fill-current" />}
                          {phase.status === 'pending' && <Circle className="h-5 w-5 text-gray-400" />}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {phase.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              phase.status === 'completed' ? 'bg-green-500' :
                              phase.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-400'
                            }`} />
                            <span className="text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Metodologia;