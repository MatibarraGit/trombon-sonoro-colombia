import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useState } from 'react';

const Pasillo = () => {
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
        <section className="relative h-64 bg-gradient-accent text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 h-full flex items-center px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                Pasillo y Bambuco
              </h1>
              <p className="text-xl opacity-90">
                Región Andina - La melancolía y alegría de nuestras montañas
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
                  El pasillo y el bambuco constituyen dos de los géneros más representativos 
                  de la música andina colombiana. Ambos surgieron durante el siglo XIX como 
                  expresiones mestizas que combinaron elementos europeos, especialmente del 
                  vals y la contradanza, con ritmos y melodías autóctonas de la región andina.
                </p>
                
                <p>
                  El trombón encontró su lugar en estos géneros a través de las estudiantinas 
                  y bandas municipales de los pueblos andinos. Su capacidad expresiva y rango 
                  dinámico lo convirtieron en el instrumento ideal para interpretar las melodías 
                  nostálgicas del pasillo y los ritmos festivos del bambuco, aportando 
                  profundidad emocional y riqueza tímbrica a estas tradiciones musicales.
                </p>
                
                <p>
                  En el contexto andino, el trombón no solo ejecuta las melodías principales, 
                  sino que también desarrolla contracantos y armonizaciones que enriquecen 
                  la textura musical. Su sonoridad cálida evoca la atmósfera de los pueblos 
                  de montaña, donde la música es expresión de identidad y pertenencia cultural.
                </p>
                
                <blockquote className="border-l-4 border-accent pl-6 italic text-muted-foreground">
                  "En el pasillo y bambuco, el trombón canta las historias de nuestros pueblos, 
                  sus alegrías y nostalgias, sus fiestas y remembranzas."
                </blockquote>
              </CardContent>
            </Card>

            {/* Audio Player */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl flex items-center gap-3">
                  <Volume2 className="h-6 w-6 text-accent" />
                  Reproductor de Audio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">Pasillo Andino con Trombón - Muestra Musical</h3>
                      <p className="text-sm text-muted-foreground">Interpretación de la tradición andina colombiana</p>
                    </div>
                    <Button
                      size="lg"
                      onClick={togglePlayback}
                      className="rounded-full w-14 h-14 bg-accent hover:bg-accent/90"
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
                    <div className="bg-accent h-2 rounded-full w-1/2 transition-all duration-300" />
                  </div>
                  
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1:45</span>
                    <span>3:30</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    * El clip de audio será incorporado en la versión final del proyecto
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Comparison between Pasillo and Bambuco */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Pasillo vs Bambuco</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-accent">Pasillo</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Características Rítmicas</h4>
                        <p className="text-sm text-muted-foreground">Compás de 3/4, tempo moderato, carácter nostálgico</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Función del Trombón</h4>
                        <p className="text-sm text-muted-foreground">Melodías expresivas, fraseo legato, énfasis en la lírica</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Contexto Social</h4>
                        <p className="text-sm text-muted-foreground">Serenatas, reuniones íntimas, expresión romántica</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-accent">Bambuco</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Características Rítmicas</h4>
                        <p className="text-sm text-muted-foreground">Compás de 6/8, ritmo vivaz, carácter festivo</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Función del Trombón</h4>
                        <p className="text-sm text-muted-foreground">Contracantos rítmicos, acompañamiento armónico, destacados melódicos</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Contexto Social</h4>
                        <p className="text-sm text-muted-foreground">Festivales, danzas, celebraciones comunitarias</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regional Influence */}
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">Influencia Regional Andina</CardTitle>
              </CardHeader>
              <CardContent className="text-lg leading-relaxed space-y-4">
                <p>
                  La región andina colombiana, comprendida por los departamentos de Cundinamarca, 
                  Boyacá, Santander, Norte de Santander, Tolima, Huila, Quindío, Risaralda, 
                  Caldas y partes de Antioquia, ha sido cuna de una rica tradición musical 
                  que el trombón ha sabido interpretar y enriquecer.
                </p>
                
                <p>
                  En ciudades como Bogotá, Medellín, Manizales y Tunja, el trombón se incorporó 
                  tempranamente en las bandas municipales y conservatorios, donde músicos 
                  académicos comenzaron a desarrollar arreglos y composiciones que respetaran 
                  la esencia folclórica mientras exploraban nuevas posibilidades técnicas 
                  e interpretativas.
                </p>
                
                <p>
                  La topografía montañosa de la región andina ha influido metafóricamente en 
                  el estilo interpretativo del trombón en estos géneros: las melodías ascienden 
                  y descienden como los valles y cumbres, mientras que los acompañamientos 
                  armónicos crean la base sólida que representa la firmeza de las montañas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pasillo;