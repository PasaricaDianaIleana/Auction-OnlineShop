import { API_ROUTE } from "./ApiRoute";
const ApiRequest = {
    get: (url, headers = {}) => {
        return ApiRequest.makeRequest(`${API_ROUTE}/${url}`, "GET", {}, headers);
    },
    post: (url, data, headers = {}) => {
        return ApiRequest.makeRequest(`${API_ROUTE}/${url}`, "POST", data, headers)
    },

    makeRequest: async (url, type, params = {}, headers = {}) => {
        try {
            type = type.toUpperCase();

            let request = {
                method: type,
                headers: headers
            }
            if (type === "POST" || type === "PUT") {
                request.headers = { "content-Type": "application/json;charset=UTF-8" }
                request.body = JSON.stringify(params);
            }
            const result = await fetch(url, request);
            return await result.json();
        } catch (error) {
            throw error.message;
        }
    },
};
const Categories = {
    all: async () => {
        return await ApiRequest.get("category");
    },
}
const Products = {
    all: async () => {
        return await ApiRequest.get("Products");
    },
    getProduct: async (productId) => {
        return await ApiRequest.get(`products/${productId}`)
    }
}
const Users = {
    postRegister: async (data) => {
        return await ApiRequest.post(`User/Register`, data)
    },
    postLogin: async (data) => {
        return await ApiRequest.post(`User/Login`, data)
    },
    getProfile: async () => {

        return await ApiRequest(`User/Profile`)
    },
    getUserById: async (userId) => {
        return await ApiRequest.get(`User/${userId}`)
    }
}
const ApiRequestService = {
    Categories,
    Products,
    Users
};
export default ApiRequestService;