export const authFetch = async (url, options = {}) => {
    const token = localStorage.getItem("token");

    const headers = {
        Authorization: `Bearer ${token}`,
        ...options.headers,
    };

    // Only set Content-Type to JSON if not sending FormData
    if (options.body && !(options.body instanceof FormData)) {
        headers["Content-Type"] = "application/json";
    }

    const res = await fetch(url, {
        ...options,
        headers,
    });

    if (res.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/admin/login";
    }

    return res.json();
};