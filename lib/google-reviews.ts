// Define types for the Google Review and the response
interface GoogleReview {
    author_name: string;
    author_url: string;
    rating: number;
    text: string;
    time: number; // This could be a Date object in your application
}

export async function getGoogleReviews(placeId: string, apiKey: string): Promise<GoogleReview> {
    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        throw error;
    }
}
