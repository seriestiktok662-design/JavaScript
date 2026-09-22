const classe = "Mago";

switch (classe) {

case "Guerreiro":
console.log("Classe: Guerreiro");
console.log("0 guerreiro é um combatente corpo a corpo, especializado em força e resistência.");
console.log("Habilidades: Ataque poderoso, Defesa sólida, Fúria de batalha");
break;
case "Mago":
console.log("Classe: Mago");
console.log("O mago é un conjurador de feitiços, especializado en magia ofensiva e suporte.");
console.log("Habilidades: Magia de fogo, Magia de gelo, Magia de cura");
break;
case "Arqueiro":
console.log("Classe: Arqueiro");
console.log("O arqueiro é um atirador de longa distância, especializado em precisão e agilidade.");
console.log("Habilidades: Precisão, Agilidade, Tiro com precisão");
break;
case "Ladino":
console.log("Classe: Ladino");
console.log("0 ladino é um especialista en furtividade e trapas, utilizado para sabotagem e espionagem.");
console.log("Habilidades: Furtividade, Trapas, Assassinio");
break;
default:
console.log("Classe desconhecida. Por favor, escolha entre guerreiro, mago, arqueiro ou ladino.");
}