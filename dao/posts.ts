import dao from "dao/pool";

export default {
  getPosts: (): Promise<{ rows: any[] }> => {
    return new Promise((res, rej) => {
      dao.query("select * from blog_post", [], (err, result) => {
        if (err) {
          rej(err);
        } else {
          res(result);
        }
      });
    });
  },
};
