import { useState } from 'react';
import useHttp from '../hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const {isLoading,error,enterTaskHandler} = useHttp("POST");

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} onAddTask = {props.onAddTask} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
