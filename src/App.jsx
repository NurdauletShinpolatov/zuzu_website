import './assets/_null.css';
import './assets/App.css';
import Branches from './components/Branches/Branches';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import About from './components/About/About';

// https://www.figma.com/file/u0IJT6bWYrz7t2wnkEXOju/Logo?type=design&node-id=376-18595&t=bevpLDGWgHzL25dT-0


// export const branches = [
//   {
//     id: "231",
//     name: "Зузу пицца Magic city",
//     address: "Magic City,ул. Бабура, 174, Ташкент, Узбекистан",
//     from: "09:00",
//     to: "03:00",
//   },
//   {
//     id: "7563",
//     name: "Зузу пицца Универсам",
//     address: "Махалля Акбаробод",
//     from: "12:00",
//     to: "03:00",
//   },
//   {
//     id: "43523",
//     name: "Зузу пицца Parkent",
//     address: "Махалля Акбаробод",
//     from: "10:00",
//     to: "00:00",
//   },
//   {
//     id: "254331",
//     name: "Зузу пицца Мукумий",
//     address: "Махалля Акбаробод",
//     from: "10:00",
//     to: "18:00",
//   },
//   {
//     id: "523452",
//     name: "Зузу пицца Сергели",
//     address: "Махалля Акбаробод",
//     from: "10:00",
//     to: "03:00",
//   },
//   {
//     id: "54067959",
//     name: "Зузу пицца Magic city",
//     address: "Magic City,ул. Бабура, 174, Ташкент, Узбекистан",
//     from: "09:00",
//     to: "03:00",
//   },
// ];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/branches' element={ <Branches /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
