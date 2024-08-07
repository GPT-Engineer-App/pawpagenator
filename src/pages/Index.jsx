import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Paw } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Paw-some App</h1>
        <p className="text-xl text-gray-600 mb-6">Discover the cuteness of paw prints!</p>
        <Link to="/paw">
          <Button className="flex items-center space-x-2">
            <Paw className="h-4 w-4" />
            <span>Go to Paw Page</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
