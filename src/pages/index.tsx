import { useEffect, useRef } from "react";

export default function Home() {
  const inputKey = useRef<HTMLInputElement>(null);

    useEffect(() => {
      console.log("Dvd")
      inputKey.current?.focus();
    }, [])
    

  return (
    <div onPaste={(e)=>console.log('TODO: ON PASE FEATURE IN PROCESS')}  className="flex flex-col items-center justify-center main h-screen w-screen">
   
        <div className="flex items-center justify-center ">
            <input
            ref={inputKey}
              className=""
              id="imagesUpload"
            />
        </div>
    </div>
  )
}
