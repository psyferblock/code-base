import getJwtToken from "../helpers/getJwtToken";

const cookieToken = (user, res) => {
  const token = getJwtToken(user.id);
  const cookieOptions = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  user.password = undefined;
  res.status(200).cookie("token", token,cookieOptions).json({
    success: true,
    token,
    user,
  });
};
module.exports = cookieToken;
