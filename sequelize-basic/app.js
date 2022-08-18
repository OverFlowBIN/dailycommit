const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("mytestdb", "root", "dudqls12!@", {
  host: "localhost",
  dialect: "mysql",
});

// defined  User model
const User = sequelize.define("User", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  emailID: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// defined  Student model
const Student = sequelize.define(
  "Student",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    emailID: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    //     timestamps: true 일 경우 createdAt, updatedAt 컬럼을 자동으로 추가하고 row가 생성, 수정될 때 시간이 자동으로 입력됩니다.
    // paranoid: timestamps 가 true 경우에만 사용가능합니다. deletedAt 이라는 컬럼이 추가되며 row 삭제하는 sequelize 명령 내릴 경우 deletedAt에 제거 날짜를 입력합니다.
    // underscored: sequelize가 자동으로 생성해주는 컬럼명을 스네이크 형식으로 변경합니다. createdAt, updatedAt, deletedAt 컬럼을 각각 created_at, updated_at, deleted_at으로 변경해 줍니다.
    // tableName: sequelize는 자동으로 define 메소드 첫번째 인자(모델명)를 복수형으로 만들어 테이블명으로 사용합니다. 테이블 명을 다른 것으로 지정하고 싶을 때 해당 옵션을 사용합니다
  }
);

// Excuting defined data model
sequelize.sync();

// connect DB
// async function fun() {
//   try {
//     await sequelize.authenticate();
//     console.log("db connection establed succefully");
//   } catch (error) {
//     console.error(error);
//   }
// }

// fun();
