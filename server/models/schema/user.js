const userSchema = {
    name: String,
    username: String,
    mobile: String,
    level: Number,
    picture: String,
    games: [
        {
            id: String,
            name: String,
            matchesPlayed: Number,
            winPercentage: Number,
            genre: String,
            hoursPlayed: Number,
            img: String,
        }
    ]
}