import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import ReactHowler from 'react-howler'
import moment from "moment";
import {Single, SingleTitle} from "./style";
import Icon from "antd/es/icon";
import {Row, Col, Button, Popconfirm} from "antd";
import {connect} from "react-redux";
import {actionCreators} from "../../container/albumManage/store";


class PersonalAlbumSingle extends Component {
    state = {
        playing: false
    };

    handleChange() {
        this.setState({
            playing: !this.state.playing
        })
    }

    handlePlay() {
        this.setState({
            playing: true
        })
    }

    handlePause() {
        this.setState({
            playing: false
        })
    }

    handleDelete(singleId) {
        this.props.deleteCurrentSingle(singleId);
    }

    render() {
        let single = this.props.single;
        return (
            <Single>
                <ReactHowler
                    playing={this.state.playing}
                    src={single.get("singleLink")}
                />
                <Row type="flex">
                    <Col span={20}>
                        <div className="single-content">
                            <SingleTitle>
                                <h3 onClick={() => this.handleChange()}>{single.get("singleName")}</h3>
                                <p className="type-tag">
                                    {single.get("singleType").map((item, index) => {
                                        return (<span key={index}>{item}</span>)
                                    })}
                                </p>
                                <div className="publish-time">
                                    {moment(single.get("singlePublishedTime")).format("LLL")}
                                </div>
                            </SingleTitle>
                            <p className="author"><span>Author: </span>{single.get("singleAuthor")}</p>
                            <Popconfirm title="Are you sure you want to delete?" onConfirm={() => this.handleDelete(single.get("singleId"))}>
                                <Button type="danger" size="small">Delete</Button>
                            </Popconfirm>
                        </div>
                    </Col>
                    <Col span={4}>
                        {this.state.playing ? <Icon type="pause-circle" onClick={() => this.handlePause()}/> :
                            <Icon type="play-circle" onClick={() => this.handlePlay()}/>}
                    </Col>
                </Row>
            </Single>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCurrentSingle(singleId){
            dispatch(actionCreators.deleteAlbumSingle(singleId));
        }
    }
};

export default connect(null, mapDispatchToProps)(withRouter(PersonalAlbumSingle));