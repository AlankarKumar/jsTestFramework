
var get_route_schema = {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "args",
      "headers",
      "origin",
      "url"
    ],
    "properties": {
      "args": {
        "$id": "#/properties/args",
        "type": "object",
        "title": "The Args Schema"
      },
      "headers": {
        "$id": "#/properties/headers",
        "type": "object",
        "title": "The Headers Schema",
        "required": [
          "Accept",
          "Accept-Encoding",
          "Accept-Language",
          "Connection",
          "Cookie",
          "Host",
          "Referer",
          "User-Agent"
        ],
        "properties": {
          "Accept": {
            "$id": "#/properties/headers/properties/Accept",
            "type": "string",
            "title": "The Accept Schema",
            "default": "",
            "examples": [
              "application/json"
            ],
            "pattern": "^(.*)$"
          },
          "Accept-Encoding": {
            "$id": "#/properties/headers/properties/Accept-Encoding",
            "type": "number",
            "title": "The Accept-encoding Schema",
            "default": "",
            "examples": [
              "gzip, deflate, br"
            ],
            "pattern": "^(.*)$"
          },
          "Accept-Language": {
            "$id": "#/properties/headers/properties/Accept-Language",
            "type": "string",
            "title": "The Accept-language Schema",
            "default": "",
            "examples": [
              "en-US,en;q=0.9"
            ],
            "pattern": "^(.*)$"
          },
          "Connection": {
            "$id": "#/properties/headers/properties/Connection",
            "type": "string",
            "title": "The Connection Schema",
            "default": "",
            "examples": [
              "close"
            ],
            "pattern": "^(.*)$"
          },
          "Cookie": {
            "$id": "#/properties/headers/properties/Cookie",
            "type": "string",
            "title": "The Cookie Schema",
            "default": "",
            "examples": [
              "_gauges_unique_month=1; _gauges_unique_year=1; _gauges_unique=1; _gauges_unique_hour=1; _gauges_unique_day=1"
            ],
            "pattern": "^(.*)$"
          },
          "Host": {
            "$id": "#/properties/headers/properties/Host",
            "type": "string",
            "title": "The Host Schema",
            "default": "",
            "examples": [
              "httpbin.org"
            ],
            "pattern": "^(.*)$"
          },
          "Referer": {
            "$id": "#/properties/headers/properties/Referer",
            "type": "string",
            "title": "The Referer Schema",
            "default": "",
            "examples": [
              "https://httpbin.org/"
            ],
            "pattern": "^(.*)$"
          },
          "User-Agent": {
            "$id": "#/properties/headers/properties/User-Agent",
            "type": "string",
            "title": "The User-agent Schema",
            "default": "",
            "examples": [
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36"
            ],
            "pattern": "^(.*)$"
          }
        }
      },
      "origin": {
        "$id": "#/properties/origin",
        "type": "string",
        "title": "The Origin Schema",
        "default": "",
        "examples": [
          "103.55.47.54"
        ],
        "pattern": "^(.*)$"
      },
      "url": {
        "$id": "#/properties/url",
        "type": "string",
        "title": "The Url Schema",
        "default": "",
        "examples": [
          "https://httpbin.org/get"
        ],
        "pattern": "^(.*)$"
      }
    }
  };

  module.exports ={
      "getRouteSchema":get_route_schema
  }