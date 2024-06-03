/** Objectives:
 * Create simple objects in our program to store and access data in a more organized way.
 * Control the created objects with specific keyboard keys.
 */

/** Define the car objects (Car1 and Car2) with their properties like initial positions (x, y, w, h, s, id) */
var Car1 = { x: randomNumber(-150, -100), y: 233, w: 100, h: 30, s: randomNumber(10, 35), id: "car1" };
var Car2 = { x: randomNumber(-150, -100), y: 407, w: 100, h: 30, s: randomNumber(10, 35), id: "car2" };

/** Create Car Display, Movement, and Radar Functions */
makeCar();
function makeCar() {
  // Code to position the cars on the screen via Image elements
  image(Car1.id, Car1.id + ".png");
  setPosition(Car1.id, Car1.x, Car1.y, Car1.w, Car1.h);
  image(Car2.id, Car2.id + ".png");
  setPosition(Car2.id, Car2.x, Car2.y, Car2.w, Car2.h);
}

function moveCars() {
  // Code to update the car positions, check radar, and start the car over if they go off the screen.
  Car1.x = Car1.x + Car1.s;
  Car2.x = Car2.x + Car2.s;
  setPosition(Car1.id, Car1.x, Car1.y, Car1.w, Car1.h);
  setPosition(Car2.id, Car2.x, Car2.y, Car2.w, Car2.h);
  checkRadar(Car1);
  checkRadar(Car2);
  startOver(Car1);
  startOver(Car2);
}

function checkRadar(Car) {
  // Code to check if a car is speeding and update the radar text based on speedLimit (Red above, black below)
  if (Car.s > 25) {
    setProperty("radar", "text-color", "red");
  } else {
    setProperty("radar", "text-color", "black");
  }
  setText("radar", Car.s);
}

function startOver(Car) {
  // Wrap the car if they go off the screen.
  if (Car.x > 320) {
    Car.x = randomNumber(-150, -100);
    Car.s = randomNumber(10, 35);
  }
}

/** Run the App: Finally, call the `makeCar` function to set up the initial car positions. Use the `timedLoop` function to continuously call the `moveCar` function every 200 milliseconds to update the car positions and radar information. */
makeCar(); // Call this function initially to set up the cars.
timedLoop(200, moveCars); // Continuously update car positions and radar information.
