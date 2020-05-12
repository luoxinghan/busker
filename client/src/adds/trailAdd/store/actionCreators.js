import { message } from 'antd';
import axios from "axios";

export const addTrail = (data, props) => {
    return (dispatch) => {
        axios.post("/api/trail/add", data)
            .then((res)=>{
                const result = res.data.data;
                if (res.data.success){
                    message.info(result.message);
                    props.history.push("/");
                } else {
                    message.error(result.message);
                }
            })
    }
};