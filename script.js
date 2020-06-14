var animalArray = [];
        function buttonFunction() {
            var nameInput = document.getElementById('UserName');
            var animalInput = document.getElementById('UserAnimal');
            var numberInput = document.getElementById('UserNumber');
            var letterInput = document.getElementById('UserLetter');
            var endResult = document.getElementById('result');
            
            var animalType = animalInput.value;
            if (animalType == 'dog') {
                nameInput.value = 'woof woof';
                animalArray.push(animalType);   
            }     
            else if (animalType == 'cat') {
                nameInput.value = 'meow meow';
                animalArray.push(animalType);   
            }              
            else if (animalType == 'fish') {
                nameInput.value = 'blub blub';
                animalArray.push(animalType);   
            }
            else {
                nameInput.value = 'Annoying sounds';
            }

            
            if (animalArray.length > 0) {
                endResult.innerHTML = animalArray[0];

                
            for (var i = 1; i < animalArray.length; i++) {
                endResult.innerHTML += ', ' + animalArray[i];
                } 
              endResult.innerHTML += '<br />'
            }            
            endResult.innerHTML += (parseInt(numberInput.value) + 6) + '<br />'

            
            var letterCool = letterInput.value;
            if (letterCool.toLowerCase() == letterCool.toUpperCase()) {
                alert('Not a letter');
            }
            else if (letterCool.length > 1) {
                alert('Not one letter');
            }
            else {
                endResult.innerHTML += 'The cool letter is ' + letterCool + '<br />';
            }
        }