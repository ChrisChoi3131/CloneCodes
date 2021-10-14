import User from "../models/Users"
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Create Account", user: [] });
}
export const postJoin = async (req, res) => {
  const user = req.body
  try {
    const { email, username, password, confirmPwd, name, location } = user;
    const exists = await User.exists({ $or: [{ email, username }] });
    if (password !== confirmPwd) {
      return res.status(400).render("join", { pageTitle: "Create Account", errorMessage: "패스워드 다름", user });
    }
    if (exists) {
      return res.status(400).render("join", { pageTitle: "Create Account", errorMessage: "중복", user });
    }
    await User.create({ email, username, password, name, location });
    res.redirect("/login")
  } catch (error) {
    return res.render("join", { pageTitle: "Create Account", errorMessage: error ,user});
  }
}
export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login Account", user: [] });
}
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  try{
    const user = await User.findOne({username});
    const match = await bcrypt.compare(password, user.password);
    user.password = "";
    if (match) {
      req.session.loggedIn = true;
      req.session.user = user
      res.redirect("/");
    } else {
      res.status(400).render("login", { pageTitle: "Login Account", user })
    }

  }catch(error){
    return res.render("login", { pageTitle: "Login Account", errorMessage: error, user:[]});
  }
}

export const edit = (req, res) => res.send("edit user");
export const remove = (req, res) => res.send("remove User");