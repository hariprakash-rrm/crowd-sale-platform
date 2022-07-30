import TermsAndConditions from "../models/terms-conditions.model";
const responseModule = require("../../../../../config/response");

export const createTermsAndConditions = async (req, res) => {
  try {
    let termsAndConditions = new TermsAndConditions(req.body);
    termsAndConditions.save();
    return responseModule.successResponse(res, {
      success: 1,
      message: "Terms and Conditions created successfully",
      data: termsAndConditions,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};

export const updateTermsAndConditions = async (req, res) => {
  try {
    const termsAndConditions = await TermsAndConditions.findOneAndUpdate(
      {
        id: req.params.id,
      },
      {
        $set: req.body,
      },
      {
        new: true,
      }
    ).exec();
    return responseModule.successResponse(res, {
      success: 1,
      message: "Terms and Conditions updated successfully",
      data: termsAndConditions,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};

export const getTermsAndConditionss = async (req, res) => {
  try {
    let termsAndConditions = await TermsAndConditions.find({});
    return responseModule.successResponse(res, {
      success: 1,
      data: termsAndConditions,
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};

export const removeTermsAndConditions = async (req, res) => {
  try {
    let termsAndConditions = TermsAndConditions.find({
      _id: req.query.termsAndConditionsId,
    })
      .remove()
      .exec();
    return responseModule.successResponse(res, {
      success: 1,
      data: {},
      message: "Terms and Conditions removed successfully",
    });
  } catch (error) {
    return responseModule.errorResponse(res, {
      success: 0,
      message: error.message || "Something went wrong!, Please try again",
      data: {},
    });
  }
};
