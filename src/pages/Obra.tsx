import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Obra = () => {
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
                  
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}

export default Obra;