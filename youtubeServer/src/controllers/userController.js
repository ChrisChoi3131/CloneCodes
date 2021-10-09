import User from "../models/Users"
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Create Account", user: [] });
}
export const postJoin = async (req, res) => {
  try {
    const user = req.body
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
    return res.render("join", { pageTitle: "Create Account", errorMessage: error });
  }
}
export const edit = (req, res) => res.send("edit user");
export const remove = (req, res) => res.send("remove User");
export const login = (req, res) => res.send("login User");