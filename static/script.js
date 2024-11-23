async function openRandomLink() {
    try {
        // Directly fetch the data and open the link as soon as it arrives
        const response = await fetch('http://127.0.0.1:8000/random-link'); // FastAPI endpoint
        const { link } = await response.json(); // Destructure to directly get the 'link' from the response
        window.open(link, '_blank'); // Open the link immediately
    } catch (error) {
        // If you prefer to skip error handling for speed, you can remove this catch block
        console.error("Error fetching the link:", error);
    }
}
