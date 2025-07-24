import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useState } from 'react';

const Joropo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    // TODO: Implement actual audio playback
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="md:ml-72">
        {/* Hero Section */}
        <section className="relative h-64 bg-gradient-colombia-green text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 h-full flex items-center px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                Joropo
              </h1>
              <p className="text-xl opacity-90">
                Orinoquía - El espíritu del llano en nuevas dimensiones sonoras
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Historical Description */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Historia y Contexto Cultural</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg leading-relaxed">
                <p>
                  El joropo es la expresión musical más representativa de la región de la Orinoquía, 
                  que abarca los llanos orientales de Colombia y Venezuela. Este género musical 
                  nació del encuentro cultural entre español, indígena y africano en las vastas 
                  sabanas, donde el trabajo ganadero y la vida rural moldearon su carácter 
                  rítmico y melódico distintivo.
                </p>
                
                <p>
                  La incorporación del trombón en el joropo representa una evolución contemporánea 
                  fascinante de este género tradicionalmente interpretado con cuatro, maracas, 
                  bandola y contrabajo. El trombón aporta nuevas dimensiones sonoras al joropo, 
                  manteniendo la esencia del trabajo y la vida en los llanos orientales mientras 
                  enriquece las posibilidades armónicas y melódicas del conjunto.
                </p>
                
                <p>
                  En el contexto llanero, el trombón ha encontrado su espacio especialmente en 
                  las adaptaciones orquestales y en formatos de cámara, donde su capacidad para 
                  ejecutar líneas melódicas virtuosas complementa el ritmo acelerado del joropo 
                  y dialoga con la tradición vocal del canto llanero.
                </p>
                
                <blockquote className="border-l-4 border-colombia-green pl-6 italic text-muted-foreground">
                  "El joropo con trombón es como el viento que cruza los llanos: mantiene su 
                  fuerza ancestral pero abraza nuevos horizontes sonoros."
                </blockquote>
              </CardContent>
            </Card>

            {/* Audio Player */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl flex items-center gap-3">
                  <Volume2 className="h-6 w-6 text-colombia-green" />
                  Reproductor de Audio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">Joropo Llanero con Trombón - Muestra Musical</h3>
                      <p className="text-sm text-muted-foreground">Música de los llanos orientales colombianos</p>
                    </div>
                    <Button
                      size="lg"
                      onClick={togglePlayback}
                      className="rounded-full w-14 h-14 bg-colombia-green hover:bg-colombia-green/90"
                    >
                      {isPlaying ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </Button>
                  </div>
                  
                  {/* Audio Progress Bar Placeholder */}
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-colombia-green h-2 rounded-full w-3/5 transition-all duration-300" />
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>2:15</span>
                    <span>3:45</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    * El clip de audio será incorporado en la versión final del proyecto
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Musical Characteristics */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Características del Joropo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Estructura Musical</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Compás de 3/4 con subdivisión ternaria</li>
                      <li>• Tempo allegro (♩ = 180-200 bpm)</li>
                      <li>• Forma estrófica con estribillos</li>
                      <li>• Patrones rítmicos de corcheas</li>
                      <li>• Modalidad mayor predominante</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Rol del Trombón</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Contracantos melódicos virtuosos</li>
                      <li>• Soporte armónico en registro medio</li>
                      <li>• Glissandos característicos del llano</li>
                      <li>• Técnica de doble articulación</li>
                      <li>• Imitación de efectos vocales</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Llanero Culture */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Cultura Llanera y Identidad Musical</CardTitle>
              </CardHeader>
              <CardContent className="text-lg leading-relaxed space-y-4">
                <p>
                  El joropo es más que música; es la expresión del alma llanera, donde el 
                  extenso paisaje de sabanas se refleja en melodías que evocan el galope 
                  del ganado, el canto de los trabajadores y la inmensidad del cielo abierto. 
                  La incorporación del trombón en esta tradición representa la capacidad 
                  de adaptación y evolución de la cultura llanera.
                </p>
                
                <p>
                  Los municipios de Meta, Casanare, Arauca y Vichada han sido testigos de 
                  esta fusión instrumental, donde compositores y arreglistas han explorado 
                  las posibilidades del trombón para interpretar no solo las melodías 
                  tradicionales del joropo, sino también para crear nuevas composiciones 
                  que mantienen el espíritu llanero.
                </p>
                
                <p>
                  La técnica interpretativa del trombón en el joropo requiere virtuosismo 
                  técnico para igualar la velocidad y agilidad tradicional del cuatro y 
                  la bandola, pero también sensibilidad musical para capturar la esencia 
                  emotiva del canto llanero y la poesía de los llanos orientales.
                </p>
              </CardContent>
            </Card>

            {/* Types of Joropo */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Variedades del Joropo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Joropo Recio</h3>
                    <p className="text-sm text-muted-foreground">
                      Tempo rápido y enérgico, ideal para demostraciones técnicas del trombón
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Joropo Lento</h3>
                    <p className="text-sm text-muted-foreground">
                      Carácter melancólico, permite expresividad lírica del trombón
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <h3 className="font-semibold mb-2">Golpe</h3>
                    <p className="text-sm text-muted-foreground">
                      Variante festiva donde el trombón aporta color y ritmo al conjunto
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Joropo;