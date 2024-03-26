const baseURL = 'https://jsonplaceholder.typicode.com'

const users = `${baseURL}/users`

const urls = {
  users: {
    link: users,
    byIdPosts: (id:number): string => `${users}/${id}/posts`
  }
}

export {urls}
