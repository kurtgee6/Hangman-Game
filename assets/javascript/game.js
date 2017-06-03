	

  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var characters = ["Avatar Aang", "Sokka", "Firelord Ozai", "Toph", 
                          "Katara", "Zuko", "Appa", "Momo", "Azula", "Mai", 
                          "Avatar Roku", "Uncle Iroh", "Ty Lee", "King Bumi", 
                          "Suki", "Gyatso", "Master Pakku","Long Feng", 
                          "The Boulder", "Joo Dee", "Bato", "Pipsqueak", 
                          "Ursa", "Master Piandao", "Xin Fu", "Princess Yue",
                          "Wan Shi Tong", "Hei Bai", "Bosco", 
                          "Jet", "Zhao", "Cabbage Man", "Firelord Sozin", "Nyla", "Fang"]; 

       var computerChoice = Math.random();

       function consoleInside(arr) {

       	for (var i = 0; i < arr.length; i++) {
       		
       		console.log(arr[i]);
       	}
       	console.log("-----------");
       }