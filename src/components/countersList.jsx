import React, {useState} from "react";
import Counter from "./counter"

const CountersList = () => {
    const initialState = [
        {id:0, value:0, name: 'Ненужная вещь', handleIncrement, handleDecrement},
        {id:1, value:4, name: 'Ложка', handleIncrement, handleDecrement},
        {id:2, value:0, name: 'Вилка', handleIncrement, handleDecrement},
        {id:3, value:0, name: 'Тарелка', handleIncrement, handleDecrement},
        {id:4, value:0, name: 'Набор минималиста', handleIncrement, handleDecrement},
   ]

    const [counters, setCounters] = useState(initialState)

       const handleDelete = (id) => 
       {
        const newCounters = counters.filter(c=>c.id!==id)
        setCounters(newCounters)
       }
       const handleReset = () => {
           setCounters(initialState)
       }
       
       function handleIncrement(id)  {
        const newIncrementArray = [...counters]
        const index = counters.findIndex(c => c.id === id)
        newIncrementArray[index].value += 1;
        setCounters(newIncrementArray)
        }    

       function handleDecrement(id) {
        const newDecrementArray = [...counters]
        const index = counters.findIndex(c => c.id === id)
        newDecrementArray[index].value -= 1;
        setCounters(newDecrementArray)
    }

    return (
    <>
        {counters.map((count) =>
            <Counter key={count.id} onDelete={handleDelete} onDecrement={handleDecrement} onIncrement={handleIncrement} {...count}/> 
            )}
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>

    </>
)
}

export default CountersList