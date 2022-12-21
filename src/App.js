import './App.css';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import {useState,useEffect,useRef} from 'react'
import { Link } from "react-router-dom";


export default function App() {
  
  const[array,setArray]=useState([])
useEffect(()=>{
   axios.get("https://northwind.vercel.app/api/suppliers")
   .then(res=> setArray(res.data))

 },[])

 const inputRef=useRef()
 console.log(inputRef.current);

 useEffect(()=>{
  inputRef.current.focus()
 },[])

return (
      <>
      <nav>
        <input type='text' ref={inputRef} />
        <Link to={'about'}>About</Link>
        <Link to={'contact'}>Contact</Link>

      </nav>
      <div>Home</div>




    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Contact Name</TableCell>
            <TableCell align="right">Country</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">{user.companyName}</TableCell>
              <TableCell align="right">{user.contactName}</TableCell>
              <TableCell align="right">{user.address?.country}</TableCell>
           </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
