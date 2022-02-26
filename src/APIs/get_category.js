export const getCategory = () => {
    return fetch("http://localhost/cincinnatitimes/GET/get_category_names.php", {
        method: "POST",
    }) .then((res) => res.json())
}

