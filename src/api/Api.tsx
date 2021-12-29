import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': 'c0caff3e-2af3-4ee5-bed5-c0d120d6cc75'
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

}

export const AuthAPI = {
    me () {
        return instance.get('/auth/me').then(response => response.data)
    },
    logIn (email: string, password: string, rememberMe: boolean = false) {
        return instance.post('/auth/login', {email, password, rememberMe })
    },
    logout() {
        return instance.delete('/auth/login')
    },
}

export const ProfileAPI = {
    getUsersProfile(userId: string) {
        return instance.get(`/profile/` + userId).then(response => response.data)
    },
    getStatus (userId: string) {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus (status: string) {
        return instance.put(`/profile/status`, {status: status})
    }
}