import React,{useState} from 'react'

const useHttp = (method)=>{

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const enterTaskHandler = async (payload,func,enteredValue) => {
        setIsLoading(true);
        setError(null);
        console.log("payload",payload);
        try {
         
          const response = await fetch(
            'https://reactpost-7bef8-default-rtdb.firebaseio.com/tasks.json',
            payload
          );
        
          if (!response.ok) {
            throw new Error('Request failed!');
          }
          
         
          const data = await response.json();
          if(method === "POST"){
          const generatedId = data.name; // firebase-specific => "name" contains generated id
          const createdTask = { id: generatedId, text: enteredValue };
    
          func(createdTask);
          } 
          if(method === "GET"){
            const loadedTasks = [];

            for (const taskKey in data) {
              loadedTasks.push({ id: taskKey, text: data[taskKey].text });
            }
            func(loadedTasks);
          }
        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        
        setIsLoading(false);
      };
      return {
        error:error,
        isLoading:isLoading,
        enterTaskHandler:enterTaskHandler           
      }
}

export default useHttp;