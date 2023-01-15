speaker_Categories = [0,0,0,0];
issues_Categories  = [0,0,0,0,0,0,0,0,0,0,0,0];
questions = ["12",
             "1212",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             "",
             ""]
answers1 = ["", "", "", ""];
answers2 = ["", "", "", ""];
answers3 = ["", "", "", ""];
answers4 = ["", "", "", ""];
answers5 = ["", "", "", ""];
answers6 = ["", "", "", ""];
answers7 = ["", "", "", ""];
answers8 = ["", "", "", ""];
answers9 = ["", "", "", ""];
answers10 = ["", "", "", ""];
answers11 = ["", "", "", ""];
answers12 = ["", "", "", ""];
answers13 = ["", "", "", ""];
answers14 = ["", "", "", ""];
answers15 = ["", "", "", ""];
function add_Points_Speaker(e){
    switch(e) {
        case 'a':
            categories[0]+=5;
            break;
        case 'b':
            categories[1]+=5;
            break;
        case 'c':
            categories[2]+=5;
            break;
        case 'd':
            categories[3]+=5;
            break;
      }
}
function add_Points_Issues(e){
    switch(e) {
        case 'a':
            categories[0]+=5;
            break;
        case 'b':
            categories[1]+=5;
            break;
        case 'c':
            categories[2]+=5;
            break;
        case 'd':
            categories[3]+=5;
            break;
      }
}
function get_Question(e){
    return questions[e];
}
function get_Question_Options(){
    return answers1;
}

console.log(get_Question(1));