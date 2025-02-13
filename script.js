function NextWebinarDateandTime() {
  
  CurDate = new Date();
}

document.addEventListener("DOMContentLoaded", () => {
  NextWebinarDateandTime();

  var CurrentDayOfWeek = CurDate.getDay();
  var CurrentHours = CurDate.getHours();
  var CurrentMinutes = CurDate.getMinutes();
  var CurrentSeconds = CurDate.getSeconds();

  
  if (CurrentMinutes >= 30){
  NextWebinar =
    CurDate.getTime() / 1000 +
    (3660 - CurrentMinutes * 60) +
    (60 - CurrentSeconds);
  } else {
   NextWebinar =
    CurDate.getTime() / 1000 +
    (1800 - CurrentMinutes * 60) +
    (60 - CurrentSeconds);
   }
    

  // Set up FlipDown
  var flipdown = new FlipDown(NextWebinar)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {});
});