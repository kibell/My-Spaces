module.exports = function (sequelize, Sequelize) {

    const User = sequelize.define('User', {
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        username: {
            type: Sequelize.TEXT
        },
        about: {
            type: Sequelize.TEXT
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_login: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });

    User.associate = function (models) {
        // We're saying that an Area should belong to an User
        // A Area can't be created without an Author due to the foreign key constraint
        User.hasMany(models.Area, {
            onDelete: "cascade",
    })
    }
    return User;

}