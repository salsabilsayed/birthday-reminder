import styles from './Head.module.css';

const Head = props => {
    return ( 
        <h1 className={styles.title}>
            {props.numOfBirthday} birthdays today
        </h1>
     );
}
 
export default Head;