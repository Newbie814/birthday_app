import { useEffect } from 'react';
import { useState } from 'react';
import List from './components/List';

import data from './data';

const App = () => {
  const [people, setPeople] = useState(data);
  // useEffect(() => {
  //   setPeople(data);
  // }, []);

  return (
    <main>
      <section className='container'>
        <h2>Birthday Reminder - Starter, {people.length} birthdays today.</h2>
        <List people={people} />;
      </section>
      <div>
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
          style={{ marginBottom: '10px' }}
        >
          Clear All
        </button>
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople(data)}
        >
          reset
        </button>
      </div>
    </main>
  );
};
export default App;

// return (
//   <div className='App'>
//     <h2>Birthday Reminder - Starter</h2>
//     <span>{people.length} showing</span>
//     <ul className='people'>
//       {people.map((person) => {
//         const { id, name, age, image } = person;
//         return (
//           <li key={id}>
//             <img src={image} alt={name} style={{ width: '50px' }} />
//             <p>{name}</p>
//             <p>{age}</p>
//           </li>
//         );
//       })}
//     </ul>
//   </div>
// );
