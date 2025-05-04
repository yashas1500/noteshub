
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { Book, Upload, File, Download } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Book className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">NotesHub</span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            <Button 
              variant={location.pathname === "/" ? "default" : "ghost"} 
              asChild
            >
              <Link to="/">Home</Link>
            </Button>
            <Button 
              variant={location.pathname === "/browse" ? "default" : "ghost"} 
              asChild
            >
              <Link to="/browse">
                <File className="mr-2 h-4 w-4" />
                Browse Notes
              </Link>
            </Button>
            <Button 
              variant={location.pathname === "/request" ? "default" : "ghost"} 
              asChild
            >
              <Link to="/request">
                <Download className="mr-2 h-4 w-4" />
                Request Notes
              </Link>
            </Button>
            <Button 
              variant={location.pathname === "/upload" ? "default" : "ghost"} 
              asChild
            >
              <Link to="/upload">
                <Upload className="mr-2 h-4 w-4" />
                Upload Notes
              </Link>
            </Button>
          </div>
          
          <div className="md:hidden">
            {/* Mobile menu button would go here */}
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
