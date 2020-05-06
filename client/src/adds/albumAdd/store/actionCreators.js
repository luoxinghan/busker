import { message } from 'antd';
import axios from "axios";

export const addAlbum = (data, props) => {
    return (dispatch) => {
        axios.post("/api/album/add", data)
            .then((res)=>{
                const result = res.data.data;
                if (res.data.success){
                    message.info(result.message);
                } else {
                    message.error(result.message);
                }
                props.history.push("/");
            })
    }
};