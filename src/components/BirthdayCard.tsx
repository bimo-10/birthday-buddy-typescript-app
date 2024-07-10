"use client";
import React, { useState } from "react";
import { type People } from "@/lib/type";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function BirthdayCard({ peoples }: { peoples: People[] }) {
  const [persons, setPersons] = useState(peoples);

  const handleClear = () => {
    setPersons([]);
  };
  return (
    <>
      <Card className="w-[480px]">
        <CardHeader>
          <CardTitle>
            {persons.length !== 0
              ? `${persons.length} Birthdays Today`
              : "No Birthday Today"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {persons.map((person) => {
            return (
              <div key={person.name} className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={person.image} alt={person.name} />
                  <AvatarFallback>name</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-medium">{person.name}</h3>
                  <p>{person.age} years</p>
                </div>
              </div>
            );
          })}
          <Button
            onClick={handleClear}
            size="xs"
            className="w-full bg-fuchsia-500 my-2"
          >
            Clear All
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
