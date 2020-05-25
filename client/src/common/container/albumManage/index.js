import React, {Component} from "react";
import {connect} from "react-redux";
import {actionCreators} from "./store";
import {
    Table,
    Divider,
    Popconfirm,
    Button,
    Select,
    Modal,
    Form,
    Upload,
    Icon,
    Input,
    Skeleton,
    Checkbox,
    InputNumber
} from 'antd';
import moment from "moment";
import {Link, withRouter} from "react-router-dom";
import {AlbumTitleImg, AlbumSingle, SingleItem} from "./style";
import {createLoadingSelector} from "../../utils/selectors";
import PersonalAlbumSingle from "../../components/PersonalAlbumSingle";
import {Title} from "../../style";

const {Option} = Select;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

const CollectionCreateForm = Form.create({name: 'form_in_modal'})(
    // eslint-disable-next-line
    class extends React.Component {
        state = {
            resourceId: null
        };

        normFile = e => {
            let fileList = [...e.fileList];
            fileList = fileList.slice(-1);//截取fileList最后一个元素
            return fileList;
        };

        handleChange = info => {
            if (info.file.status === 'uploading') {
                return;
            }
            if (info.file.status === 'done') {
                // Get this url from response in real world.
                getBase64(info.file.originFileObj, imageUrl =>
                    this.setState({
                        imageUrl,
                        loading: false,
                        resourceId: info.file.response.data.resourceId
                    }),
                );
            }
        };


        render() {
            const {visible, onCancel, onCreate, form, singles, loading, singleTypes} = this.props;
            const {getFieldDecorator} = form;

            return (
                <Modal
                    visible={visible}
                    title="Singles"
                    okText="Save"
                    cancelText="Cancel"
                    onCancel={onCancel}
                    onOk={onCreate}
                    width={700}
                >
                    <Skeleton loading={loading}>
                        {singles.map((item) => {
                            return (
                                <SingleItem key={item.get("singleId")}>
                                    <PersonalAlbumSingle single={item}/>
                                </SingleItem>
                            )
                        })}
                    </Skeleton>
                    <Title><span>Add Single</span></Title>
                    <Form layout="vertical">
                        <Form.Item label="Single Name">
                            {getFieldDecorator('momentTitle', {
                                rules: [{required: true, message: 'Please enter the single name.'}],
                            })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="Author">
                            {getFieldDecorator('author', {
                                rules: [{required: true, message: 'Please enter the author.'}],
                            })(<Input/>)}
                        </Form.Item>
                        <Form.Item label="Music Type">
                            {getFieldDecorator('singleType', {
                                initialValue: ['A', 'B'],
                            })(
                                <Checkbox.Group style={{width: '100%'}}>
                                    {singleTypes.map((item) => {
                                        return (
                                            <Checkbox key={item.get("typeId")} value={item.get("typeName")}>{item.get("typeName")}</Checkbox>
                                        )
                                    })}
                                </Checkbox.Group>,
                            )}
                        </Form.Item>
                        <Form.Item label="Upload Music" extra="Please upload music files.">
                            {getFieldDecorator('upload', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                            })(
                                <Upload name="music" action="/api/audioUpload" data={{type: 8}}
                                        onChange={this.handleChange}>
                                    <Button>
                                        <Icon type="upload"/> Upload
                                    </Button>
                                </Upload>,
                            )}
                        </Form.Item>
                        <Form.Item label="Order">
                            {getFieldDecorator('order', { initialValue: 1 })(<InputNumber min={1} max={99} />)}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);

class AlbumManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            currentAlbumId: -1
        };
    }

    componentDidMount() {
        const {buskerId, getBuskerAlbum} = this.props;
        getBuskerAlbum(buskerId);
    }

    handleAdd = () => {
        this.props.history.push("/album/add");
    };

    handleDelete = (albumId) => {
        this.props.deleteBuskerAlbum(albumId);
    };

    handleChange = (value, albumId) => {
        this.props.changeAlbumStatus(albumId, value);
    };

    openSongModel = (albumId) => {
        this.props.getAlbumSingles(albumId);
        this.props.getSingleTypes();
        this.showModal(albumId);
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    showModal = (albumId) => {
        this.setState({visible: true, currentAlbumId: albumId});
    };

    handleCancel = () => {
        this.setState({visible: false});
    };

    handleCreate = () => {
        const {form} = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            let data = values;
            if((typeof data.upload) !== "undefined") {
                if (data.upload.length !== 0) {
                    data.resourceId = data.upload[0].response.data.resourceId;
                    data.url = data.upload[0].response.data.url;
                }
            }
            data.singleType = data.singleType.toString();
            data.singlePublishedTime = moment(new Date()).valueOf();
            data.albumId = this.state.currentAlbumId;
            delete data.upload;
            this.props.addSingle(data);
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    render() {
        const {albumList, singles, loading, singleTypes} = this.props;
        const columns = [{
            title: 'Album Name',
            dataIndex: 'albumsName',
            key: 'albumsName',
            render: (text, record) => (
                <Link to={"/album/detail/" + record.albumsId}>
                    <AlbumTitleImg>
                        <img alt={record.imgUrl} src={record.imgUrl}/>
                        {text}
                    </AlbumTitleImg>
                </Link>),
        }, {
            title: 'Describe',
            dataIndex: 'describe',
            key: 'describe',
            ellipsis: true
        }, {
            title: 'Publish Time',
            dataIndex: 'publishTime',
            key: 'publishTime',
            render: time => <span>{moment(time).format('YYYY-MM-DD hh:mm:ss')}</span>
        }, {
            title: 'Price',
            dataIndex: 'price',
            key: "price",
            width: 80,
        }, {
            title: 'Sales',
            dataIndex: 'sales',
            key: "sales",
            width: 80,
        }, {
            title: 'Singles',
            dataIndex: 'singleNumber',
            key: 'singleNumber',
            render: (text, record) => (<AlbumSingle
                onClick={() => this.openSongModel(record.albumsId)}><span>{text} Songs</span></AlbumSingle>),
            width: 100,
        }, {
            title: 'Status',
            dataIndex: 'albumStatus',
            key: 'albumStatus',
            render: (text, record) => {
                return (
                    <Select defaultValue={text} onChange={(value) => this.handleChange(value, record.albumsId)}>
                        <Option value={1}>In Stock</Option>
                        <Option value={2}>Coming Soon</Option>
                        <Option value={3}>Off shelf</Option>
                        <Option value={4}>Deleted</Option>
                    </Select>
                );
            }
        }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                <Link to={"/album/detail/" + record.albumsId}>View</Link>
                <Divider type="vertical"/>
                <Popconfirm title="Are you sure you want to delete?"
                            onConfirm={() => this.handleDelete(record.albumsId)}>
                    <a>Delete</a>
                </Popconfirm>
            </span>
            ),
        }];
        return (
            <div>
                <Button onClick={this.handleAdd} type="primary" style={{marginBottom: 16}}>
                    Add Album
                </Button>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    singles={singles}
                    loading={loading}
                    singleTypes={singleTypes}
                />
                <Table
                    bordered
                    columns={columns}
                    dataSource={albumList.toJS()}
                    rowKey="albumsId"
                />
            </div>
        );
    }
}

const loadingSelector = createLoadingSelector(['GET_PERSONAL_ALBUM_SINGLES']);
const mapStateToProps = (state) => {
    return {
        currentUser: state.get("login").get("currentUser"),
        albumList: state.get("personal").get("album").get("albumList"),
        singles: state.get("personal").get("album").get("singles"),
        singleTypes: state.get("personal").get("album").get("singleTypes"),
        loading: loadingSelector(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBuskerAlbum(buskerId) {
            dispatch(actionCreators.getBuskerAlbum(buskerId));
        },
        addSingle(data) {
            dispatch(actionCreators.addSingle(data));
        },
        deleteBuskerAlbum(albumId) {
            dispatch(actionCreators.deleteBuskerAlbum(albumId));
        },
        changeAlbumStatus(albumId, status) {
            dispatch(actionCreators.changeAlbumStatus(albumId, status));
        },
        getAlbumSingles(albumId) {
            dispatch(actionCreators.getAlbumSingles(albumId));
        },
        getSingleTypes() {
            dispatch(actionCreators.getSingleTypes());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AlbumManage));