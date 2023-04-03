import React, {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import TuitItem from "./tuits-item";
import {findTuitsThunk} from "../../services/tuits-thunks";
/*import TuitStats from "./tuitStats";*/

const TuitsList = () => {
    /*const tuitsArray = useSelector(state => state.tuits)*/
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return (
        <ul className="list-group">
            {loading &&
                <li className="list-group-item">
                    loading...
                </li>
            }

            {tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id}
                        tuit={tuit}/>
            )
            }
        </ul>
    );
};
export default TuitsList;