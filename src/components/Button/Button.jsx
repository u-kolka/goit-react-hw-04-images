import PropTypes from 'prop-types'; 

export const Button = ({ onClick }) => {
    return (
    <button onClick={onClick} type = "button" className="Button">Load more</button >)
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}