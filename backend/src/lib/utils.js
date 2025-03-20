import jwt from "jsonwebtoken";

export const generateTokens = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //MS Expired dalam 7 hari
    httpOnly: true, // prevent XSS attacks cross-site scripting attact
    sameSite: "strict", // CSRF attacks cross-site request forgery attacts
    secure: process.env.NODE_ENV !== "development", //cookie hanya akan menggunakan secure: true jika bukan di mode development.
  });

  return token;
};
