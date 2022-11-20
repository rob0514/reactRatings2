const Average = (array) => {
        return array.reduce((acc, cur) => {
            return acc + cur.rating
        }, 0) / array.length
    }

export {Average}

