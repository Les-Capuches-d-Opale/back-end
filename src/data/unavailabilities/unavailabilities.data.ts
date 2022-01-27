const mongoose = require('mongoose');

const unavailabilities = [
    {
        _id: new mongoose.Types.ObjectId("61ed85fe1eb2bd376a38c861"),
        type: "Request",
        request:  new mongoose.Types.ObjectId("9cabe64dcf0d4447fa60f5e1"),
        dateStart: "2022-23-01T00:00:00.000Z",
        dateEnd: "2022-30-01T00:00:00.000Z"
    },
    {
        _id: new mongoose.Types.ObjectId("61ed85fe1eb2bd376a38c862"),
        type: "DayOf",
        dateStart: "2022-20-01T00:00:00.000Z",
        dateEnd: "2022-21-01T00:00:00.000Z"
    }, 
    {
        _id: new mongoose.Types.ObjectId("61ed85fe1eb2bd376a38c863"),
        type: "DayOf",
        dateStart: "2022-24-01T00:00:00.000Z",
        dateEnd: "2022-25-01T00:00:00.000Z"
    },
]

export = unavailabilities