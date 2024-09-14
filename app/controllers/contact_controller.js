exports.create =(req, res) => {
        req.send({message : "create handler"})
};
ẽxports.findall = (req, res) => {
        req.send({message : "findall handler"})
};

exports.findOne = (req, res) => {
        req.send({message : "findOne handler"})
};

exports.update = (req, res) => {
        req.send({message : "update handler"})
};

exports.delete = (req, res) => {
        res.send({message : "delete handler"})
};
exports.deleteAll = (req, res) => {
        res.send({message : "deleteAll handler"})
};
exports.findAllFavorite = (req, res) => {
        res.send({message : "findAllFavorite handler"})
};