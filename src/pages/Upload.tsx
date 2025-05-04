
import { useState } from "react";
import { allSubjects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload as UploadIcon, File } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!title || !subject || !description || !file) {
      toast({
        title: "Error",
        description: "Please fill in all fields and upload a file.",
        variant: "destructive",
      });
      return;
    }
    
    // Here we would normally upload the file to a server
    // For now, just show success message
    toast({
      title: "Success!",
      description: "Your notes have been uploaded successfully.",
    });
    
    // Reset form
    setTitle("");
    setSubject("");
    setDescription("");
    setFile(null);
    
    // Reset the file input
    const fileInput = document.getElementById("file-upload") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Upload Notes</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Share Your Knowledge</CardTitle>
              <CardDescription>
                Upload your notes to help fellow students. Make sure your notes are clear,
                well-organized, and appropriate for sharing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Note Title</Label>
                  <Input
                    id="title"
                    placeholder="E.g., Calculus I - Integration Techniques"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select value={subject} onValueChange={setSubject}>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {allSubjects.map(subject => (
                        <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Briefly describe what your notes cover..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="file-upload">Upload File</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors">
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.md"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                      {file ? (
                        <>
                          <File className="h-12 w-12 text-green-500 mb-2" />
                          <p className="text-sm font-medium">{file.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </>
                      ) : (
                        <>
                          <UploadIcon className="h-12 w-12 text-muted-foreground mb-2" />
                          <p className="font-medium">Click to upload or drag and drop</p>
                          <p className="text-sm text-muted-foreground">
                            PDF, DOC, DOCX, PPT, PPTX, TXT, MD (Max 10MB)
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                </div>
                
                <Button type="submit" className="w-full">
                  <UploadIcon className="mr-2 h-4 w-4" /> Upload Notes
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">File Format</h3>
                  <p className="text-sm text-muted-foreground">
                    Please upload files in PDF, DOC, DOCX, PPT, PPTX, TXT, or MD format only.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">File Size</h3>
                  <p className="text-sm text-muted-foreground">
                    Maximum file size allowed is 10MB.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Content Policy</h3>
                  <p className="text-sm text-muted-foreground">
                    Only upload notes that you have created or have permission to share.
                    Do not upload copyrighted material without permission.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Quality Guidelines</h3>
                  <p className="text-sm text-muted-foreground">
                    Ensure your notes are legible, well-organized, and provide value to others.
                    Include clear headings, sections, and page numbers where applicable.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
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

export default Upload;
