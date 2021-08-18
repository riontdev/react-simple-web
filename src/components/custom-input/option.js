const Options = (props) => {

    return ((props.data) ? props.data.map((data, index) => {
        return <option name={data.name} value={index}> {data.name} </option>
    }) : <option name={"default"} value="0"></option>);
};

export default Options;