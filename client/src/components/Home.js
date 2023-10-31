
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Card from './Card';
// import List from './List';
// import Day from './Day';
// import Location from './Location';

// const Home = () => {
//     const [showList, setShowList] = React.useState(true)

//     const hideList = () => {
//         setShowList(false)
//     }

//     return (
//         <div>
//             {showList && <List />}
//             <Day hideList = {hideList} />
//             <Location hideList ={hideList} />
//         </div>
//     )
// }

// const Day1 = ({ hideList }) => {
//     const [selectedDay, setSelectedDay] = useState('');
//     const [results, setResults] = useState([]);
  
//     useEffect(() => {
//       // Initial data fetch when the component mounts
//       searchDatabase();
//     }, [selectedDay]);
  
//     const handleDayChange = (e) => {
//       setSelectedDay(e.target.value);
//     };
  
//     const searchDatabase = async () => {
//       try {
//         const response = await axios.get('/api/search-day', {
//           params: { search: selectedDay },
//         });
//         setResults(response.data);
//         hideList();
//       } catch (error) {
//         console.error('Error searching database:', error);
//       }
//     };
  
//     return (
//         <div>
//           <label htmlFor="day"></label>
//           <select
//             id="day"
//             name="day"
//             onChange={handleDayChange}
//             value={selectedDay}
//           >
//             <option value="">Select a day</option>
//             <option value="monday">Monday</option>
//             <option value="tuesday">Tuesday</option>
//             <option value="wednesday">Wednesday</option>
//             <option value="thursday">Thursday</option>
//             <option value="friday">Friday</option>
//             <option value="saturday">Saturday</option>
//             <option value="sunday">Sunday</option>
//           </select>
//           <button onClick={searchDatabase}>Search</button>
//           <div className="card-list">
//           {results.map((card, index) => (
//             <div key={index}>
//               <Card
//                 key={card._id}
//                 name={card.name}
//                 city={card.city}
//                 price={card.price}
//                 deals={card.deals}
//                 altDeals={card.altDeals}
//                 altAltDeals={card.altAltDeals}
//               />
//             </div>
//           ))}
//         </div>
//         </div>
//       );
//     };
  
//   const Location1 = ({ hideList }) => {
//     const [city, setCity] = useState('');
//     const [results, setResults] = useState([]);
  
//     useEffect(() => {
//       // Initial data fetch when the component mounts
//       searchDatabase();
//     }, [city]);
  
//     const handleLocationChange = (e) => {
//       setCity(e.target.value);
//     };
  
//     const searchDatabase = async () => {
//       try {
//         const response = await axios.get('/api/search-location', {
//           params: { city },
//         });
//         setResults(response.data);
//         hideList();
//       } catch (error) {
//         console.error('Error searching database:', error);
//       }
//     };
  
//     const Location = ({ hideList }) => {
//         const [city, setCity] = useState('');
//         const [results, setResults] = useState([]);
      
//         useEffect(() => {
//           // Initial data fetch when the component mounts
//           searchDatabase();
//         }, [city]);
      
//         const handleLocationChange = (e) => {
//           setCity(e.target.value);
//         };
      
//         const searchDatabase = async () => {
//           try {
//             const response = await axios.get('/api/search-location', {
//               params: { city },
//             });
//             setResults(response.data);
//             hideList();
//           } catch (error) {
//             console.error('Error searching database:', error);
//           }
//         };
      
//         return (
//             <div>
//               <label htmlFor="city"></label>
//               <select
//                 id="city"
//                 name="city"
//                 onChange={handleLocationChange}
//                 value={city}
//               >
//                 <option value="">Select a Location</option>
//                 <option value="Boston">Boston</option>
//                 <option value="Cambridge">Cambridge</option>
//                 <option value="Dorchester">Dorchester</option>
//                 <option value="Somerville">Somerville</option>
//                 <option value="Medford">Medford</option>
//                 <option value="Arlington">Arlington</option>
//                 <option value="Watertown">Watertown</option>
//               </select>
//               <button onClick={searchDatabase}>Search</button>
//               <div className="card-list">
//                 {results.map((result, index) => (
//                   <div key={index}>
//                     <Card
//                       key={result._id}
//                       name={result.name}
//                       city={result.city}
//                       price={result.price}
//                       deals={result.deals}
//                       altDeals={result.altDeals}
//                       altAltDeals={result.altAltDeals}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           );
//         };

// export default Home