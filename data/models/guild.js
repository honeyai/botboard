const { model } = require('mongoose');

class GeneralModule {
    prefix = 'c!';
}

module.exports = model('guild', {
    _id: String,
    general: { type: Object, default: new GeneralModule() }
});