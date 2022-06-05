db.createUser(
    {
        user: "root",
        pwd: "mongo",
        roles: [
            {
                role: "readWrite",
                db: "admin"
            }
        ]
    }
)