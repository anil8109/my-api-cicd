const { Employee } = require("../models/");


module.exports.getEmployee = async (req, res) => {
    try {
        const Employees = await Employee.findAll({})
        if (Employees) {
            return res.send({
                'status': true,
                'message': 'Employees Fetched',
                'Data': Employees
            })
        }else
        {
            return res.send({
                'status': false,
                'message': 'Unable to select Teachers',
                'Error': "Unexpected Error"
            })
        }
    } catch (error) {
        return res.send({
            'status': false,
            'message': 'Unexpected Error',
            'Error': error
        })
    }
} 