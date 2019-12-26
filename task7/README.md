IoT Lab 01 - Task 7
=====================================

In this task we implement PIR sensor to detect motion and then :
* Report the event to firebase
* Take a video clip
* Switch on Philips Hue Lights using HS 100

![Screenshot](https://github.com/iloveyii/iot-lab/blob/master/task7/public/images/demo1.gif)


## Implementation
* We used a custom node js script to detect motion as well as the python library for motion detection. This task is very similar to Task 6 except the trigger is now motion detection than temperature detection.

## Run

Run the node server:
```bash
cd task6/server
npm i
npm start

```
