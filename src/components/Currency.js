import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../custom.css';

const Currency = () => {
    const { currency, expenses, dispatch } = useContext(AppContext);
    //const [currency, setCurrency] = useState('');


    const refreshCurrency = (currency) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency
        });

    }

    

    return (
        <div className="alert alert-secondary currency-box">

            <select className="custom-select currency-select" value={currency} onChange={(event) => refreshCurrency(event.target.value)}>

                <option value="$" name="Dollar">$ Dollar</option>
                <option defaultValue value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
        </div>

    );
};
export default Currency;