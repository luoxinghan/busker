import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {Table, Divider, Popconfirm, Button} from 'antd';
import moment from "moment";
import {Link, withRouter} from "react-router-dom";

class MomentManage extends Component {
    componentDidMount() {
        const {buskerId, getBuskerMoment} = this.props;
        getBuskerMoment(buskerId);
    }

    handleAdd = () => {
        this.props.history.push("/moment/add");
    };

    handleDelete = (momentId) => {
        this.props.deleteBuskerMoment(momentId);
    };

    render() {
        const {momentList} = this.props;
        const columns = [{
            title: 'Busker Name',
            dataIndex: 'buskerName',
            key: 'buskerName',
            render: (text, record) => <Link to={"/moment/detail/" + record.id}>{text}</Link>,
        },{
            title: 'Describe',
            dataIndex: 'describe',
            key: 'describe',
            ellipsis: true
        },{
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            ellipsis: true
        },{
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            render: time => <span>{moment(time).format('YYYY-MM-DD hh:mm:ss')}</span>
        },{
            title: 'Have Media',
            key: "media",
            render: (text, record) => {
                if (typeof record.images === "undefined"){
                    record.images = [];
                }
                if (typeof record.videos === "undefined"){
                    record.videos = [];
                }
                if (record.images.length === 0 && record.videos.length === 0){
                    return (<span>No</span>)
                } else {
                    return (<span>Yes</span>)
                }
            },
            width: 120,
        },{
            title: 'Tendency',
            dataIndex: 'tendency',
            key: 'tendency',
            width: 100,
        },{
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                <Link to={"/moment/detail/" + record.id}>View</Link>
                <Divider type="vertical"/>
                <Popconfirm title="Are you sure you want to delete?" onConfirm={() => this.handleDelete(record.id)}>
                    <a>Delete</a>
                </Popconfirm>
            </span>
            ),
        }];
        return (
            <div>
                <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                    Add Moment
                </Button>
                <Table
                    bordered
                    columns={columns}
                    dataSource={momentList.toJS()}
                    rowKey="id"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.get("login").get("currentUser"),
        momentList: state.get("personal").get("moment").get("momentList")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBuskerMoment(buskerId) {
            dispatch(actionCreators.getBuskerMoment(buskerId));
        },
        deleteBuskerMoment(momentId) {
            dispatch(actionCreators.deleteBuskerMoment(momentId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MomentManage));