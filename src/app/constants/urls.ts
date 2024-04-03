import {environment} from "../../environments/environment";

const {API} = environment

const users = `${API}/users`
const posts =  `${API}/posts`

const urls = {
  users: {
    link: users,
    byId: (id: number): string => `${users}/${id}`
  },
  posts: {
    link: posts,
    byId: (id: number): string => `${posts}/${id}`
  }
}

export {urls}
