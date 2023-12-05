import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/jsonstore/computers";

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`,);

    return result;
};

export const create = async (computerData) => {
    const result = await request.post(baseUrl, computerData);

    return result;
};
