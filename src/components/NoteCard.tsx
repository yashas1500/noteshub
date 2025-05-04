
import { Note } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NoteCardProps {
  note: Note;
}

const NoteCard = ({ note }: NoteCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{note.title}</CardTitle>
          <Badge variant="outline">{note.subject}</Badge>
        </div>
        <CardDescription>{note.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-sm text-muted-foreground">
          <p>Uploaded by: {note.uploadedBy}</p>
          <p>Date: {note.uploadDate.toLocaleDateString()}</p>
          <p>Downloads: {note.downloads}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Download className="mr-2 h-4 w-4" /> Download Notes
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;
