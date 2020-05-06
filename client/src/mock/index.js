import * as getTrails from "./trail/getTrails";
import * as getTrailById from "./trail/getTrailById";
import * as getTrailsByBuskerId from "./trail/getTrailsByBuskerId";

import * as getAlbums from "./album/getAlbums";
import * as getAlbumsById from "./album/getAlbumById";
import * as getAlbumsComment from "./album/getAlbumComment";
import * as getAlbumSingles from "./album/getAlbumSingles";
import * as addAlbum from "./album/addAlbum";
import * as getAlbumsByBuskerId from "./album/getAlbumsByBuskerId";

import * as getMoments from "./moment/getMoments";
import * as getMomentById from "./moment/getMomentById";
import * as getMomentsByBuskerId from "./moment/getMomentsByBuskerId";

import * as getBuskers from "./busker/getBuskers";
import * as getBuskerById from "./busker/getBuskerById";
import * as recommendBusker from "./busker/recommendBusker";
import * as updateBusker from "./busker/updateBusker";

import * as addComment from "./comment/addComment";
import * as addSubComment from "./comment/addSubComment";
import * as getSubComment from "./comment/getSubComments";

import * as homepage from "./home/homepage";

import * as login from "./user/login";

import * as updatePicture from "./common/updatePicture";

export {
    login,

    homepage,
    getAlbums,
    getAlbumsById,
    getAlbumsComment,
    getAlbumSingles,
    addAlbum,
    getAlbumsByBuskerId,

    getTrails,
    getTrailById,
    getTrailsByBuskerId,

    getMoments,
    getMomentById,
    getMomentsByBuskerId,

    addComment,
    addSubComment,
    getSubComment,

    getBuskers,
    recommendBusker,
    getBuskerById,
    updateBusker,

    updatePicture,
};