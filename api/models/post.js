const db = require("../database/connect");

const User = require("./user")

class Post {

    constructor({ post_id, title, content, user_id, created_on}) {
        this.id = post_id, 
        this.title = title, 
        this.content = content,
        this.user_id = user_id,
        this.date = created_on
    }


    
    
    static async getAllFromId(id) {
        const response = await db.query("SELECT * FROM post WHERE user_id = $1", [id]);
        return response.rows.map((p) => new Post(p))
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM post WHERE post_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("unable to locate post");
        } else {
            return new Post(response.rows[0]);
        }
    }

    static async create(data) {
    const { title, content, user_id, date } = data;
    let response = await db.query(
      "INSERT INTO post (title, content, user_id, date) VALUES ($1, $2, $3, $4) RETURNING post_id;",
      [title, content, user_id, data]
    );
    const newId = response.rows[0].post_id;
    const newPost = await Post.getOneById(newId);
    return newPost;
  }

}

module.exports = Post;
