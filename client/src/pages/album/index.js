import React, {Component} from "react";
import moment from "moment";
import {
    AlbumsWrapper,
    AlbumsInfo,
    AlbumItem,
    AlbumImage,
    AlbumExtra
} from "./style";
import {GetDateStr} from "../../common/utils/dateUtils";
import {actionCreators} from "./store";
import {connect} from "react-redux";
import {Title} from "../../common/style";
import {Row, Col, Skeleton} from "antd";
import {Link} from "react-router-dom";
import {createLoadingSelector} from "../../common/utils/selectors";

class Albums extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        this.setState({
            loading: false
        });
        const {getAlbumsData} = this.props;
        getAlbumsData();
    }

    onChange = checked => {
        this.setState({ loading: !checked });
    };

    render() {
        const { albumsList, isLoading } = this.props;
        let oneDayBefore = GetDateStr(-3);
        return (
            <AlbumsWrapper>
                <AlbumsInfo>
                    <Skeleton loading={isLoading} active>
                    <Title><span>Latest Reviews</span></Title>
                    <Row className="flow" justify="space-between" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {albumsList.map((item) => {
                            return (
                                <Col key={item.get("albumsId")} className="item" span={4}>
                                    <AlbumItem>
                                        <Link to={"/album/detail/" + item.get("albumsId")}>
                                            <AlbumImage>
                                                <img alt={item.get("albumsName")} src={item.get("imgUrl")}/>
                                                <div className="title">
                                                    <p className="author">{item.get("author")}</p>
                                                    <h2 className="album-name">{item.get("albumsName")}</h2>
                                                </div>
                                            </AlbumImage>
                                        </Link>
                                        <AlbumExtra><Link to={"/busker/detail/" + item.get("buskerId")} className="busker-name">By: {item.get("buskerName")}</Link></AlbumExtra>
                                        <time className="pub-date">{moment(item.get("publishTime")).isAfter(oneDayBefore) ? moment(item.get("publishTime"), "YYYYMMDD").fromNow() : moment(item.get("publishTime")).format('MMMM DD YYYY')}</time>
                                    </AlbumItem>
                                </Col>
                            )
                        })}
                    </Row>
                    </Skeleton>
                </AlbumsInfo>
            </AlbumsWrapper>
        );
    }
}

const loadingSelector = createLoadingSelector(['GET_ALBUM_LIST']);
const mapStateToProps = (state) => {
    return {
        albumsList: state.get("album").get("albumsList"),
        isLoading: loadingSelector(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAlbumsData(){
            dispatch(actionCreators.getAllAlbums());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);