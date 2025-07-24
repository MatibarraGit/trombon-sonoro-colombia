import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useState } from 'react';

const Currulao = () => {
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
        <section className="relative h-64 bg-gradient-secondary text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 h-full flex items-center px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                Currulao
              </h1>
              <p className="text-xl opacity-90">
                Costa Pacífica - La ancestralidad africana en sonoridad moderna
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
                  El currulao es una expresión musical emblemática del litoral pacífico colombiano, 
                  especialmente de los departamentos de Chocó, Valle del Cauca, Cauca y Nariño. 
                  Este género musical tiene sus raíces profundamente arraigadas en la tradición 
                  africana, traída por los esclavos durante la época colonial.
                </p>
                
                <p>
                  La incorporación del trombón en el currulao representa una evolución fascinante 
                  del género, donde la sonoridad metálica del instrumento se funde con los tambores 
                  ancestrales como la cununú, el bombo y los guasás. Esta fusión crea un diálogo 
                  único entre la tradición y la modernidad, manteniendo la esencia espiritual del 
                  ritual musical afrodescendiente.
                </p>
                
                <p>
                  En el contexto del currulao, el trombón aporta nuevas dimensiones armónicas y 
                  melódicas, enriqueciendo las líneas vocales tradicionales y creando contracantos 
                  que complementan la marimba de chonta. Su timbre grave y expresivo evoca la 
                  profundidad de los cantos ancestrales del Pacífico.
                </p>
                
                <blockquote className="border-l-4 border-secondary pl-6 italic text-muted-foreground">
                  "El currulao con trombón es el encuentro de dos mundos sonoros: la ancestralidad 
                  africana y la modernidad instrumental, creando nuevas formas de expresión cultural."
                </blockquote>
              </CardContent>
            </Card>

            {/* Audio Player */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl flex items-center gap-3">
                  <Volume2 className="h-6 w-6 text-secondary" />
                  Reproductor de Audio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">Currulao con Trombón - Muestra Musical</h3>
                      <p className="text-sm text-muted-foreground">Tradición del Pacífico Colombiano</p>
                    </div>
                    <Button
                      size="lg"
                      onClick={togglePlayback}
                      className="rounded-full w-14 h-14 bg-secondary hover:bg-secondary/90"
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
                    <div className="bg-secondary h-2 rounded-full w-2/5 transition-all duration-300" />
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1:12</span>
                    <span>3:05</span>
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
                <CardTitle className="font-playfair text-2xl">Características del Currulao</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Instrumentación Tradicional</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Marimba de chonta</li>
                      <li>• Bombo (tambor grave)</li>
                      <li>• Cununú (tambor agudo)</li>
                      <li>• Guasás (idiófonos)</li>
                      <li>• Voces (coro responsorial)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 text-lg">Aporte del Trombón</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Armonización de melodías vocales</li>
                      <li>• Contracantos instrumentales</li>
                      <li>• Soporte rítmico-armónico</li>
                      <li>• Efectos tímbricos (glissandos)</li>
                      <li>• Puente entre tradición y modernidad</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Context */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Contexto Ritual y Social</CardTitle>
              </CardHeader>
              <CardContent className="text-lg leading-relaxed">
                <p>
                  El currulao trasciende lo puramente musical para convertirse en una expresión 
                  ritual que conecta a las comunidades afrodescendientes con sus ancestros. 
                  En este contexto, la incorporación del trombón no altera la función social 
                  del género, sino que la enriquece con nuevas posibilidades expresivas.
                </p>
                
                <p className="mt-4">
                  La práctica del currulao con trombón se ha desarrollado especialmente en 
                  contextos académicos y de proyección folclórica, donde músicos formados 
                  buscan crear puentes entre la tradición oral y la música escrita, 
                  preservando la esencia mientras exploran nuevas sonoridades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Currulao;