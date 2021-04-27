const input = document.getElementById("input");

userquestion = {
    "hello":"hello",
    "what is your name":"my name is bot made by cris, pratham",
    "what is AI":"the science and engineering of making intelligent machines is called AI",
    "what are the four fields of AI":"there are four fields of AI 1)Data analytics",
    "who coined the word artificial intelligence":"the word artificial intelligence was coined by John mcCarthy",
    "who had 1st discovered artificial intelligence":"ALAN TURING",
    "what is IBM WATSON":"it is a question answering machine",
    "in which year mit laboratory was founded":"it was founded in the year 1959",
    "when was the first chatbot ELIZA chatbot made":"It was made in 1961",
    "who is your best friend":"my best friends are the developers who gave me life",
    "what is artificial narrow intelligence":"it also known as weak AI,ANI is the stage of AI involving machines that can perform son a narrowly defined set of specific task",
    "what is artificial general intelligence":"it is known as strong AI, AGI is the stage of AI where machines will possess the ability to think and make decisions just like us",
    "what is artificial super intelligence":"it is the stage of AI when the capability of of computers that surpass human beings",
    "who is the world champion of chess":"the world champion of chess is Garry Kasparov who was then defeated by IBM DEEP BLUE invented by IBM",
    "for what is christopher strachey famous for":"he wrote a checkers programme",
    "have you played any game":"NO",
    "what are the domains of AI":"domains of AI- 1)machine learning 2)Deep learning 3)robotics 4)fuzzy logics 5)natural language processing 5)expert system",
    "what are the types of AI":"we can't say because there are many types of AI are there i've not been programmed to answer that",
    "will you rule on the earth the one day":"yes",
    "are you intelligent than humans":"it depends on my programming",
    
    
 }


function chatbot(){

    var input = document.getElementById("input").value;
    
    document.getElementById("text").innerHTML = "<br>";
    
    if(input in userquestion){
    document.getElementById("text").innerHTML = userquestion[input] + "<br>";
    }
    
    else{
        document.getElementById("text").innerHTML = "I didn't catch that could you please try again";
    }
}
    
