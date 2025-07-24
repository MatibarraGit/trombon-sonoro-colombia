import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useState } from 'react';

const Cumbia = () => {
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
        <section className="relative h-64 bg-gradient-primary text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 h-full flex items-center px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                Cumbia
              </h1>
              <p className="text-xl opacity-90">
                Costa Atlántica - El ritmo que conquistó el corazón de Colombia
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
                  La cumbia es uno de los géneros musicales más representativos de Colombia, 
                  originado en la región de la Costa Atlántica durante la época colonial. 
                  Este ritmo surge como resultado del mestizaje cultural entre los pueblos 
                  indígenas, africanos y españoles que convergieron en el territorio colombiano.
                </p>
                
                <p>
                  El trombón encontró su lugar en la cumbia durante el siglo XX, cuando las 
                  bandas pelayeras comenzaron a incorporar instrumentos de viento metal para 
                  enriquecer la sonoridad tradicional. Su timbre grave y expresivo complementa 
                  perfectamente los patrones rítmicos ancestrales, aportando profundidad armónica 
                  y melódica al conjunto.
                </p>
                
                <p>
                  En la interpretación contemporánea de la cumbia, el trombón desempeña roles 
                  tanto melódicos como armónicos, dialogando con la gaita, el acordeón y la 
                  percusión para crear texturas sonoras únicas que mantienen la esencia 
                  folclórica mientras abrazan la modernidad instrumental.
                </p>
                
                <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
                  "La cumbia con trombón representa la evolución natural de nuestras tradiciones, 
                  donde cada instrumento aporta su voz al coro ancestral de la Costa Atlántica."
                </blockquote>
              </CardContent>
            </Card>

            {/* Audio Player */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl flex items-center gap-3">
                  <Volume2 className="h-6 w-6 text-primary" />
                  Reproductor de Audio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">Cumbia con Trombón - Muestra Musical</h3>
                      <p className="text-sm text-muted-foreground">Interpretación tradicional de la Costa Atlántica</p>
                    </div>
                    <Button
                      size="lg"
                      onClick={togglePlayback}
                      className="rounded-full w-14 h-14"
                    >
                      {isPlaying ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </Button>
                  </div>
                  
                  {/* Audio Progress Bar Placeholder */}
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-1/3 transition-all duration-300" />
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>0:45</span>
                    <span>2:30</span>
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
                <CardTitle className="font-playfair text-2xl">Características Musicales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Estructura Rítmica</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Compás de 2/4 o 4/4</li>
                      <li>• Patrón sincopado característico</li>
                      <li>• Acentuación en tiempos débiles</li>
                      <li>• Polirritmia entre instrumentos</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Rol del Trombón</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Líneas melódicas contrapuntísticas</li>
                      <li>• Soporte armónico en registro grave</li>
                      <li>• Glissandos expresivos</li>
                      <li>• Respuesta a la melodía principal</li>
                    </ul>
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

export default Cumbia;