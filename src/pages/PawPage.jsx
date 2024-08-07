import { Paw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PawPage = () => {
  const [pawCount, setPawCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Paw className="h-24 w-24 text-purple-600 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Welcome to the Paw Page!</h1>
      <p className="text-xl text-gray-600 mb-6">Click the button to add more paw prints!</p>
      <Button 
        onClick={() => setPawCount(prev => prev + 1)}
        className="flex items-center space-x-2"
      >
        <Paw className="h-4 w-4" />
        <span>Add Paw Print</span>
      </Button>
      <div className="mt-8 flex flex-wrap justify-center max-w-md">
        {[...Array(pawCount)].map((_, index) => (
          <Paw key={index} className="h-6 w-6 text-purple-400 m-1" />
        ))}
      </div>
    </div>
  );
};

export default PawPage;
