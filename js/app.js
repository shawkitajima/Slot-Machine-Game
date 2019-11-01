/*----- constants -----*/

const PLAY_COST = 3;
const WINNING_SLOTS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2]
];
const player = new Audio();

const IMAGES = [
    {
    url: "url('https://media.giphy.com/media/xLmG2yIKkKanS/source.gif')",
    coin:  2
    },
    {
    url: "url('https://media.giphy.com/media/sIIhZliB2McAo/source.gif')",
    coin: 5
    },
    {
    url: "url('https://media.giphy.com/media/2vq7nD921FOBt9Htps/source.gif')",
    coin: 4
    },
    {
    url: "url('https://media.giphy.com/media/cEYFeDzq42t09q9t5pS/source.gif')",
    coin: 8
    },
    {
    url: "url('https://media.giphy.com/media/3kzJvEciJa94SMW3hN/source.gif')",
    coin: 10
    }
]

let IMAGES0 = [];
for (let i = IMAGES.length - 1; i >= 0; i--) {
    IMAGES0.push(IMAGES[i]);
}

let IMAGES1 = [];
IMAGES1.push(IMAGES[2]);
IMAGES1.push(IMAGES[3]);
IMAGES1.push(IMAGES[4]);
IMAGES1.push(IMAGES[0]);
IMAGES1.push(IMAGES[1]);

/*----- app's state (variables) -----*/
let mySlots, winningslots;
let stop1, stop2, stop3;
let slot0pos, slot1pos, slot2pos, slot3pos, slot4pos, slot5pos, slot6pos, slot7pos, slot8pos;
let coinCount = 13;



/*----- cached element references -----*/

let stop1Button = document.getElementById('stop1');
let stop2Button = document.getElementById('stop2');
let stop3Button = document.getElementById('stop3');
let slot0 = document.getElementById('0');
let slot1 = document.getElementById('1');
let slot2 = document.getElementById('2');
let slot3 = document.getElementById('3');
let slot4 = document.getElementById('4');
let slot5 = document.getElementById('5');
let slot6 = document.getElementById('6');
let slot7 = document.getElementById('7');
let slot8 = document.getElementById('8');
let startButton = document.getElementById('start');


/*----- event listeners -----*/

stop1Button.addEventListener('click', function() {
    player.pause();
    playSound();
    stop1 = true;
});
stop2Button.addEventListener('click', function() {
    player.pause();
    playSound();
    stop2 = true;
});
stop3Button.addEventListener('click', function() {
    player.pause();
    playSound();
    stop3 = true;
});
startButton.addEventListener('click', init)

/*----- functions -----*/


function init() {
    mySlots = [null, null, null, null, null, null, null, null, null];
    stop1 = false;
    stop2 = false;
    stop3 = false;
    coinCount -= PLAY_COST;
    if (coinCount >= PLAY_COST) {
        startButton.addEventListener('click', init);
    }
    displayCoins();
    render();
}

let j = 2;
let z = 1;
let x = 0;
let a = 2;
let b = 1;
let c = 0;
let t = 2;
let u = 1;
let v = 0;

function render() {
    f();
    g();
    h();
}




function f() {
    if (j > 4) j = 0;
    if (z > 4) z = 0;
    if (x > 4) x = 0;
    slot0.style.backgroundImage = IMAGES[j].url;
    slot3.style.backgroundImage = IMAGES[z].url;
    slot6.style.backgroundImage = IMAGES[x].url;
    if (stop1 === true) {
        mySlots[0] = IMAGES[j].coin;
        mySlots[3] = IMAGES[z].coin;
        mySlots[6] = IMAGES[x].coin;
        checkWinner();
        return
    };
    z++;
    x++;
    j++;
    if (stop1 === false){
        setTimeout(f, 150);
    }
}

function g() {
    if (a > 4) a = 0;
    if (b > 4) b = 0;
    if (c > 4) c = 0;
    slot1.style.backgroundImage = IMAGES0[a].url;
    slot4.style.backgroundImage = IMAGES0[b].url;
    slot7.style.backgroundImage = IMAGES0[c].url;
    if (stop2 === true) {
        mySlots[1] = IMAGES0[a].coin;
        mySlots[4] = IMAGES0[b].coin;
        mySlots[7] = IMAGES0[c].coin;
        checkWinner();
        return
    };
    a++;
    b++;
    c++;
    if (stop2 === false){
        setTimeout(g, 150);
    }
}

function h() {
    if (t > 4) t = 0;
    if (u > 4) u = 0;
    if (v > 4) v = 0;
    slot2.style.backgroundImage = IMAGES1[t].url;
    slot5.style.backgroundImage = IMAGES1[u].url;
    slot8.style.backgroundImage = IMAGES1[v].url;
    if (stop3 === true) {
        mySlots[2] = IMAGES1[t].coin;
        mySlots[5] = IMAGES1[u].coin;
        mySlots[8] = IMAGES1[v].coin;
        checkWinner();
        return
    };
    t++;
    u++;
    v++;
    if (stop3 === false){
        setTimeout(h, 150);
    }
}


function checkWinner() {
    WINNING_SLOTS.forEach(slot => {
        if (
            mySlots[slot[0]] === mySlots[slot[1]] &&
            mySlots[slot[0]] === mySlots[slot[2]] &&
            mySlots[slot[0]] !== null
        ) {
        coinCount += mySlots[slot[0]] * 3;
        displayCoins();
        return
        }
    })
};

function displayCoins() {
    if (coinCount < PLAY_COST) {
        document.querySelector('#Bottom-Window > div:first-child').textContent = `You have run out of money`;
        startButton.removeEventListener('click', init);

    }
    else {
        document.querySelector('#Bottom-Window > div:first-child').textContent = `Your current coins are: ${coinCount}`;
    }
};


init();

function playSound() {
    player.src = "audio/What's New Pussycat.mp3";
    player.type = "audio/ogg";
    player.play();
  }