//Get By Id
function getActionBtn(id) {
  return document.getElementById(id);
}
//Heart count
function trigHeart(iconId, countId) {
  const heartIcon = document.getElementById(iconId);
  const heartCountEl = getActionBtn(countId);

  let isFavorited = false;

  const emptyHeart = '<i class="fa-regular fa-heart text-[25px] cursor-pointer"></i>';
  const filledHeart = '<img src="./assets/heart.png" alt="Favorited" class="w-[25px] h-[25px] cursor-pointer">';

  heartIcon.addEventListener("click", function () {
    let count = parseInt(heartCountEl.textContent, 10);

    if (!isFavorited) {
      heartIcon.innerHTML = filledHeart;
      heartCountEl.textContent = count + 1; 
    } else {
      heartIcon.innerHTML = emptyHeart;
      heartCountEl.textContent = count - 1; 
    }

    isFavorited = !isFavorited; 
  });
}
for (let i = 1; i <= 9; i++) {
    trigHeart(`heartIcon${i}`,'heartCount');
  }


// History

document.addEventListener("DOMContentLoaded", () => {
  const creditAmountEl = getActionBtn('credit-amount');
  let credits = parseInt(creditAmountEl.textContent, 10); 

  const activityList = getActionBtn('history-container');

  function addActivity(serviceTitle, phoneNumber) {
    const now = new Date();

    const activityItem = document.createElement("div");
    activityItem.innerHTML = `
      <div class="mt-2 flex items-center justify-between rounded-[8px] gap-4 bg-[#FAFAFA] p-4">
        <div>
          <h1 class="font-semibold text-[18px]">${serviceTitle}</h1>
          <p class="text-[gray] hind-madurai-regular text-[18px]">${phoneNumber}</p>
        </div>
        <div>
          <p class="hind-madurai-regular">${now.toLocaleTimeString()}</p>
        </div>
      </div>
    `;
    activityList.prepend(activityItem);
  }

  function takeAction(id) {
    const actionBtn = getActionBtn(id);

    actionBtn.addEventListener("click", () => {
      if (credits < 20) {
        alert("❌ Insufficient Credit! Please recharge.");
        return;
      }

      credits -= 20; 
      creditAmountEl.textContent = credits;

      const serviceTitle = document.querySelector("h2.font-extrabold").innerText;
      const phoneNumber = document.querySelector("h3.font-extrabold").innerText;

      alert("Calling");
      addActivity(serviceTitle, phoneNumber);
    });
  }

  for (let i = 1; i <= 9; i++) {
    takeAction(`call-btn-${i}`);
  }
});

//Copy
  const copyCountBtn = getActionBtn('copyCount') 

  const cardCopyButtons = document.querySelectorAll('.copyBtn');

  let copyCount = 0;

  cardCopyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Copied!';
      
      copyCount++;
      copyCountBtn.textContent = copyCount;
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 1000);
    });
  });

  //Clear History
  const clearBtn = getActionBtn('clearBtn');
  const historyContainer = getActionBtn('history-container');
  
  clearBtn.addEventListener('click', () => {
    historyContainer.innerHTML = ''; 
  });


