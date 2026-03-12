export function getCurrentDate() {
    const date = new Date();

    const formatted = date.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
    });
    return formatted;
}