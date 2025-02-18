
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResearchCardProps {
  title: string;
  source: string;
  credibilityScore: number;
  excerpt: string;
  tags: string[];
}

export const ResearchCard = ({
  title,
  source,
  credibilityScore,
  excerpt,
  tags,
}: ResearchCardProps) => {
  return (
    <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg animate-fadeIn glass-morphism">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-display font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{source}</p>
          </div>
          <Badge variant="secondary" className="ml-2">
            {credibilityScore}% Credibility
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed">{excerpt}</p>
      </CardContent>
    </Card>
  );
};
