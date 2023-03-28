export async function getAllUsers(req, res) {
    return res.json([
        {
            id: 1,
            username: "janedoe",
            birthday: "1980-07-19T16:00:00.000Z",
        },
    ]);
} 