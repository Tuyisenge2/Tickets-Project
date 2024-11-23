/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";


async function getTickets() {
//await new Promise(resolve => setTimeout(resolve,3000))
try{
const url=process.env.NEXT_PUBLIC_JSON_URL || ""
const res = await fetch(`${url}/tickets`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
   return res.json();
}catch(e){
console.log("server 500",e)
return [] ;
}

}


export default async function TicketsList() {
const Tickets = await getTickets();

  return( <div>
{
    Tickets.map( (item:any)=>(
        <div key={item.id} className="card my-5 ">
       <Link href={`/Tickets/${item.id}`}>
        <h3>{item.title}</h3>
        <p>{item.body.slice(0,200)}</p>
        <div className={`pill ${item.priority}`}>
            {item.priority} priority
        </div>
        </Link>
        </div>
    ))
}

{Tickets.length === 0 &&(
    <p className="text-center">
        there are no open tickets 
    </p>
)}


  </div>);
}
