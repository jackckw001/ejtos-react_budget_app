import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import '../custom.css';
import addButtonImage from '../addButton.PNG';
import deduceButtonImage from '../deduceButton.PNG';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
     {/*   <td><button className="circle-add-button" onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button className="circle-minus-button" onClick={event=> decreaseAllocation(props.name)}>-</button></td>
    */} <td><img src={addButtonImage} alt="add" style={{ width: '35px', height: '30px' }} onClick={event=> increaseAllocation(props.name)}/></td>
        <td><img src={deduceButtonImage} alt="deduce" style={{ width: '30px', height: '30px' }} onClick={event=> decreaseAllocation(props.name)}/></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
