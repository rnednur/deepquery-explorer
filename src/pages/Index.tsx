
import { useState } from "react";
import { SearchInput } from "@/components/SearchInput";
import { ResearchCard } from "@/components/ResearchCard";

const mockResults = [
  {
    id: 1,
    title: "The Evolution of Artificial Intelligence",
    source: "MIT Technology Review",
    credibilityScore: 95,
    excerpt: "Recent advances in machine learning have revolutionized the field of artificial intelligence...",
    tags: ["AI", "Machine Learning", "Technology"],
  },
  {
    id: 2,
    title: "Understanding Climate Change",
    source: "Nature",
    credibilityScore: 98,
    excerpt: "Global temperature variations over the past century indicate significant changes...",
    tags: ["Climate", "Environment", "Science"],
  },
];

const Index = () => {
  const [searchResults, setSearchResults] = useState(mockResults);

  const handleSearch = (query: string) => {
    // In a real implementation, this would make an API call
    console.log("Searching for:", query);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Deep Research Tool
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Discover comprehensive insights through advanced research
          </p>
          <SearchInput onSearch={handleSearch} />
        </div>

        <div className="grid gap-6 mt-12">
          {searchResults.map((result) => (
            <ResearchCard key={result.id} {...result} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
