import multer from "multer"

export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user || {};
  next();
};

export const publicOnlyNavGuard = (req, res, next) =>{
  if(req.session.loggedIn){
    res.redirect("/");
  }else{
    next();
  }
}

export const loggedInOnlyNavGuard = (req, res, next) =>{
  if(!req.session.loggedIn){
    res.redirect("/");
  }else{
    next();
  }
}
export const uploadFile = multer({dest : "uploads/"});