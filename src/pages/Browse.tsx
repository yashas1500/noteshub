
import { useState } from "react";
import { notes, allSubjects } from "@/lib/data";
import NoteCard from "@/components/NoteCard";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Subject } from "@/lib/types";

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  
  // Filter notes based on search term and selected subject
  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          note.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === "all" || note.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Browse Notes</h1>
        
        {/* Search and Filter */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <Label htmlFor="search">Search</Label>
            <Input 
              id="search"
              type="text" 
              placeholder="Search by title or description..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="subject">Filter by Subject</Label>
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger id="subject">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subjects</SelectItem>
                {allSubjects.map(subject => (
                  <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Notes List */}
        {filteredNotes.length > 0 ? (
          <div className="notes-container">
            {filteredNotes.map(note => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No notes found matching your criteria.</p>
          </div>
        )}
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

export default Browse;
