/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import React from "react";

async function getTicket(id: string) {
  const url = process.env.NEXT_PUBLIC_JSON_URL || "";
  const res = await fetch(`${url}/tickets/${id}`,
  // const res = await fetch(`http://localhost:4000/tickets/${id}`,
     {
    next: {
      revalidate: 60, // means it will refetch after this period of time
    },
  });
  if (!res.ok) {
    notFound();
  }
  return res.json();
}
// in file it is better to  export one functions
export default async function TicketsDetails({ params }: any) {
  const { id } = await params;
  const Ticket = await getTicket(id);
  return (
    <main>
      <nav>
        <h2>Ticket Details </h2>
      </nav>

      <div className='card'>
        <h3>{Ticket.title}</h3>
        <small> created by {Ticket.user_email}</small>
        <p>{Ticket.body}</p>
        <div className={`pill ${Ticket.priority}`}>
          {Ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
