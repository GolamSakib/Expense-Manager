import { useEffect, useState } from 'react';

const CustomForm = (props) => {
    const {type,value,setter}=props;
    const [text,setText]=useState('');
    const [amount,setAmount]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newElement={text,amount};
        if(text==='' || amount<0) return
        setter((prev)=>{
            return [...prev,newElement]
        })
        setText('');
        setAmount('');
    }
    useEffect(()=>{
     console.log(value);
    },[value])
  return (
    <form className="text-center p-2" onSubmit={handleSubmit}>
      <h3 className="my-2 text-2xl">New {type}</h3>
      <input
        className="input input-bordered w-full max-w-xs mr-2"
        type="text"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
      <input
        className="input input-bordered w-full max-w-xs mr-2"
        type="number"
        placeholder="Amount of money"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
      />
      <button type="submit" className="btn btn-accent">
        Add Transaction
      </button>
    </form>
  );
};

export default CustomForm;
