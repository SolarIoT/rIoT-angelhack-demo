let w1 = 100;
let w2 = 100;
let b1 = 0;
let EtoG1 = 0;
let SEU1 = 0;
let SEU2 = 0;
let EFG1 = 0;
let EFG2 = 0;
function viEnAcount(verification, energyGen1, EU1, EU2) {
	if (verification){
		if(b1+energyGen1-(EU1 + EU2) <= 100)&&(b1+energyGen1-(EU1 + EU2) >= 0){
			b1 += energyGen1 - (EU1 + EU2);
		}else if(b1+energyGen1-(EU1 + EU2) < 0){
			b1 += energyGen1;
			if(b1 - EU1 >= 0){
				SEU1 += EU1;
			}else{
				SEU1 += b1;
				EFG1 += (EU1-b1);
				b1 = 0;
			}
		}else{
			EtoG1 += b1 + (energyGen1 - 100) - (EU1 + EU2);
		}
	} 
}
