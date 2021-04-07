/* eslint no-eval: 0 */

import './App.css';
import Result from './components/Result'
import _words from 'lodash.words'
import { useState } from 'react'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import MathOperations from './components/MathOperations'

function App() {

    const [ stack, setStack ] = useState('');

    const items = _words(stack, /[^-^+^*^/]+/g)
    const value = items.length > 0 ? items[items.length - 1] : '0';

    console.log(items)

    return (
        <div className='react-calculator'>
            <Result value={value} />
            
            <Numbers onNumberClick={(num)=> {
                setStack(`${stack}${num}`)
            }}/>

            <Functions onClearClick={ ()=> {
                setStack('')
            }} onDeleteClick={ ()=> {
                setStack(stack.substring(0, stack.length-1))
            }} />

            <MathOperations onOperationClick={ (operation)=> {
                setStack(`${stack}${operation}`)
            }} onClickEqual={equal => {
                console.log("Equal:", equal)
                setStack(eval(stack).toString())
            }}/>
        </div>
    );
}

export default App;
