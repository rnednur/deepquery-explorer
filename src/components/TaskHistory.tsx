
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Clock, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface HistoryItem {
  id: string;
  query: string;
  timestamp: string;
  mode: "hybrid" | "llm";
  depth: number;
}

interface TaskHistoryProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockHistory: HistoryItem[] = [
  {
    id: "1",
    query: "Impact of artificial intelligence on healthcare",
    timestamp: "2024-02-20T10:30:00Z",
    mode: "hybrid",
    depth: 5,
  },
  {
    id: "2",
    query: "Renewable energy developments in 2024",
    timestamp: "2024-02-19T15:45:00Z",
    mode: "llm",
    depth: 3,
  },
  // Add more mock items as needed
];

export function TaskHistory({ isOpen, onClose }: TaskHistoryProps) {
  return (
    <div
      className={cn(
        "fixed right-0 top-0 z-40 h-screen w-80 bg-background/95 border-l border-border/40 backdrop-blur transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="font-display font-semibold">Research History</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="p-4 space-y-4">
          {mockHistory.map((item) => (
            <div
              key={item.id}
              className="p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <p className="font-medium line-clamp-2">{item.query}</p>
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{new Date(item.timestamp).toLocaleDateString()}</span>
                <span className="px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">
                  {item.mode}
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-secondary/50">
                  Depth: {item.depth}
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
