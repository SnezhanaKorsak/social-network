import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': 'a00ef78b-3360-4cfb-a08a-5146df137c1f'
    }
})


export const UserAPI = {
    getUsers(currentPage = 1, pageLimit = 4) {
        return instance.get(`/users?page=${currentPage}&count=${pageLimit}`)
            .then(response => response.data)
    },
    followUser(userId = 2) {
        return instance.post(`/follow/${userId}`, {}).then(response => response.data)
    },
    unfollowUser(userId = 2) {
        return instance.delete(`/follow/${userId}`).then(response => response.data)
    },
    getUsersProfile(userId: string) {
        return instance.get(`/profile/` + userId).then(response => response.data)
    },
}

export const AuthAPI = {
    me () {
        return instance.get('/auth/me').then(response => response.data)
    }
}