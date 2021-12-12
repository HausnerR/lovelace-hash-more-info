function checkLocationHash() {
    var hash = document.location.hash.replace(/^#/, '');

    if (hash != '') {
        var ev = new Event("hass-more-info", {
            bubbles: true,
            cancelable: false,
            composed: true,
        });
        ev.detail = {entityId: hash};

        document.querySelector("home-assistant").dispatchEvent(ev);
    }
}

customElements.whenDefined("home-assistant").then(() => {
    window.addEventListener("hashchange", checkLocationHash, false);
    checkLocationHash();
});