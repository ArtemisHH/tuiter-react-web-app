import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import TuitItem from "./tuits-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    /*const tuitsArray = useSelector(state => state.tuitsData)*/
    const {tuits, loading} = useSelector(state => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(findTuitsThunk())}, [dispatch]);
    return (
        <ul className="list-group">
            { loading &&
                <li className="list-group-item">
                    loading...
                </li>
            }
{/*            {    tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id}
                        tuit={tuit}
                    />)
            }*/}
        </ul>
    );
};
export default TuitsList;