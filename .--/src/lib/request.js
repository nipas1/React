const buildOptions = (data) => {
    const options = {};

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            "Content-Type": "application/json",
        };
    }

    const token = localStorage.getItem("accessToken");

    if (token) {
        options.headers = {
            ...options.headers,
            "X-Authorization": token,
        };
    }

    return options;
};

const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (response.status === 204) {
        return {};
    }

    // if (!response.ok) {
    //     throw result;
    // }

    const result = await response.json();

    return result;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const update = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");
export const patch = request.bind(null, "PATCH");
