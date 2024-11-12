// Home.js
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchData = async () => {
  const response = await fetch('https://demo.helirescueservice.com/api/home-index');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return zresponse.json();
};

function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['dataKey'], 
    queryFn: fetchData
});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

export default Home;
