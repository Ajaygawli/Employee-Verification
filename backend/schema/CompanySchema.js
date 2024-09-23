

const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  registrationNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  companyGstNo: {
    type: String,
    required: true,
  },
  companyPan: {
    type: String,
    required: true,
  },
  companyService: {
    type: String,
    required: true,
  },
  companyRepresentative: {
    type: String,
    required: true,
  },
  companyAddress: {
    type: String,
    required: true,
  },



});

module.exports = mongoose.model('Companies', CompanySchema);
