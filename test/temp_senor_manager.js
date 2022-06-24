

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

let authToken = "empty";
let uiqueId = Date.now();

chai.use(chaiHttp);

describe("temp_senor_manager", () =>{

    it("sign_up", (done) =>{
    
        let userObject = {
            email : "test@test",
            userName : "test",
            password : "123456"
        }

        chai.request(server)
        .post('/user/signup')
        .send(userObject)
        .end((err,res) => {
            res.should.not.have.status(500);
            done();
        });
    }).timeout(5000);



    it("login", (done) =>{
  
        let userObject = {
            email : "test@test",
            password : "123456"
        }

        chai.request(server)
        .post('/user/login')
        .send(userObject)
        .end((err,res) => {
            res.should.have.status(200);
            res.body.should.have.property('message').eql("success");
            authToken = res.body.token;
            done();
        });
    }).timeout(10000);


    it("post_one", (done) =>{
        let object = {
                       unique_sensor_id :uiqueId,  
                       deployment_id : "",
                       temperature_value : "",
                       meta_data : "",
               
           }
        chai.request(server)
        .post('/temp_senor_manager/post_temp_senor_manager_data')
        .query({unique_sensor_id : uiqueId,jwtToken : authToken})
        .send(object)
        .end((err,res) =>{
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



     it("get_one", (done) =>{
        chai.request(server)
        .get('/temp_senor_manager/get_one_temp_senor_manager_data')
        .query({unique_sensor_id : uiqueId,jwtToken : authToken})
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



    it("update_one", (done) =>{
        let object = {
                       unique_sensor_id :uiqueId,  
                       deployment_id : "",
                       temperature_value : "",
                       meta_data : "",
               
        }
        chai.request(server)
        .patch('/temp_senor_manager/update_one_temp_senor_manager_data')
        .query({unique_sensor_id : uiqueId,jwtToken : authToken})
        .send(object)
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



     it("get_all", (done) =>{
        chai.request(server)
        .get('/temp_senor_manager/get_all_temp_senor_manager_data')
        .query({unique_sensor_id : uiqueId,jwtToken : authToken})
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });



    it("delete_one", (done) =>{
        chai.request(server)
        .delete('/temp_senor_manager/delete_one_temp_senor_manager_data')
        .query({unique_sensor_id: uiqueId,jwtToken : authToken})
        .end((err,res)=> {
            res.should.have.status(200);
            res.body.should.have.property('success').eql(true);
            done();
        });
    });

});
