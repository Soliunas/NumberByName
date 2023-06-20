console.clear();

const input = '2665996659425501405540400873581907799489135464006142458778582491532721179559241333098879693925017533390586397561065764830808773222415309042678675337878431309';

function dazniausiosPoros(number) {
    let skaiciuPoros = {};
    
    for (let i = 0; i < number.length - 1; i++) {
      let pora = number[i] + number[i + 1];
      
      if (skaiciuPoros[pora]) {
        skaiciuPoros[pora]++;
      } else {
        skaiciuPoros[pora] = 1;
      }
    }
    
    return dazniausiaiPasikartojanciosPoros;
  }
  
  console.log('Poros:', dazniausiaiPasikartojanciosPoros);