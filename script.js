const Mytitle = document.getElementById("Mytitle");
const Myimage = document.getElementById("Myimage");
const Myinput = document.getElementById("Myinput");

let current_index = 0;

let lokaties =[
    {
        "title":"plaats 1",
        "image":"route/afb1.jpeg",
        "directions":{
            "west": 2,
            "oost": 5,
            "zuid": 4
        }
    },
    {
        "title":"plaats 2",
        "image":"route/afb2.jpeg",
        "directions":{
         
            "west": 5,
            "oost": 3,
            "zuid": 6
        }
    },
    {
        "title":"plaats 3",
        "image":"route/afb3.jpeg",
        "directions":{
         
            "west": 1,
            "oost": 3,
            "zuid": 0
        }
    },
    {
        "title":"plaats 4",
        "image":"route/afb4.jpeg",
        "directions":{
        
            "west": 3,
            "oost": 6,
            "zuid": 5
        }
    },
    {
        "title":"plaats 5",
        "image":"route/afb5.jpeg",
        "directions":{
        
            "west": 0,
            "oost": 3,
            "zuid": 2
        }
    },
    {
        "title":"plaats 6",
        "image":"route/afb6.jpeg",
        "directions":{
        
            "west": 1,
            "oost": 4,
            "zuid": 3
        }
    },
]


function show(index){
    Mytitle.innerHTML = lokaties[index].title;
    Myimage.src = lokaties[index].image;
    current_index = index;
}

function getinput(){
    show(Myinput.value);
    Myinput.value = "";
    Myinput.focus();
}

function goDirection(direction){
    let punt_index = lokaties[current_index].directions[direction];
    show(punt_index);
}