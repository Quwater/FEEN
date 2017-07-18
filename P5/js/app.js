// 定义全局变量
var yIncrement = 85;
var xIncrement = 100;
var numRows = 6;
var numCols = 5;
//定义半个身位
var yHalfbox = Math.floor(yIncrement / 2);
// 这是我们的玩家要躲避的敌人
var Enemy = function() {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多

    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
    this.width = 50;
    this.height = 50;

    this.reset = function () {
        //敌人的初始位置相应远一点，适量降低敌人出现的频率,初始化3个甲虫
        //所以敌人离游戏左边界面左边，随机距离1-3格
        this.x = - Math.floor(Math.random() * xIncrement * 3 + 1);
        this.y = Math.floor((Math.random() * 3) + 1) * yIncrement - yHalfbox;
        // 赋予甲虫随机速度，100-400
        this.speed = Math.floor(Math.random() * 300) + 100;
    };
    this.reset();
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x += this.speed * dt;
    if (this.x >= numCols * xIncrement){
        // 当敌人离开屏幕时，重置它的位置
        this.reset();
    }
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.width = 50;
    this.height = 50;

    // 重置玩家的位置
    this.reset = function () {
        this.x = xIncrement * 2;
        this.y = yIncrement * 4 + yHalfbox;
    };

    // 在第一条路上重置玩家位置
    this.reset();

    //检查玩家位置是否处于特殊位置，如果是，进行相应操作
    this.update = function () {
        if (this.x >= numCols * xIncrement) {
            this.x -= xIncrement;
        }
        if (this.x < 0) {
            this.x += xIncrement;
        }
        if (this.y >= (numRows - 1) * yIncrement) {
            this.y -= yIncrement;
        }
        if (this.y < 0) {
            this.reset();
        }
        this.render();
    };

    // 通过检测输入键位，判定玩家位置
    this.handleInput = function (direction) {
        switch (direction) {
            case 'left':
                this.x -= xIncrement;
                break;
            case 'up':
                this.y -= yIncrement;
                break;
            case 'right':
                this.x += xIncrement;
                break;
            case 'down':
                this.y += yIncrement;
                break;
        }
        this.update();
    };
};

//将Player的原型委托到Enemy的原型上，render()函数可以共用
Player.prototype = Object.create(Enemy.prototype);

//判定两个矩形是否相撞的算法
function checkCollisions() {
    allEnemies.forEach(function (enemy) {
        if (enemy.x < player.x + player.width &&
            enemy.x + enemy.width > player.x &&
            enemy.y < player.y + player.height &&
            enemy.height + enemy.y > player.y) {
            //相撞就重置玩家位置
            player.reset();
        }
    });
}


// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面

var allEnemies = [];
for (var i = 0; i < 3; i++) {
    allEnemies.push(new Enemy());
}
var player = new Player();


// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
