import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, expenses, dispatch } = useContext(AppContext);
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
        <div className='alert alert-secondary' style={{display: 'flex'}}>

            <label htmlFor="budget" style={{ width: '80px', marginLeft: '0rem', marginRight: '0px' }}>{'Budget: ' + currency}</label>
            <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        style={{ marginLeft: '0rem' , size: 5}}
                        onChange={(event) => refreshBudget(event.target.value)}>
                        </input>
                        

        </div>
    );
};
export default Budget;