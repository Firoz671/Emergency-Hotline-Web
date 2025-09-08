function trigHeart(id) {
  const heartIcon = document.getElementById(id);

  let isFavorited = false;

  const emptyHeart = '<i class="fa-regular fa-heart"></i>';
  const filledHeart =
    '<img src="./assets/heart.png" alt="Favorited" class="w-6 h-6">';

  heartIcon.addEventListener("click", function () {
    isFavorited = !isFavorited;

    if (isFavorited) {
      heartIcon.innerHTML = filledHeart;
    } else {
      heartIcon.innerHTML = emptyHeart;
    }
  });
}

trigHeart('heartIcon1')
trigHeart('heartIcon2')
trigHeart('heartIcon3')
trigHeart('heartIcon4')
trigHeart('heartIcon5')
trigHeart('heartIcon6')
trigHeart('heartIcon7')
trigHeart('heartIcon8')
trigHeart('heartIcon9')
