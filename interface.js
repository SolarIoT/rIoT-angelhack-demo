let W1 = 100;
let W2 = 100;
let b1 = 0;
let EtoG1 = 0;
let SEU1 = 0;
let SEU2 = 0;
let EFG1 = 0;
let EFG2 = 0;
function viEnAcount(verification, energyGen1, EU1, EU2) {
	if (verification){
		//battery between full and empty
		if(b1+energyGen1-(EU1 + EU2) <= 100)&&(b1+energyGen1-(EU1 + EU2) >= 0){
			b1 += energyGen1 - (EU1 + EU2);
			SEU1 += EU1;
			SEU2 += EU2;
			W1 += EU2;
			W2 -= EU2;
		//battery has run out
		}else if(b1+energyGen1-(EU1 + EU2) < 0){
			b1 += energyGen1;
			//enough energy for the primary user
			if(b1 - EU1 >= 0){
				SEU1 += EU1;
				b1 -= EU1;
				SEU2 += b1;
				EFG2 += EU2 - b1;
				b1 = 0;
			//not enough energy for either
			}else{
				SEU1 += b1;
				EFG1 += (EU1-b1);
				b1 = 0;
				EFG2 += EU2;
			}
		//battery is full
		}else{
			EtoG1 += b1 + (energyGen1 - 100) - (EU1 + EU2);
			SEU1 += EU1;
			SEU2 += EU2;
		}
	} 
}
