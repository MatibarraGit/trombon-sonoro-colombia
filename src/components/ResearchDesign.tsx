import { Search } from "lucide-react";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ResearchDesign = () => {
  return (
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
            <Badge variant="secondary" className="mb-2">
              Cualitativo-Cuantitativo
            </Badge>
            <p className="text-sm text-muted-foreground">
              Metodología mixta que combina análisis musical cuantitativo con
              investigación etnomusicológica cualitativa
            </p>
          </div>

          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-2">Tipo de Estudio</h3>
            <Badge variant="secondary" className="mb-2">
              Descriptivo-Creativo
            </Badge>
            <p className="text-sm text-muted-foreground">
              Investigación descriptiva con componente creativo-compositivo que
              resulta en una obra musical original
            </p>
          </div>

          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold mb-2">Alcance</h3>
            <Badge variant="secondary" className="mb-2">
              Nacional-Regional
            </Badge>
            <p className="text-sm text-muted-foreground">
              Cobertura de las cuatro regiones musicales principales de Colombia
              con énfasis en géneros representativos
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">
            Métodos de Recolección de Datos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">
                Entrevistas Semiestructuradas
              </h4>
              <p className="text-sm text-muted-foreground">
                Conversaciones con músicos tradicionales, compositores y
                académicos especializados en folclor colombiano
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Análisis Documental</h4>
              <p className="text-sm text-muted-foreground">
                Revisión de partituras históricas, grabaciones y material
                bibliográfico especializado
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Observación Participante</h4>
              <p className="text-sm text-muted-foreground">
                Participación en ensayos y presentaciones de grupos folclóricos
                que incluyen trombón
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Análisis Musical</h4>
              <p className="text-sm text-muted-foreground">
                Transcripción y análisis armónico, rítmico y melódico de obras
                representativas
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
