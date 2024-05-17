import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


export default function Home() {

  return (
    <main className="">
      👋 Hello world
      <Card className="">
        <CardHeader className="">header</CardHeader>
        <CardContent>
          <Button>test</Button>
        </CardContent>
      </Card>
    </main>
  );
}
