import {
  fromEvent,
  combineLatest,
  debounceTime,
  BehaviorSubject,
  filter,
} from "rxjs";
let tipAmounts = [0.1, 0.2, 0.3, 0.4, 0.5];
let tipButtons = document.querySelectorAll(".tipButton");
let tipPercentage = 0,
  bill = 0;
let numberOfPeople = 1;
let buttonIndex = 0;
let prevButtonPushIndex = -1;

let tipPercentageSubject = new BehaviorSubject(tipPercentage);
let billSubject = new BehaviorSubject(bill);
let numberOfPeopleSubject = new BehaviorSubject(numberOfPeople);
let buttonIndexSubject = new BehaviorSubject(buttonIndex);

fromEvent(document.getElementById("billInput"), "input")
  .pipe(debounceTime(400))
  .subscribe((event) => billSubject.next(Number(event.target.value)));

fromEvent(document.getElementById("numPeopleInput"), "input")
  .pipe(
    debounceTime(400),
    filter((inputEvent) => inputEvent.target.value > 0)
  )
  .subscribe((event) => numberOfPeopleSubject.next(Number(event.target.value)));

tipAmounts.forEach((tip, index) => {
  tipButtons[index].innerHTML = `${tip * 100}%`;
  fromEvent(tipButtons[index], "click").subscribe(() => {
    buttonIndexSubject.next(index);
    tipPercentageSubject.next(tip);
    tipButtons[index].classList.toggle("click");
    removeClickStyle();
    prevButtonPushIndex = index;
    tipPercentage = tip;
  });
});

fromEvent(tipButtons[5], "click").subscribe(() => {
  let customTipPercent = prompt("Please Enter a Percentage");
  customTipPercent = customTipPercent.replace("%", "");
  console.log(customTipPercent);
  if (isNaN(customTipPercent)) {
    alert("Please enter a number");
  } else {
    tipPercentageSubject.next(Number(customTipPercent) / 100);
  }
  tipButtons[5].classList.toggle("click");
  removeClickStyle();
  prevButtonPushIndex = 5;
});

function removeClickStyle() {
  if (prevButtonPushIndex !== -1) {
    tipButtons[prevButtonPushIndex].classList.toggle("click");
  }
}

let tipAmount = combineLatest([
  tipPercentageSubject,
  billSubject,
  numberOfPeopleSubject,
]);

tipAmount.subscribe(([tipS, billS, numberOfPeopleS]) => {
  console.log({ tip: tipS, bill: billS, numP: numberOfPeopleS });
  let totalTip = (billS * tipS) / numberOfPeopleS;
  let total = totalTip + billS / numberOfPeopleS;

  document.getElementById("tip").innerText = `R${totalTip.toFixed(2)}`;
  document.getElementById("total").innerText = `R${total.toFixed(2)}`;
});

fromEvent(document.getElementById("reset"), "click").subscribe(() => {
  billSubject.next(0);
  tipButtons[buttonIndexSubject.value].classList.toggle("click");
  numberOfPeopleSubject.next(1);
  tipPercentageSubject.next(0);
});
