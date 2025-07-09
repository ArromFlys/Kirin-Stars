const destinations = [
    {
        title: "Forest Wild Life",
        image: "https://plus.unsplash.com/premium_photo-1669750817438-3f7f3112de8d?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Beach Vibe",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=60"
    },
    {
        title: "Snowy Escape",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const container = document.getElementById("destinationCards");

destinations.forEach(dest => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${dest.image}" alt="${dest.title}" />
        <div class="info">
            <h4>${dest.title}</h4>
            <p>3D/2N from $199</p>
        </div>
    `;
    container.appendChild(card);
});