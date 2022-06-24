const temp_senor_manager_model = require("./../model/temp_senor_manager_model")

exports.post_temp_senor_manager = async(req,res) => {
    try
    {
        var object = {
                unique_sensor_id : req.body.unique_sensor_id,
                deployment_id : req.body.deployment_id,
                temperature_value : req.body.temperature_value,
                meta_data : req.body.meta_data,
                }
        await temp_senor_manager_model.create(object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});

    }
 }

 exports.post_many_temp_senor_manager = async(req,res) => {
    try
    {
        await temp_senor_manager_model.insertMany(req.body.data_array);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});

    }
 }

 exports.get_one_temp_senor_manager = async (req,res) => {
    try
    {
        var filter = {
                unique_sensor_id : req.query.unique_sensor_id,
                }
        var returnObject = {
                }
        var result = await temp_senor_manager_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
     return res.status(400).send({success : false});

    }
 }

 exports.get_all_temp_senor_manager = async (req,res) => {
    try
    {
        var returnObject = {
                }  
        var result = await temp_senor_manager_model.find({},returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.update_one_temp_senor_manager = async (req,res) => {
    try
    {
        var filter = {unique_sensor_id : req.query.unique_sensor_id}
      
        var object = {
                deployment_id : req.body.deployment_id,
                temperature_value : req.body.temperature_value,
                meta_data : req.body.meta_data,
              
        }
        await temp_senor_manager_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

 exports.delete_one_temp_senor_manager = async (req,res) => {
    try
    {
        var filter = {unique_sensor_id : req.query.unique_sensor_id}
        await temp_senor_manager_model.findOneAndDelete(filter);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

   exports.get_one_temperature_value_by_unique_sensor_id = async(req,res)=>{   
    try
    {
        var filter = {  
            unique_sensor_id : req.query.unique_sensor_id,
            }

        var returnObject = {
            _id:0,
         temperature_value : 1 }
        
        var result = await temp_senor_manager_model.findOne(filter,returnObject);
        return res.status(200).send({success : true,message : result});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }
   
     exports.update_one_temperature_value_by_unique_sensor_id = async(req,res)=>{    
    try
    {
        var filter = {  
            unique_sensor_id : req.query.unique_sensor_id,
            }

        var object = {
         temperature_value : req.body.temperature_value }
        
        var result = await temp_senor_manager_model.findOneAndUpdate(filter,object);
        return res.status(200).send({success : true});
    }
    catch(e)
    {
        return res.status(400).send({success : false});
    }
 }

  
      
