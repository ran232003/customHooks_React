import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/use-http';

function App() {

  const [tasks, setTasks] = useState([]);
  const {isLoading,error,enterTaskHandler} = useHttp("GET");


  useEffect(() => {
   // fetchTasks();
    enterTaskHandler(null,setTasks,null)
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={enterTaskHandler}
      />
    </React.Fragment>
  );
}

export default App;
