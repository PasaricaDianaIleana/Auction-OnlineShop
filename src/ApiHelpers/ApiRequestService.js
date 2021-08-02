import { API_ROUTE } from "./ApiRoute";
import Category from '../Models/Category'

const ApiRequest = {
    get: (url, headers = {}) => {
        return ApiRequest.makeRequest(`${API_ROUTE}/${url}`, "GET", {}, headers);
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
const ApiRequestService = {
    Categories
};
export default ApiRequestService;