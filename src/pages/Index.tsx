import { useState } from "react";
import { SearchInput } from "@/components/SearchInput";
import { SearchParameters } from "@/components/SearchParameters";
import { ResultsTabs } from "@/components/ResultsTabs";
import { Header } from "@/components/Header";
import { TaskHistory } from "@/components/TaskHistory";
import { Button } from "@/components/ui/button";
import { History } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const mockResults = [
  {
    id: 1,
    title: "The Evolution of Artificial Intelligence",
    source: "MIT Technology Review",
    credibilityScore: 95,
    excerpt: "Recent advances in machine learning have revolutionized the field of artificial intelligence...",
    tags: ["AI", "Machine Learning", "Technology"],
    summary: "AI has evolved significantly over the past decade, with major breakthroughs in machine learning and neural networks leading to practical applications in various industries.",
    analysis: "The field of artificial intelligence has seen exponential growth, particularly in areas of deep learning and natural language processing...",
  },
  {
    id: 2,
    title: "Understanding Climate Change",
    source: "Nature",
    credibilityScore: 98,
    excerpt: "Global temperature variations over the past century indicate significant changes...",
    tags: ["Climate", "Environment", "Science"],
    summary: "Recent climate data shows accelerating global temperature changes with significant implications for ecosystems and human societies.",
    analysis: "Analysis of long-term climate data reveals consistent patterns of warming across different regions...",
  },
];

const Index = () => {
  const [searchResults, setSearchResults] = useState(mockResults);
  const [searchMode, setSearchMode] = useState<"hybrid" | "llm">("hybrid");
  const [researchDepth, setResearchDepth] = useState(2);
  const [researchBreadth, setResearchBreadth] = useState(4);
  const [customLLM, setCustomLLM] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [followUpQuestions, setFollowUpQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);

  const handleSearch = (query: string) => {
    setFollowUpQuestions([
      "Can you provide more details about the specific use case?",
      "What metrics are most important for your evaluation?",
      "Are there any specific constraints or requirements?",
    ]);
    setCurrentQuestion(0);
    console.log("Searching for:", query, {
      mode: searchMode,
      depth: researchDepth,
      breadth: researchBreadth,
      customLLM,
    });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-secondary/20">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fadeIn">
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => setIsHistoryOpen(!isHistoryOpen)}
            >
              <History className="h-4 w-4" />
              History
            </Button>
          </div>
          <h1 className="text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Deep Research Tool
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Discover comprehensive insights through advanced research
          </p>
          <SearchInput onSearch={handleSearch} />
          <SearchParameters
            mode={searchMode}
            depth={researchDepth}
            breadth={researchBreadth}
            customLLM={customLLM}
            onModeChange={setSearchMode}
            onDepthChange={setResearchDepth}
            onBreadthChange={setResearchBreadth}
            onCustomLLMChange={setCustomLLM}
          />
        </div>

        {currentQuestion !== null && (
          <Card className="mb-8 animate-fadeIn">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Follow-up Question {currentQuestion + 1}/{followUpQuestions.length}</h3>
              <p className="text-muted-foreground mb-4">{followUpQuestions[currentQuestion]}</p>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentQuestion(null)}
                >
                  Skip
                </Button>
                <Button
                  onClick={() => {
                    if (currentQuestion < followUpQuestions.length - 1) {
                      setCurrentQuestion(currentQuestion + 1);
                    } else {
                      setCurrentQuestion(null);
                    }
                  }}
                >
                  {currentQuestion < followUpQuestions.length - 1 ? "Next" : "Finish"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {searchResults.length > 0 && (
          <ResultsTabs results={searchResults} />
        )}
      </main>

      <TaskHistory
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
      />
    </div>
  );
};

export default Index;
