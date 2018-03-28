/*
 * Code from CPE123 - Embedded Systems and Robotics
 * Professor Hugh Smith
 * Cal Poly, San Luis Obispo
 *
 * Erik Phillips
 * ephill07@calpoly.edu
 * 
 */

/* Serial Loop */

#include <SoftwareSerial.h>

#define rxPin 6  // recieving pin
#define txPin 7  // transmitting pin

#define keyPin 12  // key pin


SoftwareSerial BTSerial(rxPin, txPin); // RX, TX


void setup() {

  long int baudRate = 9600;
  
  pinMode(keyPin, OUTPUT);
  digitalWrite(keyPin, LOW);
  
  Serial.begin(9600);   
  BTSerial.begin(baudRate);
  
  delay(1000);  // let the HC-05 settle before putting it in AT mode
 
//  digitalWrite(keyPin, HIGH);

    Serial.print("BT Serial Baud rate set at: ");
    Serial.println(baudRate);
    BTSerial.println("AT");
    Serial.println("AT");
}

void loop() {

  char myChar;
  
  while (BTSerial.available()) {
    myChar = BTSerial.read();
    Serial.print(myChar);
  }


 
  while (Serial.available()) {
    myChar = Serial.read();
    Serial.print(myChar); //echo
    if (myChar == '[')
    {
      digitalWrite(keyPin, HIGH);
      Serial.println("Keypin High");
    } else if (myChar == ']') {
      digitalWrite(keyPin, LOW);
      Serial.println("KeyPin LOW");
    } else {
      BTSerial.print(myChar);
    }
  }
}