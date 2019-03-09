/**
 * ReportController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
async create(req, res) {
     try {
          const data = req.body;
          const userData = _.pick(data, ['date', 'report', 'email']);
          const scrum = await Report.create(userData).fetch();
          return res.send({
               success: true,
               message: 'Report saved successfully',
               data: {
               ...scrum
               },
          });
     } catch (error) {
     return res.send({
          success: false,
          error: {
          ...error
          },
     });
     }
},

view: async (req, res) => {
     const request = {
          email: req.body.email,
     };
     console.log(request)
     try {
     const report = await Report.find({
       where: {
         email: request.email
       }
     });
     console.log(report)
     if (!report) {
          return ResponseService.json(404, res, 'report not found');
     }
     return ResponseService.json(200, res, 'report retrieved successfully', report);
     } catch (err) {
          return err
     }
},

};

