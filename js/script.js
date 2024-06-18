// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: May 2024
// This file contains the JS functions for index.html
"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-ASSIGNMENT-06-kai-nguyen-4/sw.js", {
    scope: "/ICS2O-ASSIGNMENT-06-kai-nguyen-4/",
  })
}

function countryCheck() {
  const getInfo = async (URLAddress) => {
    try {
      const result = await fetch(URLAddress)
      const jsonData = await result.json()
      let countryIndex = Math.floor(Math.random() * jsonData.count) + 1
      console.log(jsonData)
      console.log(countryIndex)
      if (jsonData.results) {
        document.getElementById("answer").innerHTML =
          "<p>Country: " +
          jsonData.results[countryIndex].country +
          "</p>"
      } else {
        document.getElementById("answer").innerHTML = "<p>Country: unknown</p>"
      }
    } catch (err) {
      console.log(err)
    }
  }
  getInfo("https://apiv3.iucnredlist.org/api/v3/country/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee")
}

