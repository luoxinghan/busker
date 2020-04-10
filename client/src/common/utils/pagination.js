export const pagination = (data, perpage, current)  => {
   // 总条数
   let rows = (typeof data.length === "undefined") ? data.size : data.length;

   // 每页数量
   let pageSize = perpage;

   // 当前页
   let currentPage = current;//1
   let startRow = (currentPage - 1) * pageSize;
   let endRow = (currentPage * pageSize > rows ? rows : currentPage * pageSize);
   return data.slice(startRow, endRow);
};

export const getTotalPage = (data, perpage) => {
   let rows = (typeof data.length === "undefined") ? data.size : data.length;
   let totalPage = 0;
   let pageSize = perpage;
   if (rows / pageSize > parseInt(rows / pageSize)){
      totalPage = parseInt(rows / pageSize) + 1;
   } else {
      totalPage = parseInt(rows / pageSize);
   }
   return totalPage;
};