

const styleBox = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100
    };

const style = {
        height: 250,
        with: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        border: '4px solid rgba(0, 0, 0, 0.9)', 
    };

const CustomImage = (props) => {


    return (
        <div style={styleBox}>
            {props.uri ?  <img style={style} height={250} with={100} alt={"Player"} src={props.uri}></img> : <div></div>}
           
        </div>
    );
}

export default CustomImage;