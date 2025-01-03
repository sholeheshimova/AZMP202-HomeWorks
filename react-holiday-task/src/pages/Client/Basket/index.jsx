import React, { useContext } from 'react'
import { BasketContext } from '../../../context/BasketContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const Basket = () => {
  const {basket , removeBasketItem, increaseBasketCount,decreaseBasketCount,clearBasket} = useContext(BasketContext)
  return (
    <>
    {basket.length === 0 ? <h2>Basket boshdur</h2> : 
 <TableContainer component={Paper}>
 <Table sx={{ minWidth: 650 }} aria-label="simple table">
   <TableHead>
     <TableRow>
       <TableCell>Photo</TableCell>
       <TableCell align="right">Title</TableCell>
       <TableCell align="right">Price</TableCell>
       <TableCell align="right">Increase</TableCell>
       <TableCell align="right">Quantity</TableCell>
       <TableCell align="right">Decrease</TableCell>
       <TableCell align="right">Remove</TableCell>
     </TableRow>
   </TableHead>
   <TableBody>
     {basket.map((p) => (
       <TableRow
         key={p.id}
         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
       >
         <TableCell component="th">
           <img src={p.image} alt=""  width={100}/>
         </TableCell>
         <TableCell align="right">{p.title}</TableCell>
         <TableCell align="right">{p.price}</TableCell>
         <TableCell align="right"><Button onClick={() => {increaseBasketCount(p)}}>+</Button></TableCell>
         <TableCell align="right">{p.quantity}</TableCell>

         <TableCell align="right"><Button onClick={() => {decreaseBasketCount(p)}}>-</Button></TableCell>
         <TableCell align="right"><Button onClick={() =>{removeBasketItem(p)}}>Remove</Button></TableCell>
       </TableRow>
     ))}
   </TableBody>
 </Table>
</TableContainer>
}

    
   {/* {basket.length === 0 ? <h2>Basket boshdur</h2> : 
    <table>
    
    <tbody>
      {basket.map((p) => {
        return <tr key={p.id}>
          <td><img src={p.image} alt={p.title}  width={100}/></td>
          <td>{p.title}</td>
          <td>{p.price}</td>
        </tr>
      })}
    </tbody>
  </table>
   } */}
    
    </>
  )
}

export default Basket