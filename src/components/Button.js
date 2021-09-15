import styles from './Button.module.css';

const Button = props => {
    return ( 
        <button className={styles.button} onClick={props.onClickHandler}>
            Clear All
        </button>
     );
}
 
export default Button;