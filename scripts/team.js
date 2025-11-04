
PHDList = [
    {
        "year": "2024",
        "names": "Xinming Yuan"
    },
     {
        "year": "2024",
        "names": "Qiji Mo"
    }
]

MasterList = [
    {
        "year": "2025",
        "names": "Zhiyuan Hua"
    },
     {
        "year": "2024",
        "names": "Pangyu Li, Zhuoran Wang"
    }
]

function gen_basic_list_for_team(listName, list) {
    document.querySelector(listName).innerHTML = list.map(item => {
        return `<li>
                    <p>
                        ${item.year}: ${item.names}
                    </p>
                </li>`
    }).join("\n")
}

gen_basic_list_for_team("#PHDList", PHDList)

gen_basic_list_for_team("#MasterList", MasterList)

// document.querySelector("#FacultyList").innerHTML = FacultyList.map(item => {
//     return `<li>
//                 <p>
//                     ${item.name} (${item.email})
//                 </p>
//             </li>`
// }).join("\n")
