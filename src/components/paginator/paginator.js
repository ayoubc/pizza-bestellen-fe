import React, { useState, useEffect } from 'react';
import './paginator.css';
import { nextPage, prevPage } from '../../actions';
import { connect } from 'react-redux';


const Paginator = ({ nextPage, prevPage, max }) => {
    const [count, setCount] = useState(1);
    const [prevClass, setPrevClass] = useState('disabled');
    const [nextClass, setNextClass] = useState('');

    useEffect(() => {
        if (count === max) {
            setNextClass('disabled');
        }
        if (count < max) {
            setNextClass('');
        }
        if (count === 1) {
            setPrevClass('disabled');
        }
        if (count > 1) {
            setPrevClass('');
        }
    }, [count]);

    const increament = () => {
        if (count < max) {
            nextPage(count);
            setCount(count + 1);
        }
    }

    const decreament = () => {
        if (count > 1) {
            prevPage(count);
            setCount(count - 1);
        }
    }

    return (
        <nav >
            <ul className="pagination">
                <li className={`page-item ${prevClass}`} onClick={decreament}>
                    <span className="page-link">Previous</span>
                </li>
                <li className="page-item active">
                    <span className="page-link">{count} / {max}</span>
                </li>
                <li className={`page-item ${nextClass}`} onClick={increament}>
                    <span className="page-link">Next</span>
                </li>
            </ul>
        </nav>
    );
}

export default connect(
    null,
    { nextPage, prevPage }
)(Paginator);