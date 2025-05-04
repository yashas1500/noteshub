
import { useState } from "react";
import { allSubjects, noteRequests } from "@/lib/data";
import Navbar from "@/components/Navbar";
import RequestCard from "@/components/RequestCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Request = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();
  
  // Filter requests to show only open ones
  const openRequests = noteRequests.filter(req => !req.isFulfilled);
  const fulfilledRequests = noteRequests.filter(req => req.isFulfilled);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!title || !subject || !description || !name) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Here we would normally send the request to a server
    // For now, just show success message
    toast({
      title: "Request Submitted!",
      description: "Your note request has been posted successfully.",
    });
    
    // Reset form
    setTitle("");
    setSubject("");
    setDescription("");
    setName("");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Note Requests</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Request Notes</CardTitle>
              <CardDescription>
                Need specific notes? Submit a request and let other students help you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Request Title</Label>
                  <Input
                    id="title"
                    placeholder="E.g., Organic Chemistry - Reaction Mechanisms"
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
                  <Label htmlFor="description">Describe what you're looking for</Label>
                  <Textarea
                    id="description"
                    placeholder="Be specific about what content you need..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tips for Effective Requests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">Be Specific</h3>
                  <p className="text-sm text-muted-foreground">
                    Clearly describe what notes you need, including specific topics, chapters, or concepts.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Provide Context</h3>
                  <p className="text-sm text-muted-foreground">
                    Mention your course level, textbook being used, or specific professor if relevant.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Be Realistic</h3>
                  <p className="text-sm text-muted-foreground">
                    Request notes that others are likely to have. Very niche or specialized content may take longer to fulfill.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Check Existing Notes</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse our collection first to see if what you need already exists.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Current Requests</h2>
          
          <Tabs defaultValue="open" className="mb-6">
            <TabsList>
              <TabsTrigger value="open">Open Requests ({openRequests.length})</TabsTrigger>
              <TabsTrigger value="fulfilled">Fulfilled Requests ({fulfilledRequests.length})</TabsTrigger>
            </TabsList>
            <TabsContent value="open" className="mt-6">
              {openRequests.length > 0 ? (
                <div className="notes-container">
                  {openRequests.map(request => (
                    <RequestCard key={request.id} request={request} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No open requests at the moment.</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="fulfilled" className="mt-6">
              {fulfilledRequests.length > 0 ? (
                <div className="notes-container">
                  {fulfilledRequests.map(request => (
                    <RequestCard key={request.id} request={request} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">No fulfilled requests yet.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
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

export default Request;
