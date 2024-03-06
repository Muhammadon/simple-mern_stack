import { Sequelize } from "sequelize";

const db = new Sequelize("node_mysql", "root", "Miftah_123", {
    host: "localhost",
    dialect: "mysql"
});

export default db;