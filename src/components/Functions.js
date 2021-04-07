import PropTypes from 'prop-types'


const Functions = ({onClearClick, onDeleteClick})=>{
    return (
        <section className="functions">
            <button type="button-long-text" onClick={ onClearClick }>Clear</button>
            <button type="button-long-text" onClick={ onDeleteClick }>x</button>
        </section>
    )
}

Functions.propTypes = {
    onClearClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired
}

Functions.defaultProps = {
    value: '0'
}

export default Functions
