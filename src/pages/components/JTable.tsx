import { useState, useEffect } from "react";
import axios, {AxiosResponse} from 'axios';
import './JTable.css';

interface ITableDatas {
    id:string,
    rank: string,
     name: string,
     price: string,
     updateData:(arg:ITableDatas) => void
   } 

   const JTable = () => {

    const hnames = [ 
        {id:"1", name:"Rank"}, 
        {id:"2", name:"Name"}, 
        {id:"3", name:"Price"}];
    
    const [tabl, setTabl] = useState<ITableDatas[]>([]);

        useEffect(() => {
            async function fetchTable() {
                try{

                    const response:AxiosResponse = await axios.get<ITableDatas>('http://localhost:3001/')
                        //console.log(response.config)
                        setTabl(response.data)

                     const getTable = await fetch('http://localhost:3001/')
                    
                    const responseJson:ITableDatas[] = await getTable.json()
                    setTabl(responseJson)
 
                }catch (err) {
                    console.log(err)
                }
               
            }
            fetchTable()
            
        }, [])
    
    return (  
            
            <table id='currency'>
              <thead>
                  <tr>
                    {hnames.map( hname => <th key={hname.id}>{hname.name}</th>)}
                  </tr>
              </thead>
              <tbody>
              {tabl.map( tabl => (<tr key={tabl.id}>
                <td>{tabl.rank}</td>
                <td>{tabl.name}</td>
                <td>{parseInt(tabl.price)}</td>
                </tr>))}
              </tbody>
            </table>
           
        )
    

   }

   export default JTable;