
//DOM


var diceBtn = document.querySelector("#diceBtn");
var diceResult = document.querySelector("#diceResult");
var diceIndication = document.querySelector("#diceIndication");
var caseContent = document.querySelector("#caseContent");
var diceCombatBtn = document.querySelector("#diceCombatBtn");
var cases = document.getElementsByClassName("case");
 
var begin = document.querySelector("#begin");
var failureBtn = document.querySelector("#dicefailure")


var trollImg = document.querySelector("#trollImg");
var nazImg = document.querySelector("#nazImg");
var balrogImg = document.querySelector("#balrogImg");
var orcImg = document.querySelector("#orcImg");
var arachneImg = document.querySelector("#arachneImg");
var gollumImg= document.querySelector("#gollumImg");
var map = document.querySelector("#map");
var nazgulscream = document.querySelector("#nazgulscream")
var gandalf=document.querySelector("#gandalf")
var nazgulbattle=document.querySelector("#nazgulbattle")
var trollSound= document.querySelector("#trollsound")
var musicShire= document.querySelector("#musicShire")
var balrog= document.querySelector("#balrog")
var gollum= document.querySelector("#gollum")
var pion=document.querySelector("#pion")
var won=document.querySelector("#won")
var beat=document.querySelector("#beat")
var sleep=document.querySelector("#sleep")
var diceSound=document.querySelector("#diceSound")
var oliphantHorn=document.querySelector("#oliphantHorn")


trollImg.hidden=true;
nazImg.hidden=true;
balrogImg.hidden=true;
orcImg.hidden=true;
arachneImg.hidden=true;
gollumImg.hidden=true;
sleep.hidden=true;
oliphantImg.hidden=true;

// Concernant le joueur

class Player {
    constructor(){
        this.index = 0;
    }
    
    giveIndex(){   //donne sa position
        return this.index;
    }

    moveForward(diceValue){   //avance 
        for (var i = this.index; i<=this.index+diceValue; i++){
            var element = document.getElementsByClassName(classTab[i])[0]
            element.classList.add("active")
        }
        this.index += diceValue;
        var pion = document.querySelector("#pion")
        pion.classList.add(pionCoord[this.index])
        console.log(`The player move ${diceValue} squares forward`);
    }

    moveBackward(value){ 
        for (var i = this.index; i>=this.index-value; i--){
            var element = document.getElementsByClassName(classTab[i])[0]
            element.classList.remove("active")
        }
        var pion = document.querySelector("#pion")
        pion.classList.remove(pionCoord[this.index])
        this.index -=value;
        var pion = document.querySelector("#pion")
        pion.classList.add(pionCoord[this.index])
        console.log(`The player move ${value} squares backward`);
    }



    giveanAnswer(answer){   //répond à une question

        return answer;
    }




}
var player1 = new Player;


// Case object


class Case {
    constructor(index, type){
        this.index = index; // Index de la case sur le chemin
        this.type = type;  //Question, Ennemi, ou Vide
    }

    caseType(){
        return this.type;
    }

    caseIndex(){
        return this.index;
    }



}

// Case types

class Question {
    constructor (question, choixReps, goodAnswer){
        this.question = question;
        this.choixReps = choixReps;
        this.goodAnswer = goodAnswer;
    }

askQuestion(){
    caseContent.innerHTML += `<a>Question time ! You can try to skip (only a single try) it by rolling the dice and have 4 or more.</a><br><a id="question">${this.question}</a>`

    return this.question    //affiche la question

}

displayQcm(){
    
    for (var i=0; i<this.choixReps.length; i++)
    caseContent.innerHTML += `<li id="ans${i}">${this.choixReps[i]}</li>`
    return this.choixReps  // affiche le choix de réponses 
}

checkAnswer(playerAnswer){
    if (playerAnswer==this.goodAnswer){
        console.log("Good Answer, well done for a Hobbit")
        caseContent.innerHTML = `   Good Answer ! <br><br> Well done for a Hobbit!<br><br> Roll the dice again too continue`
        return true;

    } else {
        console.log("YOU SHALL NOT PASS!");
        gandalf.play();
        player1.moveBackward(2)
        caseContent.innerHTML = `Bad answer... <br><br>YOU SHALL NOT PASS!" <br><br> You move back two spaces <br><br> Roll the dice again too continue`
        return false;
    }
    

}


}

class Ennemi {
    constructor(name, force) {
        this.name = name;
        this.force = force; //nombre entre 1 et 6
    }

}


class Vide {
    constructor(message){
        this.message = message
    }

}






// Le pion

var pionCoord=["pion0", "pion1", "pion3", "pion4", "pion5", "pion6", "pion7", "pion8", "pion9", "pion10", "pion11", "pion12", "pion13", "pion14", "pion15", "pion16", "pion16", "pion17", "pion18", "pion19", "pion20", "pion21", "pion22", "pion23", "pion24", "pion25", "pion26", "pion27", "pion28", "pion29", "pion30", "pion31", "pion32", "pion33", "pion34", "pion35", "pion36", "pion37", "pion38" ];


// le Dé

function rollDice(){
    var result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    console.log(result);
    diceResult.innerHTML = result
    console.log(`You made ${result} with the dice. You go forward ${result} case(s)!`)
    diceIndication.innerHTML = `You made ${result} with the dice. <br><br> You go forward ${result} case(s)! <br> Pathway achievement : ${player1.index+result}/38   `
    return result
 }

 function rollCombatDice(){
    var result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    diceResult.innerHTML = result
    diceIndication.innerHTML = `You made ${result} with the escape <br> dice.`
    return result
 }






//List Questions
var q1 = new Question ("What is Sam work?", ["Cooker", "Cabinetmaker", "Gardener",  "Bartender"], "Gardener")
var q2 = new Question ("What are the names of the Rohan riders?", ["Dúnedain", "Rohirrim", "Edains", "Haradrim"], "Rohirrim")
var q3 = new Question ("In Mordor, what kind of food does Frodo say he can't remember the taste of?", ["Cheese", "Strawberries", "Bacon", "Mushrooms"], "Strawberries" )
var q4 = new Question ("Who became King of Rohan after Theoden met his demise in battle?" , ["Eowym", "Grima", "Eomer", "Eorl"], "Eomer")
var q5 = new Question ("How many wizards are there in Middle Earth?", ["Three", "Five","Four", "Six" ], "Five")
var q6 = new Question ("What is the name of the volcano that the Ring is thrown into?", ["Osgiliath", "Minas Tirith", "Cirith Ungol", "Barad Dur"], "Barad Dur")
var q7 = new Question ("Which of the following characters is unable to resist the Ring's temptation?", ["Boromir", "Gandalf", "Galadriel", "Gimli"], "Boromir")
var q8 = new Question ("What feature do dwarf women share with male dwarves?", ["Genitalia", "Beard", "Adam's Apple", "Hairy Foots"], "Beard")
var q9 = new Question ("What causes the Ents to march to war?", ["Saruman's entry into the war", "Grima's brainwashing of Theoden", "The advent of the attack on Helm's Deep", "The harvesting of Fangorn by Saruman"], "The harvesting of Fangorn by Saruman")
var q10 = new Question ("In which decade of life is Aragorn?", ["50s", "60", "70s", "80s"], "80s")
var q11 = new Question ("Which og the following foods is NOT typical of hobbit cuisine ?", ["Bacon", "Lembas", "Pickles", "Cheese"], "Lembas")
var q12 = new Question ("How many Rings of Power are in existence?", ["Four", "Nine", "Ten", "Twenty"], "Twenty")
var q13 = new Question  ("Which gift from the Elves does Frodo NOT use during his quest?", ["Elven rope", "Lembas bread", "Galadriel's hair", "The light of a star"], "Galadriel's hair")
var q14 = new Question ("Which of the following characters is NOT from Rohan", ["Eomer", "Theoden", "Faramir", "Eowyn"], "Faramir")
var q15 = new Question ("Which of the following places is NOT a famous tower in Middle Earth", ["Minas Tirith", "Minas Morgul", "Lothlorien", "Osgiliath"], "Lothlorien")
var q16 = new Question ("Which hobbit steals a palantir", ["Merry", "Pippin", "Samwise", "Frodo"], "Pippin")
var q17 = new Question ("How many Nazgul are there ?", ["Seven", "Eight", "Nine", "Ten"], "Nine")
var q18 = new Question ("How does Boromir meet his end?", ["Sword", "Axe", "Arrows", "Drowned"], "Arrows")
var q19 = new Question ("What race did the Nazgul used to be?", ["Men", "Elves", "Dwarves", "Hobbit"], "Men")
var q20 = new Question ("What gift does Galadriel give Gimli?", ["Elvish rope", "Three strands of her hair", "A pint crafted from wood", "A dagger"], "Three strands of her hair")
var q21 = new Question ("What was Gollum's hobbit name?", ["Deagol", "Bandobras", "Smeagol", "Tobold"], "Smeagol")
var q22 = new Question ("Who is Shelob?", ["An ent that befriends Pippin and Merry", "A beastly spider that tries to eat Frodo and Sam", "An elf queen", "Uruk-hai leader"], "A beastly spider that tries to eat Frodo and Sam")
var q23 = new Question ("Why can Arwen choose a mortal life?", ["Her immortality is tied to her Evenstar necklace, which she gives away", "Galadriel, Arwen's grand mother, used Nenya to give Arwen mortality", "All elves can choose a mortal life", "Her family has human ancestry"], "Her family has human ancestry")
var q24 = new Question ("What is the name of the Balrog that attack the the fellowship in the Mines of Moria", ["Gothmog", "Bungo", "Lungorthin", "Durin's Bane"], "Durin's Bane")
var q25 = new Question ("Who narrates the prologue in the 'Fellowship of the Rings'", ["Gandalf", "Saruman", "Bilbo Baggins", "Galadriel"], "Galadriel") 
var q26 = new Question ("Who is Denethor?", ["King of Gondor", "Steward of Gondor", "King of Rohan", "Steward of Arnor"], "Steward of Gondor")
var q27 = new Question ("How are Bilbo and Frodo Baggins related?", ["Bilbo is Frodo's father", "Bilbo is Frodo's grandfather", "Bilbo is Frodo's cousin", "Bilbo is Frodo's uncle"], "Bilbo is Frodo's cousin" )
var q28 = new Question (" Which birthday does Bilbo celebrate at the beginning of The Fellowship of the Ring?", ["His 100", "His 101", "His 110", "His 111"], "His 111")
var q29= new Question ("What effect does Bilbo’s ring have on its wearer?", ["It makes him invisible", "It enables him to see in the dark", "it gives him great strength", "It has seemingly no effect"], "It makes him invisible" )
var q30 = new Question ("How did Bilbo come into possession of his ring?", ["He inherited it", "He won it in a battle", "He found it in a cave", "He found it at the bottom of a river"], "He found it in a cave" )
var q31= new Question ("To which of the following is the landscape of the Shire most similar?", ["The Scottish highlands", "The French Riviera", "The Swiss Alps", "The English countryside"], "The English countryside")
var q32= new Question ("Which of the following hobbits does NOT set out on the quest with Frodo?", ["Merry", "Fatty", "Sam", "Pippin"], "Fatty")
var q33= new Question ("What is the name of the inn at Bree?", ["The Red Lion", "The Golden Goblet", "The Prancing Pony", "The Hungry Traveler"], "The Prancing Pony")
var q34= new Question ("Which important character do the hobbits meet at the inn?", ["Bilbo", "Elrond", "Aragorn", "Gandalf"], "Aragorn")
var q35= new Question("Of what races are Legolas and Gimli, respectively?", ["Man and Dwarf", "Elf and Dwarf", "Elf and Man", "Dwarf and Elf"], "Elf and Dwarf")
var q36= new Question("What is Legolas's weapon of choice?", ["A bow and arrows", "An axe", "A sword", "A spear"], "A bow and arrows")
var q37=new Question("Moria was once an realm of which race?", ["Trolls", "Orcs", "Elves", "Dwarves"], "Dwarves")
var q38=new Question("Which terrible creature does Gandalf battle during the journey through Moria", ["The Barrow-wight", "The Balrog", "The Uruk-hai", "The Nazgul"], "The Balrog")
var q39=new Question("What are Gandalf's final words before he falls into the chasm?", ["Fly, you fools!", "All that is gold does not glitter!", "Behold Isildur's Bane!", "Fare Well!"], "Fly, you fools!")
var q40=new Question("Over which realm does Galadriel Rule", ["Gondor", "Lothorien", "Rivendell", "Rohan"], "Lothorien")
var q41=new Question("Why does Galadriel reufse the Ring when Frodo offers it?", ["It does not fit on her finger", "She dislikes its appeareance", "The metal from which it is made is fatal to Elves", "She knows it would corrupt her"], "She knows it would corrupt her")
var q42=new Question("To which city does Boromir suggest the Felloship go?", ["Minas Anor", "Minas Ithil", "Minas Morgul", "Minas Tirith"], "Minas Tirith")
var q43=new Question("Which creature does Aragorn assert has been following the Fellowship throughout the journey?", ["Gollum", "Gwaihir", "A Balrog", "A cave-troll"], "Gollum")
var q44=new Question("With which companion does Frodo set out at the end of the first movie?", ["Aragorn", "Merry", "Pippin", "Sam"], "Sam")

var questionsTable = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, q41, q42, q43, q44]


// Map
var c0 = new Case (0, "Vide")
var c1 = new Case (1, "Vide")
var c2= new Case (2,"Vide")
var c3= new Case (3, "Question")
var c4= new Case (4, "Ennemi")   // Nazgul (force5)
var c5= new Case (5, "Question")
var c6= new Case (6, "Vide")
var c7= new Case (7, "Question")
var c8= new Case (8, "Question")
var c9= new Case (9, "Question")
var c10= new Case (10, "Vide")
var c11= new Case (11, "Question")
var c12 = new Case (12,"Ennemi" )    // Nazgul (force5)
var c13= new Case (13, "Vide")
var c14= new Case (14, "Question")
var c15= new Case (15, "Question")
var c16= new Case (16, "Ennemi")  // Troll  (force4)
var c17= new Case (17 , "Question")
var c18= new Case (18 , "Question")
var c19= new Case (19, "Question") 
var c20= new Case (20, "Ennemi")     // Le Balrog (force6)
var c21= new Case (21, "Vide")
var c22= new Case (22, "Question")
var c23= new Case (23, "Question")
var c24= new Case (24, "Vide")
var c25= new Case (25, "Question")
var c26= new Case (26, "Vide")
var c27= new Case (27, "Question")
var c28= new Case (28, "Ennemi")  // Des Orcs (force4)
var c29= new Case (29, "Question")
var c30= new Case (30, "Vide")
var c31= new Case (31, "Question")
var c32= new Case (32, "Ennemi")
var c33= new Case (33, "Question")
var c34= new Case (34, "Ennemi" )   // Arachne (force 5)
var c35= new Case (35, "Question")
var c36= new Case (36, "Question")
var c37= new Case (37, "Question")
var c38= new Case (38,  "Ennemi")  // Gollum (force3)

var pathway=[c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35,c36, c37, c38]

var classTab = ["case zero", "case one", "case two", "case three", "case four", "case five", "case six", "case seven", "case eight", "case nine", "case ten", "case eleven", "case twelve", "case thirteen", "case fourteen", "case fiveteen", "case sixteen", "case seventeen", "case eighteen", "case nineteen", "case twenty", "case twentyOne", "case twentyTwo", "case twentyThree", "case twentyFour", "case twentyFive", "case twentySix", "case twentySeven", "case twentyEight", "case twentyNine", "case thirty", "case thirtyOne", "case thirtyTwo", "case thirtyThree", "case thirtyTwo", "case thirtyThree", "case thirtyFour", "case thirtyFive", "case thirtySix", "case thirtySeven", "case thirtyEight"]






var ans0 = document.getElementById('ans0')
var ans1 = document.getElementById('ans1')
var ans2 = document.getElementById('ans2')
var ans3 = document.getElementById('ans3')


diceBtn.onclick = start;
diceCombatBtn.hidden = true;
failureBtn.hidden = true;


function start(){
         sleep.hidden=true;
         diceSound.play();
        var diceValue = rollDice();
        player1.moveForward(diceValue);
        caseContent.innerHTML =""
        if (player1.index>38){
                     gollumImg.hidden=false;
                     caseContent.innerHTML = `<br> You almost at the end of your Quest! But Gollum his on your way... <br> You will have to beat him to finish your quest! <br> You have to roll the dice again and have 3 or more to beat him.`
                     diceBtn.hidden = true;
                     diceCombatBtn.hidden = false;
                     gollum.play();
                     diceCombatBtn.onclick =function Fight() {
                     var diceCombat;
                     if (diceCombat<3){
                         caseContent.innerHTML = "Gollum beat you. You move back four spaces!"
                         beat.play();
                         player1.moveBackward(4);
                         gollumImg.hidden=true;
                         diceBtn.hidden=false;
                         diceCombatBtn.hidden=true;
                     } else{
                         won.play();
                         musicShire.muted=true;
                         caseContent.innerHTML =`You managed to beat Gollum <br> You drop the Ring in the lava...<br>This is the end of Sauron and his army. <br> The Middle Earth is safe <br> You won!`
                         gollumImg.hidden=true;
                         map.innerHTML=` <div id="party">You won ! Congratulation young Hobbit!</div>`}}
        } else { 
        switch (pathway[player1.index].type) {
            case "Vide" :
            sleep.hidden=false;
            caseContent.innerHTML = "You are on a empty square. You can take some rest before continue your journey, young Hobbit !"
            caseContent.innerHTML +=`<br>Roll the dice again to continue `
            break;
            case "Ennemi":
            caseContent.innerHTML = `As ennemi is on the way.<br> You can't beat him, You're just an hobbit! <br>Fly, you fools!<br> `
              switch (player1.index) {
                  case 4:
                      nazImg.hidden=false
                      pion.hidden=true;
                      caseContent.innerHTML += `<br>It's a Nazgul ! Get of the road!`
                      caseContent.innerHTML += `<br><br>You have to roll the dice again and have a 5 or a 6 to escape him.`
                      diceBtn.hidden = true;
                      diceCombatBtn.hidden = false;
                      nazgulscream.play();
                      musicShire.muted=true;
                      nazgulbattle.play();
                      var diceCombat;
                      diceCombatBtn.onclick =function Fight() {
                        diceCombat = rollCombatDice()
                        if (diceCombat<5){
                            caseContent.innerHTML = `The Nazgul beat you. You move back four spaces! <br> Roll the dice again to continue!`
                            player1.moveBackward(4);
                            beat.play();
                            nazImg.hidden=true;
                            diceBtn.hidden=false;
                            diceCombatBtn.hidden=true;
                            pion.hidden=false;
                            musicShire.muted=false;
                            nazgulbattle.muted=true;
                        } else {
                            caseContent.innerHTML = `You managed to run away the Nazgul!<br>But you don't advance.<br>Roll the dice again to continue `
                            nazgulscream.play();
                            nazImg.hidden=true;
                            diceBtn.hidden=false;
                            diceCombatBtn.hidden=true;
                            pion.hidden=false;
                            musicShire.muted=false;
                            nazgulbattle.muted=true;
                        }
                      }
                  break; 
                  case 12:
                    nazImg.hidden=false
                    pion.hidden=true;
                    caseContent.innerHTML += `<br>It's a Nazgul ! Get of the road!`
                    caseContent.innerHTML += `<br><br>You have to roll the dice again and have a 5 or a 6 to escape him.`
                    diceBtn.hidden = true;
                    diceCombatBtn.hidden = false;
                    nazgulscream.play();
                    musicShire.muted=true;
                    nazgulbattle.play();
                    var diceCombat;
                    diceCombatBtn.onclick =function Fight() {
                      diceCombat = rollCombatDice()
                      if (diceCombat<5){
                          caseContent.innerHTML = `The Nazgul beat you. You move back four spaces! <br> Roll the dice again to continue!`
                          player1.moveBackward(4);
                          beat.play();
                          nazImg.hidden=true;
                          diceBtn.hidden=false;
                          diceCombatBtn.hidden=true;
                          pion.hidden=false;
                          musicShire.muted=false;
                          nazgulbattle.muted=true;
                      } else {
                          caseContent.innerHTML = `You managed to run away the Nazgul!<br>But you don't advance.<br>Roll the dice again to continue `
                          nazgulscream.play();
                          nazImg.hidden=true;
                          diceBtn.hidden=false;
                          diceCombatBtn.hidden=true;
                          pion.hidden=false;
                          musicShire.muted=false;
                          nazgulbattle.muted=true;
                      }
                    }         
                  break;
                  case 16 :
                      trollImg.hidden=false
                      pion.hidden=true;
                      caseContent.innerHTML += `<br> It's a Cave Troll !! Be very careful!"`
                      caseContent.innerHTML += `<br> You have to roll the dice again and have a 4, a 5, or 6 to escape him.`
                      diceBtn.hidden = true;
                      diceCombatBtn.hidden = false;
                      trollSound.play();
                      var diceCombat;
                      diceCombatBtn.onclick =function Fight() {
                      diceCombat = rollCombatDice()
                      if (diceCombat<4){
                          caseContent.innerHTML = `The Troll beat you! You move back four spaces <br> Roll the dice again to continue!`;
                          player1.moveBackward(4);
                          beat.play();
                          trollImg.hidden=true;
                          diceBtn.hidden=false;
                          diceCombatBtn.hidden=true;
                          pion.hidden=false;
                      } else {
                          caseContent.innerHTML = `You managed to run away the Troll ! <br> But you don't advance. <br> Roll the dice again to continue`
                          trollImg.hidden=true;
                          diceBtn.hidden=false;
                          diceCombatBtn.hidden=true;
                          pion.hidden=false;
                      }}
                  break;
                  case 20 :
                      musicShire.muted = true;
                      balrog.play();
                      balrogImg.hidden=false;
                      pion.hidden=true;
                      caseContent.innerHTML += `<br> It's Balrog ! Durin's Bane ! `
                      caseContent.innerHTML += `<br>You have to roll the dice again and have a 6 to escape him.`
                      diceBtn.hidden = true;
                      diceCombatBtn.hidden = false;
                      var diceCombat;
                      diceCombatBtn.onclick =function Fight() {
                      var diceCombat = rollDice();
                      if (diceCombat===6){
                          caseContent.innerHTML = `You managed to run away the Balrog! <br> But you don't advance. <br> Roll the dice again to continue `
                          balrogImg.hidden=true;
                          diceBtn.hidden=false;
                          diceCombatBtn.hidden=true;
                          balrog.muted=true;
                          musicShire.muted=false;
                          pion.hidden=false;
                      } else {
                          caseContent.innerHTML = `The Balrog beat you ! You move back four spaces <br> Roll the dice again to continue!`
                          beat.play();
                          balrogImg.hidden=true;
                          diceBtn.hidden=false;
                          diceCombatBtn.hidden=true;
                          player1.moveBackward(4);
                          balrog.muted=true;
                          musicShire.muted=false;
                          pion.hidden=false;
                      }}
                  break;
                  case 28 : 
                       orcImg.hidden=false;
                       pion.hidden=true;
                       caseContent.innerHTML += `<br> An Orcs patrol! Be careful! <br> `
                       caseContent.innerHTML += `<br> You have to roll the dice again and have a 4, a 5 or a 6 to escape them!`
                       diceBtn.hidden = true;
                       diceCombatBtn.hidden = false;
                       var diceCombat;
                       diceCombatBtn.onclick =function Fight() {
                       var diceCombat= rollDice();
                       if (diceCombat<4){
                        caseContent.innerHTML = `The Orcs beat you!. You move back four spaces! <br> Roll the dice again to continue!`
                        beat.play();
                        player1.moveBackward(4);
                        orcImg.hidden=true;
                        diceBtn.hidden=false;
                        diceCombatBtn.hidden=true;
                        pion.hidden=false;
                    } else {
                        caseContent.innerHTML = `You managed to run away the Orcs! <br> But you don't advance! <br> Roll the dice again to continue! ` 
                        orcImg.hidden=true;
                        diceBtn.hidden=false;
                        diceCombatBtn.hidden=true;
                        pion.hidden=false;
                    } }
                   break;
                   case 32 :
                    oliphantImg.hidden=false;
                    oliphantHorn.play();
                    caseContent.innerHTML += `<br> An Oliphant!!! <br> They will never believe you in the Shire! Be careful`
                    caseContent.innerHTML += "You have to roll the dice again and have a 5 or a 6 to escape him!"
                    diceBtn.hidden = true;
                    diceCombatBtn.hidden = false;
                    diceCombatBtn.onclick =function Fight() {
                    var diceCombat;
                    var diceCombat = rollDice()
                   if (diceCombat<5){
                       caseContent.innerHTML = `The oliphant beat you ! You move back four spaces`
                       beat.play();
                       player1.moveBackward(4);
                       oliphantImg.hidden=true;
                       diceBtn.hidden=false;
                       diceCombatBtn.hidden=true;
                   } else {
                       caseContent.innerHTML = `You managed to run away the oliphant! <br> But you don't advance! <br> Roll the dice again to continue! `
                       oliphantImg.hidden=true;
                       diceBtn.hidden=false;
                       diceCombatBtn.hidden=true;
                   }}
               break;
                   case 34 :
                       arachneImg.hidden=false;
                       caseContent.innerHTML += `<br> It's Arachne. <br> Be careful, her venom is very dangerous!`
                       caseContent.innerHTML += "You have to roll the dice again and have a 5 or a 6 to escape her!"
                       diceBtn.hidden = true;
                       diceCombatBtn.hidden = false;
                       diceCombatBtn.onclick =function Fight() {
                       var diceCombat;
                       var diceCombat = rollDice()
                      if (diceCombat<5){
                          caseContent.innerHTML = `Arachne beat you ! You move back four spaces`
                          beat.play();
                          player1.moveBackward(4);
                          arachneImg.hidden=true;
                          diceBtn.hidden=false;
                          diceCombatBtn.hidden=true;
                      } else {
                          caseContent.innerHTML = `You managed to run away Arachne! <br> But you don't advance! <br> Roll the dice again to continue! `
                          arachneImg.hidden=true;
                          diceBtn.hidden=false;
                          diceCombatBtn.hidden=true;
                      }}
                  break;
                  case 38 : 
                     gollumImg.hidden=false;
                     caseContent.innerHTML = `<br> You almost at the end of your Quest! But Gollum his on your way... <br> You will have to beat him to finish your quest! <br> You have to roll the dice again and have 3 or more to beat him.`
                     diceBtn.hidden = true;
                     diceCombatBtn.hidden = false;
                     gollum.play();
                     diceCombatBtn.onclick =function Fight() {
                     var diceCombat;
                     if (diceCombat<3){
                         caseContent.innerHTML = "Gollum beat you. You move back four spaces!"
                         beat.play();
                         player1.moveBackward(4);
                         gollumImg.hidden=true;
                         diceBtn.hidden=false;
                         diceCombatBtn.hidden=true;
                     } else{
                        won.play();
                        musicShire.muted=true;
                         caseContent.innerHTML =`You managed to beat Gollum <br> You drop the Ring in the lava...<br>This is the end of Sauron and his army. <br> The Middle Earth is safe <br> You won!`
                         gollumImg.hidden=true;
                         map.innerHTML=` <div id="party">You won ! Congratulation young Hobbit!</div>`

                       
                    }}
                   break;           }
            break;
            case "Question" : 
            console.log("Questions time!")
            diceBtn.hidden= true
            var questionIndex = Math.floor(Math.random() * questionsTable.length);
            questionsTable[questionIndex].askQuestion();
            questionsTable[questionIndex].displayQcm();
            questionsTable.slice(questionIndex, 1)
            ans0 = document.getElementById('ans0')
            ans1 = document.getElementById('ans1')
            ans2 = document.getElementById('ans2')
            ans3 = document.getElementById('ans3')
            diceCombatBtn.hidden = false;
            var diceCombat;
            diceCombatBtn.onclick =function Fight() {
            var diceCombat = rollDice();
            if (diceCombat>4){
                caseContent.innerHTML = `You managed to run away the question! <br> But you don't advance. <br> Roll the dice again to continue `
                diceBtn.hidden=false;
                diceCombatBtn.hidden=true;
            } else {
                caseContent.innerHTML = `You not managed to escape the question !`
                questionsTable[questionIndex].askQuestion();
                questionsTable[questionIndex].displayQcm();
                beat.play();
                diceBtn.hidden=true;
                diceCombatBtn.hidden=true;
                failureBtn.hidden=false;
                ans0 = document.getElementById('ans0')
                ans1 = document.getElementById('ans1')
                ans2 = document.getElementById('ans2')
                ans3 = document.getElementById('ans3')
                ans0.onclick = function() {
                    questionsTable[questionIndex].checkAnswer(ans0.textContent);
                    diceBtn.hidden= false;
                    diceIndication.innerHTML="";
                    diceCombatBtn.hidden=true;
                    failureBtn.hidden=true;
    
                }
                ans1.onclick = function() {
                    questionsTable[questionIndex].checkAnswer(ans1.textContent);
                    diceBtn.hidden= false;
                    diceIndication.innerHTML="";
                    diceCombatBtn.hidden=true;
                    failureBtn.hidden=true;
    
                }
                ans2.onclick = function() {
                    questionsTable[questionIndex].checkAnswer(ans2.textContent);
                    diceBtn.hidden= false;
                    diceIndication.innerHTML="";
                    diceCombatBtn.hidden=true;
                    failureBtn.hidden=true;
                }
                ans3.onclick = function() {
                    questionsTable[questionIndex].checkAnswer(ans3.textContent);
                    diceBtn.hidden= false;
                    diceIndication.innerHTML="";
                    diceCombatBtn.hidden=true;
                    failureBtn.hidden=true;
                }
            } }
            ans0.onclick = function() {
                questionsTable[questionIndex].checkAnswer(ans0.textContent);
                diceBtn.hidden= false;
                diceIndication.innerHTML="";
                diceCombatBtn.hidden=true;
                failureBtn.hidden=true;

            }
            ans1.onclick = function() {
                questionsTable[questionIndex].checkAnswer(ans1.textContent);
                diceBtn.hidden= false;
                diceIndication.innerHTML="";
                diceCombatBtn.hidden=true;
                failureBtn.hidden=true;

            }
            ans2.onclick = function() {
                questionsTable[questionIndex].checkAnswer(ans2.textContent);
                diceBtn.hidden= false;
                diceIndication.innerHTML="";
                diceCombatBtn.hidden=true;
                failureBtn.hidden=true;
            }
            ans3.onclick = function() {
                questionsTable[questionIndex].checkAnswer(ans3.textContent);
                diceBtn.hidden= false;
                diceIndication.innerHTML="";
                diceCombatBtn.hidden=true;
                failureBtn.hidden=true;
            }
            break;
            }
            

            

            



            


        }}
    
    



        

// var case0 = document.querySelector(".case.zero")
// var case1 = document.querySelector(".case.one")
// var case2 = document.querySelector(".case.two")
// var case3 = document.querySelector(".case.three")
// var case4 = document.querySelector(".case.four")
// var case5 = document.querySelector(".case.five")
// var case6 = document.querySelector(".case.six")
// var case7 = document.querySelector(".case.seven")
// var case8 = document.querySelector(".case.eight")
// var case9 = document.querySelector(".case.nine")
// var case10 = document.querySelector(".case.ten")
// var case11 = document.querySelector(".case.eleven")
// var case12 = document.querySelector(".case.twelve")
// var case13 = document.querySelector(".case.thirteen")
// var case14 = document.querySelector(".case.fourteen")
// var case15 = document.querySelector(".case.fiveteen")
// var case16 = document.querySelector(".case.sixteen")
// var case17 = document.querySelector(".case.seventeen")
// var case18 = document.querySelector(".case.eighteen")
// var case19 = document.querySelector(".case.nineteen")
// var case20 = document.querySelector(".case.twenty")
// var case21 = document.querySelector(".case.twentyOne")
// var case22 = document.querySelector(".case.twentyTwo")
// var case23 = document.querySelector(".case.twentyThree")
// var case24 = document.querySelector(".case.twentyFour")
// var case25 = document.querySelector(".case.twentyFive")
// var case26 = document.querySelector(".case.twentySix")
// var case27 = document.querySelector(".case.twentySeven")
// var case28 = document.querySelector(".case.twentyEight")
// var case29 = document.querySelector(".case.twentyNine")
// var case30 = document.querySelector(".case.thirty")
// var case31 = document.querySelector(".case.thirtyOne")
// var case32 = document.querySelector(".case.thirtyTwo")
// var case33 = document.querySelector(".case.thirtyThree")
// var case34 = document.querySelector(".case.thirtyFour")
// var case35 = document.querySelector(".case.thirtyFive")
// var case36 = document.querySelector(".case.thirtySix")
// var case37 = document.querySelector(".case.thirtySeven")
// var case38 = document.querySelector(".case.thirtyEight")
     


// case0.onmouseover = function Hid1(){
//      case1.hidden = true;
//      case2.hidden = true; 
//      case3.hidden = true;
//      case4.hidden = true;
//      case5.hidden = true;
//      case6.hidden = true;
//      case7.hidden = true;
//      case8.hidden = true; 
//      case9.hidden = true;
//      case10.hidden = true;
//      case11.hidden = true;
//      case12.hidden = true;
//      case13.hidden = true;
//      case14.hidden = true;
//      case15.hidden = true;
//      case16.hidden = true;
//      case17.hidden = true;
//      case18.hidden = true;
//      case19.hidden = true;
//      case20.hidden = true;
//      case21.hidden = true;
//      case22.hidden = true;
//      case23.hidden = true;
//      case24.hidden = true;
//      case25.hidden = true;
//      case26.hidden = true;
//      case27.hidden = true;
//      case28.hidden = true;
//      case29.hidden = true;
//      case30.hidden = true;
//      case31.hidden = true;
//      case32.hidden = true;
//      case33.hidden = true;
//      case34.hidden = true;
//      case35.hidden = true;
//      case36.hidden = true;
//      case37.hidden = true;
//      case38.hidden = true;



//     }


//     case0.onmouseleave = function show1(){
//         case1.hidden = false;
//         case2.hidden = false; 
//         case3.hidden = false;
//         case4.hidden = false;
//         case5.hidden = false;
//         case6.hidden = false;
//         case7.hidden = false;
//         case8.hidden = false; 
//         case9.hidden = false;
//         case10.hidden = false;
//         case11.hidden = false;
//         case12.hidden = false;
//         case13.hidden = false;
//         case14.hidden = false;
//         case15.hidden = false;
//         case16.hidden = false;
//         case17.hidden = false;
//         case18.hidden = false;
//         case19.hidden = false;
//         case20.hidden = false;
//         case21.hidden = false;
//         case22.hidden = false;
//         case23.hidden = false;
//         case24.hidden = false;
//         case25.hidden = false;
//         case26.hidden = false;
//         case27.hidden = false;
//         case28.hidden = false;
//         case29.hidden = false;
//         case30.hidden = false;
//         case31.hidden = false;
//         case32.hidden = false;
//         case33.hidden = false;
//         case34.hidden = false;
//         case35.hidden = false;
//         case36.hidden = false;
//         case37.hidden = false;
//         case38.hidden = false;
   
   
   
//        }
   




//        case4.onmouseover = function Hid2(){
//         case0.hidden = true; 
//         case1.hidden = true;
//         case2.hidden = true; 
//         case3.hidden = true;
//         case5.hidden = true;
//         case6.hidden = true;
//         case7.hidden = true;
//         case8.hidden = true; 
//         case9.hidden = true;
//         case10.hidden = true;
//         case11.hidden = true;
//         case12.hidden = true;
//         case13.hidden = true;
//         case14.hidden = true;
//         case15.hidden = true;
//         case16.hidden = true;
//         case17.hidden = true;
//         case18.hidden = true;
//         case19.hidden = true;
//         case20.hidden = true;
//         case21.hidden = true;
//         case22.hidden = true;
//         case23.hidden = true;
//         case24.hidden = true;
//         case25.hidden = true;
//         case26.hidden = true;
//         case27.hidden = true;
//         case28.hidden = true;
//         case29.hidden = true;
//         case30.hidden = true;
//         case31.hidden = true;
//         case32.hidden = true;
//         case33.hidden = true;
//         case34.hidden = true;
//         case35.hidden = true;
//         case36.hidden = true;
//         case37.hidden = true;
//         case38.hidden = true;
//        }

    
//         case4.onmouseleave = function show1(){
//             case0.hidden = false;
//             case1.hidden = false;
//             case2.hidden = false; 
//             case3.hidden = false;
//             case5.hidden = false;
//             case6.hidden = false;
//             case7.hidden = false;
//             case8.hidden = false; 
//             case9.hidden = false;
//             case10.hidden = false;
//             case11.hidden = false;
//             case12.hidden = false;
//             case13.hidden = false;
//             case14.hidden = false;
//             case15.hidden = false;
//             case16.hidden = false;
//             case17.hidden = false;
//             case18.hidden = false;
//             case19.hidden = false;
//             case20.hidden = false;
//             case21.hidden = false;
//             case22.hidden = false;
//             case23.hidden = false;
//             case24.hidden = false;
//             case25.hidden = false;
//             case26.hidden = false;
//             case27.hidden = false;
//             case28.hidden = false;
//             case29.hidden = false;
//             case30.hidden = false;
//             case31.hidden = false;
//             case32.hidden = false;
//             case33.hidden = false;
//             case34.hidden = false;
//             case35.hidden = false;
//             case36.hidden = false;
//             case37.hidden = false;
//             case38.hidden = false;
       
       
       
//            }


//            case12.onmouseover =function hid3(){
//             case0.hidden = true; 
//         case1.hidden = true;
//         case2.hidden = true; 
//         case3.hidden = true;
//         case4.hidden= true;
//         case5.hidden = true;
//         case6.hidden = true;
//         case7.hidden = true;
//         case8.hidden = true; 
//         case9.hidden = true;
//         case10.hidden = true;
//         case11.hidden = true;
//         case13.hidden = true;
//         case14.hidden = true;
//         case15.hidden = true;
//         case16.hidden = true;
//         case17.hidden = true;
//         case18.hidden = true;
//         case19.hidden = true;
//         case20.hidden = true;
//         case21.hidden = true;
//         case22.hidden = true;
//         case23.hidden = true;
//         case24.hidden = true;
//         case25.hidden = true;
//         case26.hidden = true;
//         case27.hidden = true;
//         case28.hidden = true;
//         case29.hidden = true;
//         case30.hidden = true;
//         case31.hidden = true;
//         case32.hidden = true;
//         case33.hidden = true;
//         case34.hidden = true;
//         case35.hidden = true;
//         case36.hidden = true;
//         case37.hidden = true;
//         case38.hidden = true;
       
       
       
//            }


//            case12.onmouseleave = show1
       
    
    
    
    
         