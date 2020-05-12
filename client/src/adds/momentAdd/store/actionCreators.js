import { message } from 'antd';
import axios from "axios";

export const addMoment = (data, props) => {
    return (dispatch) => {
        axios.post("/api/moment/add", data)
            .then((res)=>{
                const result = res.data.data;
                if (res.data.success){
                    message.info(result.message);
                    // props.history.push("/busker/detail/" + props.currentUser.get("id"));
                    props.history.push("/");
                } else {
                    message.error(result.message);
                }
            })
    }
};