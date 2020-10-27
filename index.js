// Your code here
function saturdayFun (argument = 'roller-skate'){
        return `This Saturday, I want to ${argument}!`
        }
        saturdayFun();
        saturdayFun("bathe my dog");

        function mondayWork(argument = "go to the office"){
            return `This Monday, I will ${argument}.`
        }

        mondayWork();
        mondayWork("work from home")

        function wrapAdjective(special = "*"){
            return function(argument){
                return `You are ${special}${argument}${special}!`
            }
        }



function actionApplyer(int,array){
    for (let i = 0; i < array.length; i++) {
       int = array[i](int);
 }
 return int;
}
actionApplyer(); 