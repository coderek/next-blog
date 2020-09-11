import dao from 'dao/posts'

export default async (req, res) => {
  const { rows } = await dao.getPosts()
  res.statusCode = 200
  res.json({ posts: rows.map(r => r.title) })
}

