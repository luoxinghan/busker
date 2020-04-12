
export const GetDateStr = (AddDayCount) => {
    let dd = new Date();
    dd.setDate(dd.getDate() + AddDayCount);//获取AddDayCount天后的日期
    return dd;
};