import React, {Component} from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {actionCreators} from "./store";
import {
    MomentWrapper,
    MomentList,
    MomentItem,
    ItemHeader,
    ItemInfo,
    MomentMore
} from "./style";

class Moment extends Component{
    render() {
        const { momentList, getMomentMore, momentPage } = this.props;
        return (
            <MomentWrapper>
                <MomentList>
                    {momentList.map((item)=>{
                        let bgUrl = "";
                        let title = "MOMENT";
                        if (item.get("videos").size === 0 && item.get("images").size === 0){
                            bgUrl = "";
                        } else if (item.get("videos").size === 0) {
                            bgUrl = item.get("images").get(0).get("imageUrl");
                        } else {
                            bgUrl = "https://img.youtube.com/vi/"+ item.get("videos").get(0).get("videoUrl") +"/mqdefault.jpg";
                            title = "MOMENT + VIDEO";
                        }
                        return (
                            <MomentItem key={item.get("id")}>
                                <ItemInfo className="item-info">
                                    <Link to={'/moment/detail/' + item.get("id")}>
                                        <ItemHeader bgUrl={bgUrl} className="timeline-img-header">
                                            <h2><span className="iconfont">&#xe72f;{item.get("tendency")}</span></h2>
                                        </ItemHeader>
                                        <p className="busker-name">{item.get("buskerName")}</p>
                                        <div className="date">{title}</div>
                                        <p>{item.get("describe")}</p>
                                    </Link>
                                </ItemInfo>
                            </MomentItem>
                        )
                    })}
                </MomentList>
                <MomentMore onClick={()=>{getMomentMore(momentPage)}}>
                    More
                </MomentMore>
            </MomentWrapper>
        );
    }
    componentDidMount() {
        this.props.getMomentData();
    }
}

const mapStateToProps = (state) => {
    return {
        momentList: state.get("moment").get("momentList"),
        momentPage: state.get("moment").get("momentPage")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMomentData(){
            dispatch(actionCreators.getMomentData());
        },
        getMomentMore(momentPage){
            dispatch(actionCreators.getListMore(momentPage))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Moment);