import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    //const [budget, setBudget] = useState('');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const refreshBudget = (budget) => {

        if(budget > 20000) {
            alert("The budget value cannot exceed £20,000.");
            dispatch({
                type: 'SET_BUDGET',
                payload: 20000
            });
            return;
        }

        if(budget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending.");
            dispatch({
                type: 'SET_BUDGET',
                payload: totalExpenses
            });
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: budget
        });

    }


    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => refreshBudget(event.target.value)}>
                        </input>
                        
            </span>
        </div>
    );
};
export default Budget;