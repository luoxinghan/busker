import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import ReactHowler from 'react-howler'
import moment from "moment";
import {Single} from "./style";
import Icon from "antd/es/icon";
import {message} from "antd";


class AlbumSingle extends Component {
    state = {
        playing: false
    };

    handleChange(){
        this.setState({
            playing: !this.state.playing
        })
    }
    handlePlay () {
        if (this.props.haveAlbum) {
            this.setState({
                playing: true
            })
        } else {
            message.info("Please purchase this album first.")
        }
    }
    handlePause () {
        this.setState({
            playing: false
        })
    }

    render() {
        let single = this.props.single;
        let albumImg = this.props.albumImg;
        return (
            <Single>
                <ReactHowler
                    playing={this.state.playing}
                    src={single.get("singleLink")}
                />
                <div className="music">
                    <div className="mock"/>
                    <img className="single-img" alt={albumImg} src={albumImg}/>
                    {this.state.playing ? <Icon type="pause-circle" onClick={()=>this.handlePause()}/> : <Icon type="play-circle" onClick={()=>this.handlePlay()} />}
                </div>
                <div className="single-content">
                    <h3 onClick={()=>this.handleChange()}>{single.get("singleName")}</h3>
                    <p className="author"><span>Author: </span>{single.get("singleAuthor")}</p>
                    <p className="type-tag">
                        {single.get("singleType").map((item, index)=>{
                            return (<span key={index}>{item}</span>)
                        })}
                    </p>
                </div>
                <div className="publish-time">
                    {/*{single.get("singleScore")}*/}
                    {moment(single.get("singlePublishedTime")).format("LLLL")}
                </div>
            </Single>
        )
    }
}

export default withRouter(AlbumSingle);