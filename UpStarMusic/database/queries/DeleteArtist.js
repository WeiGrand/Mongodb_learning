const Artist = require('../models/artist');

/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = (_id) => {
    //Artist.findById(_id).then((artist) => artist.remove); 需要操作数据库两次
    return Artist.remove({
        _id
    }); //只需要操作数据库一次
};
