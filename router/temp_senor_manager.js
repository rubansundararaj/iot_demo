


var express = require('express');
var apirouter = express.Router();
const {decodeAndAuthTokenJwtToken} = require('./../utils/auth');
var temp_senor_managerController = require('../ApiController/temp_senor_manager');

apirouter.post('/post_temp_senor_manager_data', decodeAndAuthTokenJwtToken, temp_senor_managerController.post_temp_senor_manager);

apirouter.post('/post_many_temp_senor_manager_data', decodeAndAuthTokenJwtToken, temp_senor_managerController.post_many_temp_senor_manager);

apirouter.get('/get_one_temp_senor_manager_data',decodeAndAuthTokenJwtToken, temp_senor_managerController.get_one_temp_senor_manager);

apirouter.get('/get_all_temp_senor_manager_data',decodeAndAuthTokenJwtToken, temp_senor_managerController.get_all_temp_senor_manager);

apirouter.patch('/update_one_temp_senor_manager_data',decodeAndAuthTokenJwtToken, temp_senor_managerController.update_one_temp_senor_manager);

apirouter.delete('/delete_one_temp_senor_manager_data',decodeAndAuthTokenJwtToken, temp_senor_managerController.delete_one_temp_senor_manager);

  
apirouter.get('/get_one_temperature_value_by_unique_sensor_id',decodeAndAuthTokenJwtToken, temp_senor_managerController.get_one_temperature_value_by_unique_sensor_id);
      
  
apirouter.patch('/update_one_temperature_value_by_unique_sensor_id',decodeAndAuthTokenJwtToken, temp_senor_managerController.update_one_temperature_value_by_unique_sensor_id);


    



module.exports = apirouter;