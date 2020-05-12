import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {Table, Divider, Popconfirm, Button} from 'antd';
import moment from "moment";
import {Link, withRouter} from "react-router-dom";
import {TrailTitle, LikeText} from "./style";
    
class TrailManage extends Component{
    componentDidMount() {
        const {buskerId, getBuskerTrail} = this.props;
        getBuskerTrail(buskerId);
    }

    handleAdd = () => {
        this.props.history.push("/trail/add");
    };

    handleDelete = (trailId) => {
        this.props.deleteBuskerTrail(trailId);
    };

    render() {
        const {trailList} = this.props;
        const columns = [{
            title: 'Participant',
            dataIndex: 'participant',
            key: 'participant',
            render: (text, record) => (<Link to={"/album/detail/" + record.albumsId}>
                <TrailTitle>
                    <img alt={record.imgUrl} src={record.imgUrl}/>
                    {text}
                </TrailTitle>
            </Link>),
        },{
            title: 'Describe',
            dataIndex: 'describe',
            key: 'describe',
            ellipsis: true
        },{
            title: 'Address',
            dataIndex: 'performAddress',
            key: 'performAddress',
            ellipsis: true
        },{
            title: 'Time',
            dataIndex: 'performingTime',
            key: 'performingTime',
            render: performingTime => <span>{moment(performingTime).format('YYYY-MM-DD hh:mm:ss')}</span>
        },{
            title: 'Likes',
            dataIndex: 'likes',
            key: 'likes',
            width: 100,
            render: likes => <LikeText>{likes} Likes</LikeText>
        },{
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                <Link to={"/trail/detail/" + record.id}>View</Link>
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
                    Add Trail
                </Button>
                <Table
                    bordered
                    columns={columns}
                    dataSource={trailList.toJS()}
                    rowKey="id"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.get("login").get("currentUser"),
        trailList: state.get("personal").get("trail").get("trailList")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBuskerTrail(buskerId) {
            dispatch(actionCreators.getBuskerTrail(buskerId));
        },
        deleteBuskerTrail(trailId) {
            dispatch(actionCreators.deleteBuskerTrail(trailId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TrailManage));