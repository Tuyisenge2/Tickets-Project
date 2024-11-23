import React, { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";
import Link from "next/link";

export default function Tickers() {
  return (
    <main>
      <nav className="flex justify-between">
        <div>
          <h1>Tickets</h1>
          <p>
            <small> currently open Tickets</small>
          </p>
        </div>
        <Link href='Tickets/create' className=" bg-blue-400 text-white p-2 rounded-xl">Add Ticket</Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </main>
  );
}
