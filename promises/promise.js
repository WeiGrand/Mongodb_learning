/**
 * Created by heweiguang on 2018/3/17.
 */

function startGame() {
    let counter = 0;

    document.querySelector('button').addEventListener('click', () => {
        ++counter;
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(counter > 5) {
                resolve();
            }else {
                reject();
            }
        }, 2000);
    })
}

startGame()
    .then(() => alert('You win!'))
    .catch(() => alert('You lost!'));
