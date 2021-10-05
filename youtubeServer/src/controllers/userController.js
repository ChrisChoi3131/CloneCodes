import User from "../models/Users"
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Create Account" });
}
export const postJoin = async (req, res) => {
  const { email, username, password, name, location } = req.body;
  await User.create({email,username,password,name,location});
  res.redirect("/login")
}
export const edit = (req, res) => res.send("edit user");
export const remove = (req, res) => res.send("remove User");
export const login = (req, res) => res.send("login User");