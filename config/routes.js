module.exports = function (router) {
    // renders homepage
    router.get("/", function (_req, res) {
        res.render("home");
    });
    // renders saved page
    router.get("/saved", function (_req, res) {
        res.render("saved");
    });
}