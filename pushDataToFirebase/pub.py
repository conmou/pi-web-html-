import paho.mqtt.client as mqtt
import json
import Adafruit_DHT
import time

MQTT_SERVER = "192.168.168.171"
MQTT_PORT = 1883
MQTT_ALIVE = 60
MQTT_TOPIC = "msg/info"

mqtt_client = mqtt.Client()
mqtt_client.connect(MQTT_SERVER, MQTT_PORT, MQTT_ALIVE)
DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 17

def publish():
          #humidity, temperature = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)
          payload = { 'Temp': str("{0:0.2f}".format(temperature)),
                      'Humidity': str("{0:0.2f}".format(humidity))
          }
          print(f"payload: {payload}")
          mqtt_client.publish(MQTT_TOPIC, json.dumps(payload), qos=1)
          mqtt_client.loop(2,10)

while True:
    humidity, temperature = Adafruit_DHT.read_retry(DHT_SENSOR, DHT_PIN)
    if humidity is not None and temperature is not None:
        publish()
    else:
        print("Failed to retrieve data from HDT11 sensor")
    time.sleep(60)