import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]); 
  const [search, setSearch] = useState(''); 

  useEffect(() => {
    const fetchData = async () => {
      const fakeData = [
        { id: 1, name: 'Frontend' },
        { id: 2, name: 'Programming language' },
        { id: 3, name: 'Database' },
        { id: 4, name: 'Introduction to engineering' },
        { id: 5, name: 'Calculus' },
        { id: 6, name: 'Algebra' },
        { id: 7, name: 'Kyrgyz language' },
        { id: 8, name: 'OOP' },
        { id: 9, name: 'Ethical hacking' },
        { id: 10, name: 'Physical education' },
      ];
      setData(fakeData);
    };
  
    fetchData();
  }, []);
  

  return (
    <div>
      <h1>Filtering Subjects</h1>
    </div>
  );
}
