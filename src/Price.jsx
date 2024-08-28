export default function Price({oldPrice, newPrice}){
    let oldstyles ={
        textDecorationLine: "line-through",
    };
    let newstyles ={
        fontweight: "bold",
    };
    let styles ={
        backgroundColor: "yellow",
        height:"30px",
        width:"200",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    };
    return (
        <div style={styles}>
            <span style={oldstyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newstyles}>{newPrice}</span>
        </div>
    );
}