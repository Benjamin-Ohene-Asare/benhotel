function ClikToshowNavigation() {
    const navlinks = document.querySelector(".navlinks")
    navlinks.classList.toggle("show")
}
function countUp(target, duration) {
    const start = 0; const increment = 1; const interval = duration / (target - start); let current = start; const counterElements = document.querySelectorAll(".count"); function updateCounter() { counterElements.forEach(function (element) { element.textContent = current; }); current += increment; if (current <= target) { setTimeout(updateCounter, interval); } }
    updateCounter();
}

function ShowDetail(roomId) {
    const roomDetailContainer = document.querySelector(".room-detail-container"); const roomdetails = document.querySelector(".room-details")
    const removeDetail = document.querySelector(".fa-times")
    const ourRooms = [{ roomId: "one", roomName: 'Room1', about: "our Modern Deluxe Suite, offers a seamless blend of luxury and contemporary comfort. From panoramic views and a sumptuous king-sized bed to a spa-like bath and high-end amenities, every detail is thoughtfully designed for an elegant and relaxing experience. Stay connected with Wi-Fi, enjoy entertainment on the flat-screen TV, and savor culinary delights through in-room dining or at our on-site restaurant. Our dedicated staff ensures a seamless stay, providing 24/7 concierge and room service, creating an overall sense of luxury and comfort..", image: "img/room-1.jpg" }, { roomId: "two", roomName: 'Room 2', about: "our Modern Deluxe Suite, offers a seamless blend of luxury and contemporary comfort. From panoramic views and a sumptuous king-sized bed to a spa-like bath and high-end amenities, every detail is thoughtfully designed for an elegant and relaxing experience. Stay connected with Wi-Fi, enjoy entertainment on the flat-screen TV, and savor culinary delights through in-room dining or at our on-site restaurant. Our dedicated staff ensures a seamless stay, providing 24/7 concierge and room service, creating an overall sense of luxury and comfort..", image: "img/room-2.jpg" }, { roomId: "three", roomName: 'Room 3', about: "our Modern Deluxe Suite, offers a seamless blend of luxury and contemporary comfort. From panoramic views and a sumptuous king-sized bed to a spa-like bath and high-end amenities, every detail is thoughtfully designed for an elegant and relaxing experience. Stay connected with Wi-Fi, enjoy entertainment on the flat-screen TV, and savor culinary delights through in-room dining or at our on-site restaurant. Our dedicated staff ensures a seamless stay, providing 24/7 concierge and room service, creating an overall sense of luxury and comfort..", image: "img/room-3.jpg" }, { roomId: "four", roomName: 'Room 4', about: "our Modern Deluxe Suite, offers a seamless blend of luxury and contemporary comfort. From panoramic views and a sumptuous king-sized bed to a spa-like bath and high-end amenities, every detail is thoughtfully designed for an elegant and relaxing experience. Stay connected with Wi-Fi, enjoy entertainment on the flat-screen TV, and savor culinary delights through in-room dining or at our on-site restaurant. Our dedicated staff ensures a seamless stay, providing 24/7 concierge and room service, creating an overall sense of luxury and comfort..", image: "img/room-1.jpg" }, { roomId: "five", roomName: 'Room 5', about: "our Modern Deluxe Suite, offers a seamless blend of luxury and contemporary comfort. From panoramic views and a sumptuous king-sized bed to a spa-like bath and high-end amenities, every detail is thoughtfully designed for an elegant and relaxing experience. Stay connected with Wi-Fi, enjoy entertainment on the flat-screen TV, and savor culinary delights through in-room dining or at our on-site restaurant. Our dedicated staff ensures a seamless stay, providing 24/7 concierge and room service, creating an overall sense of luxury and comfort..", image: "img/room-2.jpg" }, { roomId: "six", roomName: 'Room six', about: "our Modern Deluxe Suite, offers a seamless blend of luxury and contemporary comfort. From panoramic views and a sumptuous king-sized bed to a spa-like bath and high-end amenities, every detail is thoughtfully designed for an elegant and relaxing experience. Stay connected with Wi-Fi, enjoy entertainment on the flat-screen TV, and savor culinary delights through in-room dining or at our on-site restaurant. Our dedicated staff ensures a seamless stay, providing 24/7 concierge and room service, creating an overall sense of luxury and comfort..", image: "img/room-3.jpg" }]; roomDetailContainer.innerHTML = ""; const selectedRoom = ourRooms.find(room => room.roomId === roomId); if (selectedRoom) {
        const detailContainer = document.createElement("div"); detailContainer.className = "details"
        const imageContainer = document.createElement("div")
        imageContainer.className = "imgContainer"
        const createFontAwesome = document.createElement("i")
        createFontAwesome.className = "fas fa-times"
        const createH2 = document.createElement("h2")
        createH2.textContent = selectedRoom.roomName
        const aboutRoom = document.createElement("p")
        aboutRoom.textContent = selectedRoom.about
        const img = document.createElement("img")
        img.src = selectedRoom.image
        detailContainer.appendChild(createH2)
        detailContainer.appendChild(aboutRoom)
        imageContainer.appendChild(img)
        roomdetails.appendChild(detailContainer); roomdetails.appendChild(imageContainer)
        roomdetails.appendChild(createFontAwesome)
        roomDetailContainer.appendChild(roomdetails)
        roomDetailContainer.style.display = "block"; createFontAwesome.addEventListener("click", () => {
            roomDetailContainer.style.display = "none"
            roomdetails.innerHTML = ""
        })
    }
}