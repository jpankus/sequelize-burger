

module.exports = function(sequelize, DataTypes) {
/* NOTE: Sequelize will create the id column*/
    var Burger = sequelize.define('Burger', {
        burger_name: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN
        },
        eatenby: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        date: {
            type: DataTypes.DATE
        }
    }, 
    {
        // timestamping
        // does when writing new table
        timestamps: false
    });
    return Burger;
};
