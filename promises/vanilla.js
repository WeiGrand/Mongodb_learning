/**
 * Created by heweiguang on 2018/3/17.
 */

function startGame() {
    let counter = 0;

    document.querySelector('button').addEventListener('click', () => {
        ++counter;
    });

    setTimeout(() => {
        if(counter > 5) {
            alert('You won!Your clicks ' + counter);
        }else {
            alert('Sorry, you lose!');
        }
    }, 2000);
}

startGame();
