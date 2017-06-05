

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

                            //characters names set with their respected images 

var characters = [["Avatar Aang", "../assets/images/aang.jpg"],
                  ["Sokka", "../assets/images/sokka.jpg"],
                  ["Firelord Ozai", "../assets/images/FireLord-Ozai.jpg"],
                  ["Toph", "../assets/images/Toph_Beifong.png"],
                  ["Katara", "../assets/images/katara.jpg"],
                  ["Zuko", "../assets/images/zuko.jpg"],
                  ["Appa", "../assets/images/Appa.jpg"],
                  ["Momo", "../assets/images/momo.jpg"],
                  ["Azula", "../assets/images/Azula.jpg"],
                  ["Mai", "../assets/images/Mai.png "],
                  ["Avatar Roku", "../assets/images/Avatar_Roku.jpg "],
                  ["Uncle Iroh", "../assets/images/uncle-iroh.jpg"],
                  ["Ty Lee", "../assets/images/ty_lee.jpg"],
                  ["King Bumi", "../assets/images/King-Bumi.jpg"],
                  ["Suki", "../assets/images/Suki.png"],
                  ["Gyatso", "../assets/images/Gyatso.png"],
                  ["Master Pakku", "../assets/images/Pakku.png"],
                  ["Long Feng", "../assets/images/Long-Feng.jpeg"],
                  ["The Boulder", "../assets/images/The_Boulder.png"],
                  ["Joo Dee", "../assets/images/Joo_Dee.png"],
                  ["Bato", "../assets/images/Bato.png"],
                  ["Pipsqueak", "../assets/images/pipsqueak.png"],
                  ["Ursa", "../assets/images/ursa.jpg"],
                  ["Master Piandao", "../assets/images/Piandao.png"],
                  ["Xin Fu", "../assets/images/Xin_Fu.png"],
                  ["Princess Yue", "../assets/images/Princess-Yue.jpg"],
                  ["Wan Shi Tong", "../assets/images/Wan_Shi_Tong.png"],
                  ["Hei Bai", "../assets/images/Hei_Bai.png"],
                  ["Bosco", "../assets/images/Bosco.png"],
                  ["Jet", "../assets/images/Jet.png"],
                  ["Zhao", "../assets/images/Zhao.png"],
                  ["Cabbage Man", "../assets/images/Cabbage_man.png"],
                  ["Firelord Sozin", "../assets/images/sozin.jpg"],
                  ["Nyla", "../assets/images/nyla.png"],
                  ["Fang", "../assets/images/Fang.png"],
                  ["Earth Nation", "../assets/images/earth.jpg"],
                  ["Water Nation", "../assets/images/water.png"],
                  ["Fire Nation Palace", "../assets/images/Fire-Nation-Palace.png"],
                  ["Air Nomads", "../assets/images/air.png"],
                  ["Ba Sing Se", "../assets/images/Ba-Sing-Se.png"],
                  ["Fire Nation", "../assets/images/fire.jpg"],
                  ["Hama House", "../assets/images/Hama's_inn.png"],
                  ["Omashu", "../assets/images/Omashu.jpg"],
                  ["Air Nomad Caves", "../assets/images/Air_Nomad_caves.png"],
                  ["Great Divide", "../assets/images/Great_Divide.png"],
                  ["Serpents Pass", "../assets/images/Serpents-Pass.png"],
                  ["Spirit World", "../assets/images/Spirit_World.png"],
                  ["Foggy Swamp", "../assets/images/Foggy-swamp.jpg "],
                  ["Ember Island", "../assets/images/Ember_Island.png"],
                  ["Kyoshi Island", "../assets/images/Kyoshi_Island.png"],
                  ["Boiling Rock", "../assets/images/Boiling_Rock.png"]];

                      //function to randomize the displayed image and character on website

var random = function () {

  var ran = Math.floor((Math.random() * characters.length) + 1);
  globalWord = characters[ran][0];
  globalImage = characters[ran][1];

}


var generator = function () { 
  document.getElementById("images").addEventListener("load", random);
  }




