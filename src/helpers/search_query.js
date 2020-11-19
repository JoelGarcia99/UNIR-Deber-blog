export const getParameterByName = (name, location) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search) || [, ""];
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}