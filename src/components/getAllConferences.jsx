import { useEffect, useState } from "react";
import personFacade from "../personFacade";

const GetAllConferences = () => {
    const [confs,setConfs] = useState([]);

    const test = (data) => {
        setConfs(data.all)
    }

    useEffect(() => {
        personFacade.getAllConferences(test)
        console.log(confs)
    }, [])

    return (
        <>
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Capacity</th>
              <th>Date</th>
              <th>Time</th>
            </tr>

          {confs.map((c) => (
     
          <tr>
            <td>{c.name}</td>
            <td>{c.location}</td>
            <td>{c.capacity}</td>
            <td>{c.date}</td>
            <td>{c.time}</td>
          </tr>
          
          ))}
          </table>
          </div>
          </>
    )
}

export default GetAllConferences;