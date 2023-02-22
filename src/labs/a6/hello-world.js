/*2.5 Breaking out Hello World into a separate component*/
/*2.8 Navigating with links in SPAs*/
/*import {Link} from "react-router-dom";*/
import Nav from "../../nav";

function HelloWorld() {
    return (
        <div>
            <Nav/>
            <h1>Hello World!</h1>
        </div>
    );
};
export default HelloWorld;