import User from "../models/Users"
import bcrypt from "bcrypt";
import fetch from 'node-fetch';
import fs from "fs/promises"


export const getLogout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
}
export const loginGithub = (req, res) => {
  const baseURL = "https://github.com/login/oauth/authorize"
  const config = {
    client_id: process.env.GITHUB_CLIENT_ID,
    allow_signup: false,
    scope: "read:user user:email",
  }
  const params = new URLSearchParams(config);
  const url = `${baseURL}?${params}`
  res.redirect(url);
}
export const callbackGithub = async (req, res) => {
  const { code } = req.query;
  const baseURL = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code
  }
  const params = new URLSearchParams(config);
  const url = `${baseURL}?${params}`
  const tokenRes = await (await fetch(url, {
    method: "post",
    headers: {
      Accept: "application/json",
    }
  })).json();
  const apiURL = "https://api.github.com";
  if ("access_token" in tokenRes) {
    const { access_token } = tokenRes;
    const userData = await (await fetch(`${apiURL}/user`, {
      method: "get",
      headers: {
        Authorization: `token ${access_token}`
      }
    })).json();
    const emailRes = await (await fetch(`${apiURL}/user/emails`, {
      method: "get",
      headers: {
        Authorization: `token ${access_token}`
      }
    })).json();
    const emailObj = emailRes.find(({ primary, verified }) => primary === true && verified === true);
    if (!emailObj) res.redirect("/login");
    let dbUser = await User.findOne({ email: emailObj.email });
    if (!dbUser) {
      dbUser = await User.create({
        avatarUrl: userData.avatar_url,
        name: userData.name ? userData.name : userData.login,
        username: userData.login,
        email: emailObj.email,
        socialOnly: true,
        location: userData.location,
      });
    } else if (!dbUser?.socialOnly) res.render("login", { pageTitle: "Login Account", errorMessage: "Error : Login with Password", user: [] });
    req.session.loggedIn = true;
    req.session.user = dbUser;
    return res.redirect("/");
  } else {
    res.redirect("/login")
  }
}
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Create Account", user: [] });
}
export const postJoin = async (req, res) => {
  const user = req.body
  try {
    const { email, username, password, confirmPwd, name, location } = user;
    const exists = await User.exists({ $or: [{ email, username }] });
    if (password !== confirmPwd) {
      return res.status(400).render("join", { pageTitle: "Create Account", errorMessage: "???????????? ??????", user });
    }
    if (exists) {
      return res.status(400).render("join", { pageTitle: "Create Account", errorMessage: "??????", user });
    }
    await User.create({ email, username, password, name, location });
    res.redirect("/login")
  } catch (error) {
    return res.render("join", { pageTitle: "Create Account", errorMessage: error, user });
  }
}
export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login Account", user: [] });
}
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    const match = await bcrypt.compare(password, user.password);
    user.password = "";
    if (match) {
      req.session.loggedIn = true;
      req.session.user = user
      res.redirect("/");
    } else {
      res.status(400).render("login", { pageTitle: "Login Account", user })
    }

  } catch (error) {
    return res.render("login", { pageTitle: "Login Account", errorMessage: error, user: [] });
  }
}

export const getEdit = (req, res) => {
  res.render("edit-profile", { pageTitle: "Edit Profile" })
}
export const postEdit = async (req, res) => {
  const {
    session: {
      user: {
        _id: id,
        avatarUrl
      }
    },
    body: {
      username, email, name, location
    },
    file
  } = req;
  const existUser = await User.findOne({ $or: [{ email, username }] });
  if (existUser) {
    await fs.unlink(file?.path);
    return res.status(400).render("edit-profile", { pageTitle: "Login Account", errorMessage: "email/username is already token", });
  }
  // if (existUser?.id !== id) return res.redirect("/");
  const updatedUser = await User.findByIdAndUpdate(id, { username, email, name, location, avatarUrl : file ? `/${file.path}` : avatarUrl}, { new: true });
  req.session.user = updatedUser;
  res.redirect("/users/edit");
};

export const getChangePassword = (req, res) => {
  return res.render("users/change-password", { pageTitle: "Change password" })
}
export const postChangePassword = async (req, res) => {
  const {
    session: {
      user: {
        _id: id
      }
    },
    body: {
      currentPW, newPW, newPWConfirm
    }
  } = req;
  if (newPW !== newPWConfirm) return res.status(400).render("users/change-password", { pageTitle: "Change password", errorMessage: "Check new password" })
  const user = await User.findById(id);
  const match = await bcrypt.compare(currentPW, user.password);
  if (match) {
    user.password = newPW;
    await user.save();
    return res.redirect("/logout");
  } else {
    return res.status(400).render("users/change-password", { pageTitle: "Change password", errorMessage: "Check Current password" });
  }
}

export const remove = (req, res) => res.send("remove User");