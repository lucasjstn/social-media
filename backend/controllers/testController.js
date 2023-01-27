const testFunction = (req, res) => {
    console.log("Its working");

    res.status(200).json({
        status: "success",
        data: "it's working",
    });
};

module.exports = testFunction;
