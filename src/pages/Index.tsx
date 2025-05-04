
import { notes, noteRequests } from "@/lib/data";
import NoteCard from "@/components/NoteCard";
import RequestCard from "@/components/RequestCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Upload, Download, File } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  // Display only the most recent 3 notes
  const recentNotes = [...notes].sort((a, b) => 
    b.uploadDate.getTime() - a.uploadDate.getTime()
  ).slice(0, 3);
  
  // Display only open requests (not fulfilled)
  const openRequests = noteRequests.filter(req => !req.isFulfilled).slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="gradient-bg text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to NotesHub</h1>
          <p className="text-xl md:text-2xl mb-8">Share knowledge, collaborate, and excel in your studies</p>
          <div className="flex justify-center space-x-4 flex-wrap">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
              <Link to="/browse">
                <File className="mr-2 h-5 w-5" />
                Browse Notes
              </Link>
            </Button>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
              <Link to="/upload">
                <Upload className="mr-2 h-5 w-5" />
                Upload Notes
              </Link>
            </Button>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
              <Link to="/request">
                <Download className="mr-2 h-5 w-5" />
                Request Notes
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Recent Notes Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Recent Notes</h2>
          <Button variant="outline" asChild>
            <Link to="/browse">View All</Link>
          </Button>
        </div>
        <div className="notes-container">
          {recentNotes.map(note => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
      
      {/* Open Requests Section */}
      <div className="container mx-auto py-12 px-4 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Open Requests</h2>
          <Button variant="outline" asChild>
            <Link to="/request">View All</Link>
          </Button>
        </div>
        <div className="notes-container">
          {openRequests.map(request => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to contribute?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Help your fellow students by sharing your notes or fulfilling requests
        </p>
        <div className="flex justify-center space-x-4 flex-wrap">
          <Button size="lg" asChild>
            <Link to="/upload">Upload Your Notes</Link>
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 NotesHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
