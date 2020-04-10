import React, {Component} from "react";
import {connect} from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {actionCreators} from "./store";
import {
    MomentWrapper,
    MomentList,
    MomentItem,
    ItemHeader,
    ItemInfo,
    MomentMore
} from "./style";
import moment from "moment";

let perpage = 2;

class Moment extends Component{
    render() {
        const { momentShow, current, totalPage } = this.props;
        return (
            <MomentWrapper>
                <MomentList>
                    {momentShow.map((item)=>{
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
                                        <p className="busker-name"><span>Busker: </span>{item.get("buskerName")}</p>
                                        <p className="time"><span>Time: </span>{moment(item.get("time")).format("lll")}</p>
                                        <div className="date">{title}</div>
                                        <p className="des">{item.get("describe")}</p>
                                    </Link>
                                </ItemInfo>
                            </MomentItem>
                        )
                    })}
                </MomentList>
                {
                    (current >= totalPage) ? null :
                    <MomentMore onClick={()=>{this.nextPage()}}>
                        More
                    </MomentMore>
                }
            </MomentWrapper>
        );
    }
    componentDidMount() {
        this.props.getMomentData(perpage);
    }

    nextPage(){
        const { current } = this.props;
        this.props.changePage(perpage, current + 1);
    }
}

const mapStateToProps = (state) => {
    return {
        momentList: state.get("moment").get("momentList"),
        momentShow: state.get("moment").get("momentShow"),
        totalPage: state.get("moment").get("totalPage"),
        current: state.get("moment").get("current")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMomentData(perpage){
            dispatch(actionCreators.getMomentData(perpage));
        },
        changePage(perpage, current){
            dispatch(actionCreators.changePage(perpage, current))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Moment));