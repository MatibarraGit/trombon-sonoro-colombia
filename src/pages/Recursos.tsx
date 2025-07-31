import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BookOpen, ExternalLink, FileText, Music, Globe } from 'lucide-react';

const Recursos = () => {
  return (
    <main className="md:ml-72">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-br from-slate-900 to-slate-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Recursos y Referencias
            </h1>
            <p className="text-xl opacity-90">
              Bibliografía, fuentes y recursos utilizados en la investigación
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Libros y Textos Académicos */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="font-playfair text-3xl font-bold">Libros y Textos Académicos</h2>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">Historia del Trombón en Colombia</h3>
                        <p className="text-muted-foreground">Pérez, C. (2018)</p>
                        <p className="text-sm mt-2">Editorial Universidad Nacional. Bogotá, Colombia.</p>
                      </div>
                      <Badge variant="secondary">Libro</Badge>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Estudio comprensivo sobre la evolución histórica del trombón en el contexto musical colombiano desde el siglo XIX hasta la actualidad.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">Música Tradicional y Folclor Colombiano</h3>
                        <p className="text-muted-foreground">González, M. A. (2020)</p>
                        <p className="text-sm mt-2">Ediciones Culturales. Medellín, Colombia.</p>
                      </div>
                      <Badge variant="secondary">Libro</Badge>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Análisis detallado de los ritmos tradicionales colombianos y su instrumentación característica.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Artículos y Revistas */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="font-playfair text-3xl font-bold">Artículos y Revistas</h2>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">El Trombón en la Cumbia: Análisis Armónico</h3>
                        <p className="text-muted-foreground">López, J. (2019)</p>
                        <p className="text-sm mt-2">Revista de Musicología Colombiana, Vol. 15, No. 2, pp. 45-62.</p>
                      </div>
                      <Badge variant="outline">Artículo</Badge>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Estudio específico sobre el papel del trombón en las agrupaciones de cumbia tradicional y moderna.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver artículo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">Instrumentación en el Currulao del Pacífico</h3>
                        <p className="text-muted-foreground">Moreno, A. & Silva, R. (2021)</p>
                        <p className="text-sm mt-2">Boletín de Etnomusicología, No. 8, pp. 23-38.</p>
                      </div>
                      <Badge variant="outline">Artículo</Badge>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Investigación sobre la incorporación de instrumentos de viento en las tradiciones musicales del Pacífico colombiano.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver artículo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recursos Musicales */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Music className="h-6 w-6 text-primary" />
              <h2 className="font-playfair text-3xl font-bold">Recursos Musicales</h2>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">Archivo Musical Biblioteca Nacional</h3>
                        <p className="text-muted-foreground">Colección de partituras tradicionales</p>
                        <p className="text-sm mt-2">Bogotá, Colombia</p>
                      </div>
                      <Badge variant="secondary">Archivo</Badge>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Colección histórica de partituras y documentos musicales colombianos de los siglos XIX y XX.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visitar archivo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">Discografía Tradicional Colombiana</h3>
                        <p className="text-muted-foreground">Centro de Documentación Musical</p>
                        <p className="text-sm mt-2">Universidad Javeriana</p>
                      </div>
                      <Badge variant="secondary">Discografía</Badge>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Compilación de grabaciones históricas de música tradicional colombiana con instrumentación de viento.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Explorar colección
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recursos Web */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="font-playfair text-3xl font-bold">Recursos en Línea</h2>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">Portal de Música Tradicional Colombiana</h3>
                        <p className="text-muted-foreground">Ministerio de Cultura de Colombia</p>
                        <p className="text-sm mt-2">www.musicatradicional.gov.co</p>
                      </div>
                      <Badge variant="outline">Web</Badge>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Plataforma oficial con información, audios y documentos sobre la música tradicional de Colombia.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visitar sitio
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">International Trombone Association</h3>
                        <p className="text-muted-foreground">Base de datos de investigación</p>
                        <p className="text-sm mt-2">www.trombone.org</p>
                      </div>
                      <Badge variant="outline">Web</Badge>
                    </div>
                    <Separator />
                    <p className="text-sm text-muted-foreground">
                      Recursos académicos y técnicos sobre el trombón a nivel internacional, incluyendo estudios sobre música folclórica.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visitar sitio
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Nota sobre referencias */}
          <section className="bg-muted/30 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Nota sobre las Referencias</h3>
            <p className="text-sm text-muted-foreground">
              Esta bibliografía representa una selección de las fuentes más relevantes utilizadas en la investigación. 
              Las referencias completas siguen el formato APA 7ª edición. Para acceder a los textos completos o solicitar 
              información adicional, puede contactar al autor a través de los canales institucionales correspondientes.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Recursos;