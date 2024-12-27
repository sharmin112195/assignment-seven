import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import ButtonContent from './components/ButtonContent/ButtonContent'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  const [balance,setBalance] = useState(0)
  const [selectedPlayer,setSelectedPlayer] = useState([])
  const[isActive,setIsActive] = useState({
    cart:true,
    status:"cart"
  })
  const handleIsActive = (status) =>{
    if (status == "cart"){
      setIsActive({
        cart:true,
        status:"cart"
      })
    }
    else{
      setIsActive({
        cart:false,
        status:"not-cart"
      })
    }
  }
// player select and select card remove use button
  
 const handleSelectedPlayer = (singlePlayer) =>{
  console.log(singlePlayer)
  const isExist = selectedPlayer.find((p)=>p.id==singlePlayer.id);
  if(isExist){
    toast.error("Already Player is Connected");
    return false
  }
  else{
    
    if(balance<singlePlayer.price){
      toast.error("Not Enough Money");
      return false
    }
   else if (selectedPlayer.length>=6){
    toast.error("Conditionally Preferred Player is finished");
      return false
   }
    const newPlayer = [...selectedPlayer,singlePlayer]
    setSelectedPlayer(newPlayer)
    const newPrice = balance - singlePlayer.price
    setBalance(newPrice)
    toast("Successfully selected players");
    

  }
  
 }
 const handleDelete = (id) =>{
  const newPlayer = selectedPlayer.filter((p)=>p.id!=id)
  setSelectedPlayer(newPlayer)
  toast("Successfully Delete players");
 }

  const handleFreeCredit = () =>{
    const newBalance = balance + 20000;
    setBalance(newBalance)
    toast("Successfully Adding Money");
  }

 
  
  return (
    <>
      <div>
      
      <Header balance={balance} handleFreeCredit={handleFreeCredit}></Header>
      <Banner handleFreeCredit={handleFreeCredit}></Banner>
      <ButtonContent handleIsActive={handleIsActive} isActive={isActive} handleSelectedPlayer={handleSelectedPlayer} selectedPlayer={selectedPlayer} handleDelete={handleDelete} ></ButtonContent>
       <Footer></Footer> 
     
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="light"
        transition={Bounce}
      />
      </div>
    </>
  )
}

export default App

