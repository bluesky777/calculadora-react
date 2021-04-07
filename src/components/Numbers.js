import PropTypes from 'prop-types'


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = (onNumberClick)=>{
    return numbers.map((content)=> (
        <button onClick={() => onNumberClick(content)}>{content}</button>
    ))
}

const Numbers = ({onNumberClick})=> {
    return (
        <div className="numbers">
            { renderButtons(onNumberClick) }
        </div>
    )
}

Numbers.propTypes = {
    onNumberClick: PropTypes.func.isRequired
}

export default Numbers;
