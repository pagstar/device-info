async function fetchIp() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to propagate it further if needed
  }
}

async function getDeviceInfo() {
  const ipAddress = await fetchIp();

  const deviceInfo = {
    ipAddress: ipAddress,
    httpAcceptBrowserValue: "text/html",
    httpAcceptContent: "*/*",
    httpBrowserLanguage: navigator.language || "",
    httpBrowserJavaEnabled:
      (navigator.javaEnabled && navigator.javaEnabled()) || false,
    httpBrowserJavaScriptEnabled: true,
    httpBrowserColorDepth: screen.colorDepth.toString() || "",
    httpBrowserScreenHeight: screen.height.toString() || "",
    httpBrowserScreenWidth: screen.width.toString() || "",
    httpBrowserTimeDifference:
      (new Date().getTimezoneOffset() / 60).toString() || "",
    userAgentBrowserValue: navigator.userAgent || "",
  };

  return deviceInfo;
}
