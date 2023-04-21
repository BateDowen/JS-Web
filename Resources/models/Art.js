const uniqId = require('uniqid')

class Art {
    constructor(title,painting,picture,certificate){
        this.id = uniqId(),
        this.title = title,
        this.painting = painting,
        this.picture = picture,
        this.certificate = certificate
    
    }
};
module.exports = Art;
