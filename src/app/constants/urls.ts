const baseURL = 'https://jsonplaceholder.typicode.com'

const users = `${baseURL}/users`
const posts = `${baseURL}/posts`

const urls = {
  users: {
    link: users,
    byId: (id: number): string => `${users}/${id}`
  },
  posts: {
    link: posts,
    byId: (id: number): string => `${posts}/${id}`,
    commentsById: (id: number): string => `${posts}/${id}/comments`
  }
}

export {urls}
