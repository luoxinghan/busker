import * as getTrails from "./trail/getTrails";
import * as getTrailById from "./trail/getTrailById";
import * as getTrailsByBuskerId from "./trail/getTrailsByBuskerId";
import * as LikeTrail from "./trail/LikeTrail";
import * as addTrail from "./trail/addTrail";
import * as deleteTrail from "./trail/deleteTrail";

import * as buyAlbum from "./album/buyAlbum";
import * as getAlbums from "./album/getAlbums";
import * as getAlbumsById from "./album/getAlbumById";
import * as getAlbumsComment from "./album/getAlbumComment";
import * as getAlbumSingles from "./album/getAlbumSingles";
import * as addAlbum from "./album/addAlbum";
import * as getAlbumsByBuskerId from "./album/getAlbumsByBuskerId";
import * as deleteALbum from "./album/deleteAlbum";
import * as changeAlbumStatus from "./album/changeAlbumStatus";

import * as getMoments from "./moment/getMoments";
import * as getMomentById from "./moment/getMomentById";
import * as getMomentsByBuskerId from "./moment/getMomentsByBuskerId";
import * as addMoment from "./moment/addMoment";
import * as deleteMoment from "./moment/deleteMoment";

import * as getBuskers from "./busker/getBuskers";
import * as getBuskerById from "./busker/getBuskerById";
import * as recommendBusker from "./busker/recommendBusker";
import * as updateBusker from "./busker/updateBusker";

import * as addComment from "./comment/addComment";
import * as addSubComment from "./comment/addSubComment";
import * as getSubComment from "./comment/getSubComments";

import * as deleteSingle from "./single/deleteSingle";
import * as getSingleTypes from "./single/getSingleTypes";
import * as addSingle from "./single/addSingle";

import * as homepage from "./home/homepage";

import * as login from "./user/login";
import * as logout from "./user/logout";
import * as register from "./user/register";

import * as updatePicture from "./common/updatePicture";
import * as updateUserAvatar from "./common/updateUserAvatar";
import * as getCaptcha from "./common/getCaptcha";

export {
    login,
    logout,
    register,

    homepage,

    buyAlbum,
    getAlbums,
    getAlbumsById,
    getAlbumsComment,
    getAlbumSingles,
    addAlbum,
    getAlbumsByBuskerId,
    deleteALbum,
    changeAlbumStatus,

    getTrails,
    getTrailById,
    getTrailsByBuskerId,
    LikeTrail,
    addTrail,
    deleteTrail,

    addMoment,
    getMoments,
    getMomentById,
    getMomentsByBuskerId,
    deleteMoment,

    addComment,
    addSubComment,
    getSubComment,

    getBuskers,
    recommendBusker,
    getBuskerById,
    updateBusker,

    deleteSingle,
    getSingleTypes,
    addSingle,

    updatePicture,
    updateUserAvatar,
    getCaptcha,
};