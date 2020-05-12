import React, {Component} from "react";
import {connect} from "react-redux";
import "antd/dist/antd.css";
import {
    PersonalWrapper,
    PersonalInfo
} from "./style";
import { Tabs, Button } from 'antd';
import MomentManage from "../../common/container/momentManage";
import TrailManage from "../../common/container/trailManage";
import AlbumManage from "../../common/container/albumManage";
import NoPermission from "../../common/components/NoPermission";

const { TabPane } = Tabs;

class Personal extends Component{
    state = {
        buskerId: null
    };

    componentDidMount() {
        let buskerId = this.props.match.params.id;
        this.setState({
            buskerId: parseInt(buskerId)
        });
    }

    render() {
        const {currentUser} = this.props;
        if (currentUser.get("id") === this.state.buskerId){
            return (
                <PersonalWrapper>
                    <PersonalInfo>
                        <Tabs>
                            <TabPane tab="Moments" key="1">
                                <MomentManage buskerId={this.state.buskerId}/>
                            </TabPane>
                            <TabPane tab="Trails" key="2">
                                <TrailManage buskerId={this.state.buskerId}/>
                            </TabPane>
                            <TabPane tab="Albums" key="3">
                                <AlbumManage buskerId={this.state.buskerId}/>
                            </TabPane>
                        </Tabs>
                    </PersonalInfo>
                </PersonalWrapper>
            );
        } else {
            return (<NoPermission/>);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.get("login").get("currentUser")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Personal);