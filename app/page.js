
  'use client'
  import Image from "next/image";
  import axios from 'axios'; 

  export default function Home() {
    

    
    // Add in the call trigger function here 
    const triggerLambdaFunction = async () => {
      try {
        const response = await axios({
          method: 'get', 
          // Function url
          url: 'https://dr4m7rrgfe7oufwf7p3cithzom0ulnfb.lambda-url.eu-central-1.on.aws/',
        
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    
    
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <button onClick={triggerLambdaFunction} > 
      Trigger!
      </button>


      </main>
    );
  }
