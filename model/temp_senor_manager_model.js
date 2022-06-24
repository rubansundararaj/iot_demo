
const mongoose = require('mongoose')

const temp_senor_manager_schema = new mongoose.Schema({

      unique_sensor_id :{
      type :  String ,
      required :  true ,
      unique :  true 
      },

       deployment_id :{
      type :  String ,
      required :  true ,
      unique :  false 
      },

       temperature_value :{
      type :  Number ,
      required :  true ,
      unique :  false 
      },

       meta_data :{
      type :  {} ,
      required :  false ,
      unique :  false 
      },

   })

const temp_senor_manager_item = mongoose.model('temp_senor_manager_item',temp_senor_manager_schema);

module.exports = temp_senor_manager_item;