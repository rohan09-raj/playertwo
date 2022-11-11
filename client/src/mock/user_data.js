export const User = {
    name: "Kanish",
    userImg: `${process.env.PUBLIC_URL}/assets/images/user2.jpeg`,
    level: "5",
    games: [
        {
            id: "0",
            gameName: "VALORANT",
            matchesPlayed: "5",
            winPercentage: "50%",
            genre: "Shooting",
            img: `${process.env.PUBLIC_URL}/assets/images/valorant.webp`,
            hoursPlayed: "255"
        },
        {
            id: "1",
            gameName: "AMONG US",
            matchesPlayed: "40",
            winPercentage: "92%",
            genre: "Social Deduction",
            img: `${process.env.PUBLIC_URL}/assets/images/among_us.jpeg`,
            hoursPlayed: "456"
        },
        {
            id: "2",
            gameName: "FALL GUYS",
            matchesPlayed: "67",
            winPercentage: "45%",
            genre: "Battle Royle",
            img: `${process.env.PUBLIC_URL}/assets/images/fallguys.jpeg`,
            hoursPlayed: "100"
        }
    ]
}