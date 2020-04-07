import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    DetailWrapper,
    TrailInfoArea,
    TrailCard,
    TrailImg,
    TrailContent
} from "./style";
import {actionCreators} from "./store";
import {createLoadingSelector} from "../../common/utils/selectors";
import {Skeleton} from "antd";
import moment from "moment";

class TrailDetail extends Component {
    componentDidMount() {
        const { getTrail } = this.props;
        getTrail();
    }

    render() {
        const { trail, isLoading } = this.props;
        console.log(trail)
        return (
            <DetailWrapper>
                <TrailInfoArea>
                    <Skeleton loading={isLoading} active>
                        <TrailCard>
                            <TrailImg src={trail.get("imgUrl")}/>
                            <TrailContent>
                                <h1 className="trail-name">{trail.get("trailName")}</h1>
                                <p><span className="title">TIME: </span><time>{moment(trail.get("time")).format('LLLL')}</time></p>
                                <p><span className="title">Busker: </span></p>
                            </TrailContent>
                        </TrailCard>
                    </Skeleton>
                </TrailInfoArea>
            </DetailWrapper>
        )
    }
}

const loadingSelector = createLoadingSelector(['GET_TRAIL']);
const mapStateToProps = (state) => {
    return {
        trail: state.get("trailDetail").get("trail"),
        isLoading: loadingSelector(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTrail(){
            dispatch(actionCreators.getTrail(1))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TrailDetail));