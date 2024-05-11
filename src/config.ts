import websiteDetails from "./website.json";

export const SITE = {
    website: `https://${websiteDetails.url}/`,
    domain: websiteDetails.url,
    font: websiteDetails.font || "Montserrat",
    cf: websiteDetails.cf,
    analyticsEnabled: websiteDetails.analyticsEnabled,
    desc: websiteDetails.description,
    title: websiteDetails.name,
    lightAndDarkMode: true,
    postPerPage: 5,
    scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
}
