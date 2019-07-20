import {responseMsg} from '../utils/helpers';




export const userValidation = (req, res, next) => {
  const { firstname, lastname, gender, date_of_birth} = req.body;

  if (!firstname || !firstname.trim()) {
    return responseMsg(res, 400, 'fail', 'firstname is required')
  }
  if (!lastname || !lastname.trim()) {
    return responseMsg(res, 400, 'fail', 'lastname is required')
  }
  if (!gender || !gender.trim()) {
    return responseMsg(res, 400, 'fail', 'gender is required')
  }
  if (!date_of_birth || !date_of_birth.trim()) {
    return responseMsg(res, 400, 'fail', 'date of birth is required')
  }
  next();
};