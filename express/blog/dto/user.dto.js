const UserDto = ({_id, name, email}) => ({
  id: _id,
  name,
  email,
});
// const UserDto = (userData) => ({
//   id: userData.id,
//   name: userData.name,
//   email: userData.email,
// });

module.exports = { UserDto };
