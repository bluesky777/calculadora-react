import PropTypes from 'prop-types'

const MathOperations = ({onOperationClick, onClickEqual})=> {
    return (
        <section className="math-operations">
            <button onClick={()=>{onOperationClick('+')}}>+</button>
            <button onClick={()=>{onOperationClick('-')}}>-</button>
            <button onClick={()=>{onOperationClick('*')}}>*</button>
            <button onClick={()=>{onOperationClick('/')}}>/</button>
            <button onClick={onClickEqual}>=</button>
        </section>
    )
}

MathOperations.propTypes = {
    onOperationClick: PropTypes.func.isRequired
}

export default MathOperations;
