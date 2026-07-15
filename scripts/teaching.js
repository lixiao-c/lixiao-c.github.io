teachings = [ 
    {
        "title": "Introduction to Parallel Programming",
        "year": "2026 Spring",
    },
    {
        "title": "Frontiers of Computer Systems",
        "year": "2026 Spring",
    },
    // {
    //     "title": "Computer Programming (TA)",
    //     "year": "2018, 2021, 2022, 2023",
    // },
    // {
    //     "title": "Computer Architecture (TA)",
    //     "year": "2022",
    // },
    // {
    //     "title": "Compiler Principle(TA)",
    //     "year": "2020",
    // }
]

document.querySelector("#TeachList").innerHTML = teachings.map(teaching => {
    return `<li>
                <p>
                    ${teaching.title}, ${teaching.year}
                </p>
            </li>`
}).join("\n")
