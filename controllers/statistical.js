var Company = require('../models/company');
var User = require('../models/user');
var Work = require('../models/work');
var New = require('../models/new');
var TypeOfWork = require('../models/typeofwork');
exports.quantity = async (req, res) => {
  let numCompany = await Company.count({ distinct: true });
  let numUser = await User.count({ distinct: true });
  let numTypeOfWork = await TypeOfWork.count({ distinct: true });
  let numWork = await Work.count({ distinct: true });
  let numWorkActive = await Work.count({
    distinct: true,
    where: { status: 1 },
  });
  let numWorkUnActive = await Work.count({
    distinct: true,
    where: { status: 0 },
  });
  let numNew = await New.count({ distinct: true });
  let numNewActive = await New.count({
    distinct: true,
    where: { status: 1 },
  });
  let numNewUnActive = await New.count({
    distinct: true,
    where: { status: 0 },
  });
  res.json({
    data: {
      numCompany,
      numUser,
      numWork,
      numWorkActive,
      numWorkUnActive,
      numNew,
      numNewActive,
      numNewUnActive,
      numTypeOfWork,
    },
  });
};
