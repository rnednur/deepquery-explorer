
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Result {
  id: number;
  title: string;
  source: string;
  credibilityScore: number;
  excerpt: string;
  tags: string[];
  summary?: string;
  analysis?: string;
}

interface ResultsTabsProps {
  results: Result[];
}

export const ResultsTabs = ({ results }: ResultsTabsProps) => {
  return (
    <Tabs defaultValue="summary" className="w-full mt-8">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="analysis">Analysis</TabsTrigger>
        <TabsTrigger value="sources">Sources</TabsTrigger>
        <TabsTrigger value="path">Research Path</TabsTrigger>
      </TabsList>
      
      <TabsContent value="summary">
        <Card>
          <CardContent className="p-6 space-y-4">
            {results.map((result) => (
              <div key={result.id} className="space-y-2">
                <h3 className="text-lg font-semibold">{result.title}</h3>
                <p className="text-muted-foreground">{result.summary || result.excerpt}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="analysis">
        <Card>
          <CardContent className="p-6">
            <div className="prose dark:prose-invert max-w-none">
              {results.map((result) => (
                <div key={result.id} className="mb-8">
                  <h3>{result.title}</h3>
                  <p>{result.analysis || "Detailed analysis coming soon..."}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="sources">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {results.map((result) => (
                <div key={result.id} className="flex items-start justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{result.source}</h4>
                    <p className="text-sm text-muted-foreground">{result.title}</p>
                  </div>
                  <Badge variant="secondary">{result.credibilityScore}% Credible</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="path">
        <Card>
          <CardContent className="p-6 text-center text-muted-foreground">
            Research path visualization coming soon...
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
