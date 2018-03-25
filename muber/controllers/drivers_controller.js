/**
 * Created by heweiguang on 2018/3/24.
 */

const Driver = require('../models/driver');

module.exports = {
    greeting(req, res) {
        res.send({
            hi: 'there'
        });
    },

    index(req, res, next) {
        const { lng, lat } = req.query; //?lng=...&lat=...

        //Driver.geoNear in mongoose 5.0.0 has been removed
        Driver.find({
            'geometry.coordinates': {
                $nearSphere: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [parseFloat(lng), parseFloat(lat)]
                    },
                    $maxDistance: 200000 //200km
                }
            }
        })
            .then(drivers => res.send(drivers))
            .catch(next);
    },

    create(req, res, next) {
        const driverProps = req.body;

        Driver.create(driverProps)
            .then(driver => res.send(driver))
            .catch(next);
    },

    edit(req, res, next) {
        const driverId = req.params.id;
        const driverProps = req.body;

        Driver.findByIdAndUpdate({
            _id: driverId
        }, driverProps)
            .then((res) => {
                // console.log(res); //{ driving: false,_id: 5ab7216139f93190765db16e,email: 't@t.com',__v: 0 }

                return Driver.findById({
                    _id: driverId
                })
            })
            .then(driver => res.send(driver))
            .catch(next);
    },

    delete(req, res, next) {
        const driverId = req.params.id;

        Driver.findByIdAndRemove({
            _id: driverId
        })
            .then(driver => res.status(204).send(driver))
            .catch(next);
    }
};
