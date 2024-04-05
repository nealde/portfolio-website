"use client";

import { useRouter } from "next/navigation";

// import { tools } from "@/constants";



export default function HomePage() {
  const router = useRouter();

  return (
    <div className='grid grid-cols-1 place-items-center'>
      <div className='p-20 w-[100%] items-center'>
        <object width="70%" height="1200" data="/Neal_Dawson_Elli_Resume__2024.pdf" type="application/pdf" className="object-center post"></object>
      {/* <div style={{marginLeft:"27%"}}>
        <Document file={'/Neal_Dawson_Elli_Resume__2024.pdf'} >
          <Page pageNumber={1} />
        </Document>
      </div> */}
      </div>
    </div>
  );
}
