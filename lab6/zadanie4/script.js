board = document.getElementById('board')
ball = document.getElementById('ball');
ball.style.left = "50px";
ball.style.top = "50px";
ball.style.width = "50px";
ball.style.height = "50px";
board.style.width = "600px";
board.style.height = "400px";


board.addEventListener('click', (event) =>{
    
    var x=event.clientX; 
    var y=event.clientY; 

    var info = document.getElementById('info');
    info.style.display = "none";

    if ( x > parseInt(board.style.width) - parseInt(ball.style.width))
        ball.style.left = parseInt(board.style.width) - parseInt(ball.style.width) + 'px';
    else
        ball.style.left = x + 'px';

    if (y > parseInt(board.style.height) - parseInt(ball.style.height))
        ball.style.top = parseInt(board.style.height) - parseInt(ball.style.height) + 'px';
    else
        ball.style.top = y + 'px';


    event.stopPropagation();
    
})
main = document.getElementById('main')

main.addEventListener('click', (event) =>{
    var x = event.clientX;
    var y = event.clientY;

    var info = document.getElementById('info');
    info.style.display = "inline-block";
    info.style.left = x + 'px';
    info.style.top = y + 'px';
   
})