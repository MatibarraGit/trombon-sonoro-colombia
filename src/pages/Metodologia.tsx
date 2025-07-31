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
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className='lg:col-span-2'>
                <CardHeader>
                  <CardTitle className="font-playfair text-xl flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Objetivos Generales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3" >
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-lg leading-relaxed">
                          Destacar el aporte del trombón al repertorio del folclor colombiano 
                          mediante la creación de una obra que será una corta suite para trombón y
                          banda que se compone de tres movimientos
                          contrastantes que son:
                        </p>

                        <div className='flex flex-col my-2 text-lg'> 
                          <span>1 - Confusión (pasillo)</span>
                          <span>2 - Conciencia (cumbia)</span>
                          <span>3 - Renacer (currulao)</span>
                        </div>

                        <p className="text-lg leading-relaxed">
                          Demostrando así la versatilidad y capacidad expresiva del instrumento 
                          en contextos musicales autóctonos.
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      
                      <p className="text-lg leading-relaxed">
                        A partir de un recorrido histórico y territorial se pretende dar cuenta del estado actual
                        del folclor colombiano así como la evolución que lo llevo a mezclarse con prácticas
                        tan complejas como las orquestales, teniendo como principal elemento, el trombón. A partir de ello se propone la composición de la suit como aporte al repertorio de ritmos colombianos representativos de cada región del país.
                      </p>
                    </li>
                  </ul>
                  
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
                      <span>Identificar el tipo de ritmo según las regiones colombianas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Conocer el aporte del trombón en cada uno de ellos (ritmos).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Entender el porqué del poco protagonismo del trombón dentro de los ritmos
                      identificados y escogidos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span>Proponer una composición que aporte a cada uno de los ritmos a tratar siendo el
                      trombón el claro protagonista.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Metodologia;