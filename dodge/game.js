var isGameOver; 
var player; 
var playerImage; 
var enemy; 
var enemyImage; 
var backgroundImage; 
 
 
function preload() { 
  playerImage = loadImage("https://www.google.ie/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjPhpaahOXSAhXHD8AKHZHgBj8QjRwIBw&url=http%3A%2F%2Fimages.panda.org%2F&bvm=bv.149760088,d.ZGg&psig=AFQjCNF4wRhmbcW5I1_vrrSLiYMuvNh96g&ust=1490097578186405); 
  enemyImage = loadImage(https://www.google.ie/imgres?imgurl=https%3A%2F%2Fwww.bbcgoodfood.com%2Fsites%2Fdefault%2Ffiles%2Fglossary%2Fbanana-crop.jpg&imgrefurl=https%3A%2F%2Fwww.bbcgoodfood.com%2Fglossary%2Fbanana&docid=kUICnKYphU6xuM&tbnid=oA2rmpVu1ONLGM%3A&vet=10ahUKEwiX7pX7g-XSAhVlAsAKHcQ6DSMQMwgwKAIwAg..i&w=700&h=320&safe=strict&bih=721&biw=1440&q=banana&ved=0ahUKEwiX7pX7g-XSAhVlAsAKHcQ6DSMQMwgwKAIwAg&iact=mrc&uact=8); 
  backgroundImage = loadImage("https://surrogate.hackedu.us/i.imgur.com/aKQOg3G.png"); 
} 
 
 
function setup() { 
  isGameOver = false; 
  createCanvas(256, 256); 
  player = createSprite(width / 2, height - (playerImage.height / 2), 0, 0); 
  player.addImage(playerImage); 
  enemy = createSprite(width / 2, 0, 0, 0); 
  enemy.addImage(enemyImage); 
  enemy.rotationSpeed = 4.0; 
} 
 
 
function draw() { 
  if (isGameOver) { 
    gameOver(); 
  } else { 
    if (enemy.overlap(player)) { 
      isGameOver = true; 
    } 
    if (enemy.overlap(player)) { 
      gameOver(); 
    } 
    background(backgroundImage); 
    if (keyDown(RIGHT_ARROW) && player.position.x < (width - (playerImage.width / 2))) { 
      player.position.x += 2; 
    } 
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width / 2)) { 
      player.position.x -= 2; 
    } 
    enemy.position.y = enemy.position.y + 3; 
    if (enemy.position.y > height) { 
      enemy.position.y = 0; 
      enemy.position.x = random(5, width - 5); 
    } 
    drawSprites(); 
  } 
} 
 
 
function gameOver() { 
  background(0); 
  textAlign(CENTER); 
  fill("white"); 
  text("Game Over!", width / 2, height / 2); 
  text("Click anywhere to try again", width / 2, 3 * height / 4); 
} 
 
 
function mouseClicked() { 
  isGameOver = false; 
  player.position.x = width / 2; 
  player.position.y = height - (playerImage.height / 2); 
  enemy.position.x = width / 2; 
  enemy.position.y = 0; 
}