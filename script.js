document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
  
    burger.addEventListener("click", () => {
      // Toggle Nav
      nav.classList.toggle("nav-active")
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      })
  
      // Burger Animation
      burger.classList.toggle("toggle")
    })
  
    // Form submission
    const form = document.getElementById("register-form")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Registration submitted! (This is a demo, no actual submission occurred)")
    })
  
    // Search functionality
    const searchBar = document.querySelector(".search-bar")
    const searchButton = searchBar.querySelector("button")
    searchButton.addEventListener("click", () => {
      const searchTerm = searchBar.querySelector("input").value
      if (searchTerm) {
        alert(`Searching for: ${searchTerm}`)
      } else {
        alert("Please enter a search term")
      }
    })
  })
  
  
