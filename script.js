var diceArr = [];


	var Dice = function(){
	    this.value = this.roll();
	    this.div = document.createElement('div');
	    this.div.innerText = this.value;
	    this.div.className = 'dice';
	    document.getElementById('container').appendChild(this.div);
	    this.div.addEventListener('click',function(){
	        this.value = this.roll();
	        this.div.innerText = this.value;
	    }.bind(this));
	    this.div.addEventListener('dblclick', function(){
	        this.div.remove();
	         var id = diceArr.indexOf(this);
	        diceArr.splice(id,1);
	    }.bind(this))
	}


	Dice.prototype.roll = function(){
	    return rand();
	}


	function rand(){
	    return Math.floor(Math.random() * 6) + 1;
	}


	document.getElementById('getDie').addEventListener('click',function(){
	    var d = new Dice();
	    diceArr.push(d);
	})


	document.getElementById('rollDie').addEventListener('click', function(){
	        for(var i = 0; i<diceArr.length;i++){
	            diceArr[i].value = diceArr[i].roll();
	            diceArr[i].div.innerText = diceArr[i].value;
	        }
	})


	document.getElementById('sumDie').addEventListener('click', function(){
	    var total = 0;
	    for (var i=0;i<diceArr.length;i++){
	        total+=diceArr[i].value;
	    }
	    alert('The sum of all dice add up to ' + total);
	})
