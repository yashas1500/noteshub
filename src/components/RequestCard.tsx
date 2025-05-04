
import { NoteRequest } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RequestCardProps {
  request: NoteRequest;
}

const RequestCard = ({ request }: RequestCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{request.title}</CardTitle>
          <Badge variant="outline">{request.subject}</Badge>
        </div>
        <CardDescription>{request.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-sm text-muted-foreground">
          <p>Requested by: {request.requestedBy}</p>
          <p>Date: {request.requestDate.toLocaleDateString()}</p>
          <p>Status: {request.isFulfilled ? 'Fulfilled' : 'Open'}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={request.isFulfilled}>
          <Upload className="mr-2 h-4 w-4" /> 
          {request.isFulfilled ? 'Request Fulfilled' : 'Fulfill This Request'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RequestCard;
