
// import '../cssFiles/buttons.scss';
import {Button} from '../stories/button/Button';
const home = () => {
    return <div>
        {/* <button className="zwo-button-green">green button</button> */}
        &nbsp;
        {/* <input className="textfield-yellow"/> */}
        <Button label="story button" disabled onClick={()=>alert("this is alert pop up")}
        onDoubleClick={()=>alert("hello")}
        ></Button>
    </div>
};


export default home;