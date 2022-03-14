
export const getUsers = async () => {
    const data = await fetch(`http://localhost:8080/users`);
    return data.json();
}

// post request
export const createUser = async (postData) => {
    if (!postData) return Promise.reject("PostData is not Provided...!");

    const data = await fetch(`http://localhost:8080/users`, {
        method : "POST",
        headers : { 'Content-Type' : 'application/json' },
        body : JSON.stringify(postData)
        }
    );

    return data.json();

}

// delete request
export const deleteUser = async (userId) => {
    if(!userId) return Promise.reject("userId is not Provided...!");

    const data = await fetch(`http://localhost:8080/users/${userId}`, { method: 'DELETE'});
    return data;
}