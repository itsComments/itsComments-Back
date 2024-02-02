const GOOGLE_PROFILE_IMAGE_PREFIX = "https://lh3.googleusercontent.com/";

function isValidGoogleProfileImageUrl(url) {
  const isValidUrl = url.startsWith(GOOGLE_PROFILE_IMAGE_PREFIX);

  return isValidUrl;
}

module.exports = { isValidGoogleProfileImageUrl };
