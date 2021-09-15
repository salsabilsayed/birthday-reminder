import styles from './item.module.css';



const Item = props => {
    return ( 
        <div className={styles.item_box}>
            <div className={styles.image}>
                <img src={props.imageUrl} alt={props.name}/>
            </div>
            
            <div>
                <h2>{props.name}</h2>
                <p>{props.age}</p>
            </div>
        </div>
     );
}
 
export default Item;