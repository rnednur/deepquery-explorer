
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SearchInput = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative group animate-fadeIn">
        <Search className="absolute left-3 top-6 text-gray-400 group-focus-within:text-primary" />
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows={3}
          className="w-full pl-10 py-4 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="Enter your research topic..."
        />
        <Button
          type="submit"
          className="absolute right-2 bottom-2 rounded-xl"
          variant="secondary"
        >
          Search
        </Button>
      </div>
    </form>
  );
};
