import React, { useEffect, useState } from 'react';

export default function Q8_useEffect_fetch() {
  const [data1, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((req) => req.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <h1>Q8_useEffect_fetch</h1>
      <p>Use the useEffect hook to fetch and display data from an API when the component mounts</p>
      <ul className='text-start'>
        {data1 &&
          data1.map((v) => (
            <li key={v.id}>{v.name}</li>
          ))}
      </ul>
    </div>
  );
}
