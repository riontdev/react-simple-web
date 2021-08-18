

const style = {
    float: 'right'
};
const CustomButtom = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>Descargar</button>
        </div>
    );
}


export default CustomButtom;