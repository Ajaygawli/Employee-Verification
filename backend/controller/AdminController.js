const CompanySchema = require("../schema/CompanySchema")

exports.getallcompanies=async(req,res)=>{
    try {
        const companies= await CompanySchema.find()
        // console.log(companies);
        res.status(200).json(companies);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
}

exports.deleteCompany=async(req,res)=>{
    try {
        const companyId = req.params.id;
        // console.log("hitting")
        const company = await CompanySchema.findByIdAndDelete(companyId);

        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }

        res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}