import React,{ useEffect} from 'react'
import BarGraph from '../components/BarGraph'
import PieCh from '../components/PieCh'
import './Dashboard.css'

const Dashboard = ({history}) => {
   const name = localStorage.getItem("name")
   useEffect(()=>{
      if(!name){
         history.push('/')
      }
   })
   return (
      <>
      <div className="dashboard-container container">
         <h3>Dashboard Welcome {name}</h3>  
         <hr />
      <div className="chart">
      <span className="col"><BarGraph/></span>
      <span className="col"><PieCh /></span>
      </div>
      </div>
      </>
   )
}

export default Dashboard
