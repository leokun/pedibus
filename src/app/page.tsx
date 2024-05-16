"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { useEffect, useState } from "react";

function usePrismaPulse() {
  const [events, setEvents] = useState([]);

  prisma.user.subscribe().then((event) => {
    setEvents((previousEvents) => [...previousEvents, event]);
  });

  const stop = () => {};

  return { events, stop };
}
export default function Home() {
  const { events, stop } = usePrismaPulse();

  useEffect(() => {
    console.log(events);

    return stop();
  }, [events, stop]);

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
