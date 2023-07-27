import { useEffect } from "react";

const CustomTable = ({data}) => {
console.log(data);
    useEffect(()=>{
    },[data])
    return (
      <div className="container mx-auto max-w-3xl overflow-x-auto mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Head</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
          {data?.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.text}</td>
              <td>{value.amount}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default CustomTable;
  